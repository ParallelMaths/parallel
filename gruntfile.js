const grunt = require('grunt');
const pug = require('pug');
const yaml = require('yamljs');
const markdown = require('markdown-it');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


const pagesObj = yaml.parse(grunt.file.read('pages/pages.yaml'));
const pages = JSON.stringify(pagesObj);

grunt.registerMultiTask('markdown', 'Markdown Grunt Plugin', function() {
  let done = this.async();

  const md = markdown({html: true});
  md.use(require('markdown-it-video'));
  md.use(require('markdown-it-synapse-table'));
  md.use(require('markdown-it-container'), 'problem');
  md.use(require('markdown-it-anchor'));
  md.use(require('markdown-it-container'), 'hint', { render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      let id = tokens[idx].info.trim();
      return '<div class="hint" v-on:click="showHint">' +
        '<div class="hint-body"><h3>' + id.toUpperCase() + '</h3>';
    } else {
      return '</div></div>';
    }
  }});

  Promise.all(this.files.map(function({src, dest}) {
    let code = grunt.file.read(src[0]);

    /* code = code.replace(/x\-radio\=\"(\w+)\,\s*(\w+)\"/g, (_, key, value) =>
      `v-on:click="setAnswer('${key}', '${value}')" v-bind:class="{active: answers.${key} == '${value}'}"`);
    code = code.replace(/x\-checkbox\=\"(\w+)\"/g, (_, key) =>
      `v-on:click="setAnswer('${key}', !answers.${key})" v-bind:class="{active: answers.${key}}"`);
    code = code.replace(/x\-input\=\"(\w+)\,\s*(\w+)\"/g, (_, key, correct) =>
      `v-on:change="refresh" v-model.lazy="answers.${key}" v-bind:class="{correct: isCorrect(answers.${key}, ${correct})}"`); */

    let content = md.render(code);
    let html = pug.renderFile('src/templates/layout.pug', { content, pages });
    return grunt.file.write(dest, html);
  })).then(done).catch(grunt.fail.warn);
});

grunt.initConfig({

  banner: '/* (c) 2017, Mathigon */\n\n',

  clean: ['build'],

  rollup: {
    app: {files: {'build/parallel.js': ['src/scripts/main.js']}}
  },

  babel: {
    options: {presets: ['es2015']},
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
      tasks: ['less']
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

grunt.registerTask('build', ['clean', 'rollup', 'babel', 'less', 'markdown', 'pug', 'copy']);
grunt.registerTask('default', ['build', 'uglify', 'autoprefixer', 'cssmin']);
