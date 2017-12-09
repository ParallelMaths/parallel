const grunt = require('grunt');
const pug = require('pug');
const yaml = require('yamljs');
const markdown = require('markdown-it');
const JSDom = require('jsdom').JSDOM;
const markdwonContainer = require('markdown-it-container');
const ascii2mathml = require('ascii2mathml');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


const pagesObj = yaml.parse(grunt.file.read('pages/pages.yaml'));
const pages = JSON.stringify(pagesObj);

// -----------------------------------------------------------------------------

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

md.renderer.rules.code_inline = function(tokens, idx) {
  let str = tokens[idx].content.trim();
  str = str.replace(/_(.*?)(\s|$|=|\(|\)|\*|\/|\^)/g, '_($1)$2').replace(/–/g, '-');

  let maths = ascii2mathml(str, {bare: true});
  maths = maths.replace(/<mo>-<\/mo>/g, '<mo>–</mo>')
    .replace(/<mo>(.)<\/mo>/g, (_, mo) =>  `<mo value="${mo}">${mo}<\/mo>`);
  return `<span class="math" v-pre>${maths}</span>`;
};

function parseProblemList($list, $problem) {
  const itemIds = 'abcdefghijk'.split('');
  const isCheckbox = $list.querySelectorAll('[checked]').length > 1;
  $list.classList.add('choices');
  $problem.classList.add(isCheckbox ? 'checkbox' : 'radio');

  for (let $item of $list.querySelectorAll('.choice')) {
    const isCorrect = $item.children[0].hasAttribute('checked');
    const itemId = (isCheckbox ? $problem.id + '_' : '') + itemIds.shift();

    const $label = $item.children[1];
    $item.removeChild($item.children[0]);
    $item.removeChild($item.children[0]);
    $item.setAttribute('data-value', itemId);

    for (let $n of $label.childNodes) $item.appendChild($n);
    while ($item.nextSibling) $item.appendChild($item.nextSibling);

    if (isCorrect) $item.classList.add('correct');

    if (isCheckbox) {
      $item.setAttribute('v-on:click', `c.setAnswer('${itemId}', !c.answers.${itemId})`);
      $item.setAttribute('v-bind:class', `{active: c.answers.${itemId}}`);

    } else {
      $item.setAttribute('v-on:click', `c.setAnswer('${$problem.id}', '${itemId}')`);
      $item.setAttribute('v-bind:class', `{active: c.answers.${$problem.id} == '${itemId}'}`);
    }
  }
}

function parseProblemInput($input, index, $problem) {
  const key = $problem.id + '_' + index;
  const solution = $input.getAttribute('solution');

  if ($input.parentNode.tagName !== 'P') {
    const $p = $problem.ownerDocument.createElement('p');
    $input.parentNode.insertBefore($p, $input);
    $p.appendChild($input);
  }
  $input.parentNode.classList.add('text-center');

  $problem.classList.add('input');
  $input.removeAttribute('solution');

  $input.setAttribute('data-solution', solution);
  $input.setAttribute('data-value', key);
  $input.setAttribute('v-on:change', `c.setInput`);
  $input.setAttribute('v-model.lazy', `c.answers.${key}`);
  $input.setAttribute('v-bind:class', `{correct: c.checkInput(c.answers.${key}, ${solution})}`);
}

function parseProblemSolution($problem, $hr, doc) {
  const $solution = doc.createElement('div');
  $solution.classList.add('solution');
  while ($hr.nextElementSibling) $solution.appendChild($hr.nextElementSibling);
  $problem.removeChild($hr);
  $problem.appendChild($solution);
}

function parseProblems(doc) {
  for (let $problem of doc.querySelectorAll('.problem')) {
    const $list = $problem.querySelector('ul');
    if ($list) parseProblemList($list, $problem);

    const $inputs = $problem.querySelectorAll('input[solution]');
    for (let i=0; i<$inputs.length; ++i) parseProblemInput($inputs[i], i, $problem);

    const $hr = $problem.querySelector('hr');
    if ($hr) parseProblemSolution($problem, $hr, doc);
  }
}

