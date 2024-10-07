const grunt = require('grunt');
const markdown = require('markdown-it');
const JSDom = require('jsdom').JSDOM;
const markdwonContainer = require('markdown-it-container');
const Expression = require('@mathigon/hilbert').Expression;

const btoa = (str) => Buffer.from(str).toString('base64');

const md = markdown({html: true});

md.use(require('markdown-it-video'));
md.use(require('markdown-it-synapse-table'));
md.use(require('markdown-it-anchor'));
md.use(require('markdown-it-imsize'));  // ![test](image.png =100x200)
md.use(require('markdown-it-attrs'));
md.use(require('markdown-it-sub'));  // H~~2~~O
md.use(require('markdown-it-sup'));  // H^2^
md.use(require('markdown-it-implicit-figures'));
md.use(require('markdown-it-checkbox'), {divWrap: true, divClass: 'choice'});

md.use(markdwonContainer, 'problem', { render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      const data = {};
      const options = tokens[idx].info.trim().split(' ').slice(1);
      for (let o of options) {
        const split = o.split('=');
        data[split[0]] = split[1];
      }

      return `<div class="problem" id="p_${data.id}" data-marks="${data.marks}">
      <div class="marks">${data.marks} mark${data.marks == 1 ? '' : 's'}</div>`;
    } else {
      return '</div>';
    }
  }});

md.use(markdwonContainer, 'columns', { marker: ';', render(tokens, idx) {
  const data = {};
  const options = tokens[idx].info.trim().split(' ').slice(1);
  for (let o of options) {
    const split = o.split('=');
    data[split[0]] = split[1];
  }

  let width = Number(data.columnMinWidth || '320')

  if(Number.isNaN(width)) {
    width = 320;
  }

  let maxWidth = Number(data.maxWidth)

  if(Number.isNaN(maxWidth)) {
    maxWidth = undefined;
  } else if(maxWidth > 896) {
    maxWidth = undefined;
  }

  const styles = `
    .columns-wrapper-open-${width} {
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(${width}px, 1fr));
      grid-column-gap: 16px;
      ${maxWidth ? `max-width: ${maxWidth}px;` : ''}
      margin: 0 auto;
    }
    @media screen and (max-width: ${width + 30}px) {
      .columns-wrapper-open-${width} { display: block }
    }
  `;

  if(tokens[idx].type === 'container_columns_open'){
    // need v-style & style as vue removes style, need both to avoid flicker
    return `<v-style style="display: none;">${styles}</v-style><style>${styles}</style>
    <div class="columns-wrapper-open-${width}">`
  }

  return `</div>`
}});

md.use(markdwonContainer, 'column', { marker: '^', render(tokens, idx) {
  const options = tokens[idx].info.trim().split(' ').slice(1);

  const centerContent = options.includes('centerContent');

  if(tokens[idx].type === 'container_column_open'){
    return `<div style="${centerContent ? 'display: flex; align-items: center; justify-content: center;' : ''}"><div>`
  }
  return `</div></div>`
}});

md.use(markdwonContainer, 'hint', {
  marker: '^',
  render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      const data = {};
      const options = tokens[idx].info.trim().split(' ').slice(1);
      for (let o of options) {
        const split = o.split('=');
        data[split[0]] = split[1];
      }

      return `<div class="show-hint" v-if="!c.answers['hint-${data.id}']" v-on:click="c.showHint('hint-${data.id}')">Show Hint (–${data.marks || 1} mark)</div>
      <div class="hint" id="hint-${data.id}" data-marks="${data.marks || 1}" v-if="c.answers['hint-${data.id}']">
      <div class="hint-marks">${data.marks || 1} mark</div>`;
    } else {
      return '</div>';
    }
  }
});

md.renderer.rules.code_inline = function(tokens, idx) {
  let str = tokens[idx].content.trim();
  str = str.replace(/_(.*?)(\s|$|=|\(|\)|\*|\/|\^)/g, '_($1)$2').replace(/–/g, '-');

  try {
    const maths = Expression.parse(str).toMathML();
    return `<span class="math" v-pre>${maths}</span>`;
  } catch(e) {
    console.log(`Maths parsing error in "${str}":`, e.toString());
    return '<span class="math" v-pre></span>';
  }
};

