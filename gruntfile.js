const grunt = require('grunt');
const pug = require('pug');
const yaml = require('yamljs');
const markdown = require('markdown-it');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

let pages = yaml.parse(grunt.file.read('pages/pages.yaml'));

grunt.registerMultiTask('markdown', 'Markdown Grunt Plugin', function() {
  let done = this.async();

  const md = markdown({html: true});
  md.use(require('markdown-it-video'));
  md.use(require('markdown-it-synapse-table'));
  md.use(require('markdown-it-container'), 'problem');
  md.use(require('markdown-it-container'), 'hint', { render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      let id = tokens[idx].info.trim();
      return '<div class="hint" data-id="' + id.replace(/[^\w]+/g, '-') + '">' +
        '<div class="hint-body"><h3>' + id.toUpperCase() + '</h3>';
    } else {
      return '</div></div>';
    }
  }});

  Promise.all(this.files.map(function({src, dest}) {
    let code = grunt.file.read(src[0]);

    code = code.replace(/x\-radio\=\"(\w+)\,\s*(\w+)\"/g, (_, key, value) =>
      `v-on:click="setAnswer('${key}', '${value}')" v-bind:class="{active: answers.${key} == '${value}'}"`);
    code = code.replace(/x\-checkbox\=\"(\w+)\"/g, (_, key) =>
      `v-on:click="setAnswer('${key}', !answers.${key})" v-bind:class="{active: answers.${key}}"`);
    code = code.replace(/x\-input\=\"(\w+)\,\s*(\w+)\"/g, (_, key, correct) =>
      `v-on:change="refresh" v-model.lazy="answers.${key}" v-bind:class="{correct: answers.${key} == ${correct}}"`);

    let content = md.render(code);
    let challenge = +src[0].match(/\/([^/]*)\.\w+$/)[1].split('-')[0];  // Index of challenge
    let html = pug.renderFile('src/templates/layout.pug', { content, pages, challenge });
    return grunt.file.write(dest, html);
  })).then(done).catch(grunt.fail.warn);
});

grunt.initConfig({

  banner: '/* (c) Parallel Project, 2017 */\n\n',

  clean: ['build'],

  babel: {
    app: {
      options: {presets: ['es2015']},
      files: {'build/scripts.js': 'src/scripts.js'}
    }
  },

  uglify: {
    app: {
      options: {banner: '<%= banner %>'},
      src: ['build/scripts.js'],
      dest: 'build/scripts.js'
    }
  },

  less: {
    app: {
      files: { 'build/styles.css': 'src/styles.less' }
    }
  },

  autoprefixer: {
    app: {
      src: ['build/styles.css'],
      dest: 'build/styles.css'
    }
  },

  cssmin: {
    app: {
      options: { banner: '<%= banner %>' },
      src: ['build/styles.css'],
      dest: 'build/styles.css'
    }
  },

  markdown: {
    app: {
      files: [{
        expand: true,
        cwd: 'pages',
        src: ['*.md'],
        dest: 'build',
        ext: '.html'
      }]
    }
  },

  pug: {
    options: {
      data: {pages}
    },
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
        src: ['**/*.{png,jpg,ico,json,svg}', 'CNAME'],
        dest: 'build'
      }]
    },
    images: {
      files: [{
        expand: true,
        cwd: 'images',
        src: ['**/*'],
        dest: 'build/images'
      }]
    }
  },

  watch: {
    markdown: {
      files: ['pages/*.md', 'src/**/*.pug'],
      tasks: ['markdown', 'pug']
    },
    less: {
      files: 'src/*.less',
      tasks: ['less']
    },
    js: {
      files: 'src/*.js',
      tasks: ['babel']
    },
    static: {
      files: ['images/**', 'src/**/*.{png,jpg,ico,json,svg}'],
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

grunt.registerTask('default', ['clean', 'babel', 'less', 'markdown', 'pug', 'copy']);
grunt.registerTask('minify', ['uglify', 'autoprefixer', 'cssmin']);