function parseHeader(doc, pageId) {
  const header = doc.createElement('header');
  header.style.backgroundImage = `url("/resources/${pageId}/header.jpg")`;
  header.appendChild(doc.querySelector('h1'));
  doc.body.insertBefore(header, doc.body.children[0]);

  const status = doc.createElement('div');
  status.innerHTML = pug.renderFile('src/templates/status.pug');
  doc.body.insertBefore(status.children[0], doc.body.children[1]);
}

grunt.registerMultiTask('markdown', 'Markdown Grunt Plugin', function() {
  let done = this.async();

  Promise.all(this.files.map(function({src, dest}) {
    const url = src[0].split('/')[1].replace('.md', '');
    const pageId = (+url[0]) ? url : null;

    let code = grunt.file.read(src[0]);
    code = code.replace('::: submit',
      pug.renderFile('src/templates/submit.pug', {pageId}));

    const doc = (new JSDom(md.render(code))).window.document;
    parseProblems(doc);
    if (pageId) parseHeader(doc, pageId);

    const pugOptions = {content: doc.body.innerHTML, pages, pageId};
    const html = pug.renderFile('src/templates/layout.pug', pugOptions);

    return grunt.file.write(dest, html);
  })).then(done).catch(grunt.fail.warn);
});

// -----------------------------------------------------------------------------

grunt.initConfig({

  banner: '/* (c) 2017, Mathigon */\n\n',

  clean: ['build'],

  rollup: {
    app: {files: {'build/parallel.js': ['src/scripts/main.js']}}
  },

  babel: {
    options: {presets: ['es2015', 'stage-3']},
    app: {files: {'build/parallel.js': 'build/parallel.js'}}
  },

  uglify: {
    options: {banner: '<%= banner %>'},
    app: {files: {'build/parallel.js': 'build/parallel.js'}}
  },

  less: {
    app: {files: {'build/parallel.css': 'src/styles/main.less'}}
  },

  autoprefixer: {
    app: {files: {'build/parallel.css': 'build/parallel.css'}}
  },

  cssmin: {
    options: { banner: '<%= banner %>' },
    app: {files: {'build/parallel.css': 'build/parallel.css'}}
  },

  markdown: {
    app: {files: [{
      expand: true,
      cwd: 'pages',
      src: ['*.md'],
      dest: 'build',
      ext: '.html'
    }]}
  },

  pug: {
    options: {data: {pages}},
    app: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['*.pug'],
        dest: 'build',
        ext: '.html'
      }]
    }
  },

  copy: {
    app: {
      files: [{
        expand: true,
        cwd: 'src',
        src: '**/*.{png,jpg,ico,json,svg}',
        dest: 'build'
      }]
    },
    images: {
      files: [{
        expand: true,
        cwd: 'resources',
        src: ['**/*'],
        dest: 'build/resources'
      }]
    }
  },

  watch: {
    markdown: {
      files: ['pages/*.md', 'src/**/*.pug'],
      tasks: ['markdown', 'pug']
    },
    less: {
      files: 'src/styles/*.less',
      tasks: ['less', 'autoprefixer']
    },
    js: {
      files: 'src/scripts/*.js',
      tasks: ['rollup', 'babel']
    },
    static: {
      files: ['resources/**', 'src/**/*.{png,jpg,ico,json,svg}'],
      tasks: ['copy']
    }
  },

  concurrent: {
    app: {
      options: {limit: 4, logConcurrentOutput: true},
      tasks: ['watch:markdown', 'watch:less', 'watch:js', 'watch:static']
    }
  }
});

grunt.registerTask('build', ['clean', 'rollup', 'babel', 'less', 'autoprefixer', 'markdown', 'pug', 'copy']);
grunt.registerTask('default', ['build', 'uglify', 'cssmin']);