function parseProblemList($list, $problem) {
  const itemIds = 'abcdefghijk'.split('');
  const isCheckbox = $list.querySelectorAll('[checked]').length > 1;
  $list.classList.add('choices');
  $problem.classList.add(isCheckbox ? 'checkbox' : 'radio');
  const solution = [];

  for (let $item of $list.querySelectorAll('.choice')) {
    const isCorrect = $item.children[0].hasAttribute('checked');
    const itemId = (isCheckbox ? $problem.id + '_' : '') + itemIds.shift();
    if (isCorrect) solution.push(itemId);

    const $label = $item.children[1];
    $item.removeChild($item.children[0]);
    $item.removeChild($item.children[0]);
    $item.setAttribute('data-value', itemId);

    for (let $n of $label.childNodes) $item.appendChild($n);
    while ($item.nextSibling) $item.appendChild($item.nextSibling);

    const correctClass = isCorrect ? `, correct: c.submitted` : '';

    if (isCheckbox) {
      $item.setAttribute('v-on:click', `c.setAnswer('${itemId}', !c.answers.${itemId})`);
      $item.setAttribute('v-bind:class', `{active: c.answers.${itemId}${correctClass}`);

    } else {
      $item.setAttribute('v-on:click', `c.setAnswer('${$problem.id}', '${itemId}')`);
      $item.setAttribute('v-bind:class', `{active: c.answers.${$problem.id} == '${itemId}'${correctClass}}`);
    }
  }

  // Show an additional bullet if students haven't answered this question at all.
  $list.innerHTML += `<li v-show="c.submitted && !c.answers.${$problem.id}"><div class="choice active">(Not answered)</div></li>`;

  $problem.setAttribute('data-solution', btoa(solution.join(',')));
}

function parseProblemInput($input, index, $problem) {
  const key = $problem.id + '_' + index;
  const solution = $input.getAttribute('solution');
  const isSumaze = solution === 'sumaze';

  if ($input.parentNode.tagName !== 'P') {
    const $p = $problem.ownerDocument.createElement('p');
    $input.parentNode.insertBefore($p, $input);
    $p.appendChild($input);
  }
  $input.parentNode.classList.add('text-center');

  $problem.classList.add(isSumaze ? 'sumaze' : 'input');
  $input.removeAttribute('solution');

  $input.setAttribute('data-solution', btoa(solution));
  $input.setAttribute('data-value', key);
  $input.setAttribute('v-on:change', `c.setInput`);
  $input.setAttribute(isSumaze ? 'v-model' : 'v-model.lazy', `c.answers.${key}`);
  if (!$input.hasAttribute('type')) $input.setAttribute('type', 'text');

  if (isSumaze) return;
  $input.setAttribute('v-bind:class', `{correct: c.checkInput(c.answers.${key}, '${solution}')}`);

  const $solution = $input.ownerDocument.createElement('span');
  $input.parentNode.insertBefore($solution, $input.nextSibling);
  $solution.textContent = 'Correct Solution: ' + solution;
  $solution.classList.add('input-solution');
  $solution.setAttribute('v-if', 'c.submitted');
}

function parseProblemSolution($problem, $hr, doc) {
  const $solution = doc.createElement('div');
  $solution.classList.add('solution');
  $solution.setAttribute('v-if', 'c.submitted');
  while ($hr.nextElementSibling) $solution.appendChild($hr.nextElementSibling);
  $problem.removeChild($hr);
  $problem.appendChild($solution);
}

function parseProblems(doc) {
  for (let $problem of doc.querySelectorAll('.problem')) {
    const $choice = $problem.querySelector('.choice');
    if ($choice) parseProblemList($choice.parentNode.parentNode, $problem);

    const $inputs = $problem.querySelectorAll('input[solution]');
    for (let i=0; i<$inputs.length; ++i) parseProblemInput($inputs[i], i, $problem);

    const $hr = $problem.querySelector('hr');
    if ($hr) parseProblemSolution($problem, $hr, doc);
  }
}

grunt.registerMultiTask('markdown', 'Markdown Grunt Plugin', function() {
  let done = this.async();

  const promises = this.files.map(({src, dest}) => {
    const code = grunt.file.read(src[0]);
    const doc = (new JSDom(md.render(code))).window.document;
    parseProblems(doc);
    return grunt.file.write(dest, doc.body.innerHTML);
  });

  Promise.all(promises).then(done).catch(grunt.fail.warn);
});
