const grunt = require('grunt');
const markdown = require('markdown-it');
const JSDom = require('jsdom').JSDOM;
const markdwonContainer = require('markdown-it-container');
const ascii2mathml = require('ascii2mathml');

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

      return `<div id="hint-${data.id}" class="show-hint" data-marks="${data.marks || 1}" v-if="!c.answers['hint-${data.id}']" v-on:click="c.showHint('hint-${data.id}')">Show Hint (–${data.marks || 1} mark)</div>
      <div class="hint" v-if="c.answers['hint-${data.id}']">
      <div class="hint-marks">–${data.marks || 1} mark</div>`;
    } else {
      return '</div>';
    }
  }
});

md.renderer.rules.code_inline = function(tokens, idx) {
  let str = tokens[idx].content.trim();
  str = str.replace(/_(.*?)(\s|$|=|\(|\)|\*|\/|\^)/g, '_($1)$2').replace(/–/g, '-');

  const maths = ascii2mathml(str, {bare: true}).replace(/<mo>-<\/mo>/g, '<mo>–</mo>');
  return `<span class="math" v-pre>${maths}</span>`;
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
