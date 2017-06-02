const grunt = require('grunt');
const pug = require('pug');
const yaml = require('yamljs');
const markdown = require('markdown-it');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerMultiTask('markdown', 'Markdown Grunt Plugin', function() {
  let done = this.async();
  let pages = yaml.parse(grunt.file.read('pages/pages.yaml'));

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

  const getTemplate = function(pageName) {
    if (pageName == "pages/index.md") return "src/templates/template.pug";
    else if (pageName == "pages/TTS.md") return "src/templates/tts-signin-template.pug";
    else if (pageName == "pages/public.md") return "src/templates/public-signup-template.pug";
    else if (pageName == "pages/introduction.md") return "src/templates/introduction-template.pug";
    else return "src/templates/puzzle-template.pug";
  }

  Promise.all(this.files.map(function({src, dest}) {
    let content = md.render(grunt.file.read(src[0]));
    var templateName = getTemplate(src[0]);
    let html = pug.renderFile(templateName, { content, pages });
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
      files: ['pages/*.md', 'src/template.pug'],
      tasks: ['markdown']
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

  connect: {
    app: {
      options: {
        port: 8086,
        base: 'build',
        keepalive: true
      }
    }
  },

  concurrent: {
    app: {
      options: {limit: 5, logConcurrentOutput: true},
      tasks: ['watch:markdown', 'watch:less', 'watch:js', 'watch:static', 'connect']
    }
  },

  buildcontrol: {
    app: {
      options: {
        dir: 'build',
        branch: 'gh-pages',
        commit: true,
        push: true,
        force: true,
        message: 'Built %sourceName% from %sourceCommit% on %sourceBranch%',
        remote: 'git@github.com:mathigon/parallel.git'
      }
    }
  }
});

grunt.registerTask('default', ['clean', 'babel', 'less', 'markdown', 'copy']);
grunt.registerTask('minify', ['uglify', 'autoprefixer', 'cssmin']);
