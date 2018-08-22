const grunt = require('grunt');
require('./scripts/grunt-markdown');
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


grunt.initConfig({
  banner: '/* (c) 2018, Mathigon/Parallel */\n\n',
  clean: ['functions/build'],

  rollup: {
    app: {files: {'static/parallel.js': ['static/scripts/main.js']}}
  },

  babel: {
    options: {presets: ['es2015', 'stage-3']},
    app: {files: {'static/parallel.js': 'static/parallel.js'}}
  },

  uglify: {
    options: {banner: '<%= banner %>'},
    app: {files: {'static/parallel.js': 'static/parallel.js'}}
  },

  less: {
    app: {files: {'static/parallel.css': 'static/styles/main.less'}}
  },

  autoprefixer: {
    app: {files: {'static/parallel.css': 'static/parallel.css'}}
  },

  cssmin: {
    options: {banner: '<%= banner %>'},
    app: {files: {'static/parallel.css': 'static/parallel.css'}}
  },

  markdown: {
    app: {files: [{
      expand: true,
      cwd: 'pages',
      src: ['*.md'],
      dest: 'functions/build',
      ext: '.html'
    }]}
  },

  yaml: {
    options: {spaces: 2},
    app: {files: [{
      expand: true,
      cwd: 'static',
      src: ['*.yaml'],
      dest: 'functions/build',
      ext: '.json'
    }]}
  },

  watch: {
    markdown: {
      files: ['pages/*.md'],
      tasks: ['markdown']
    },
    less: {
      files: 'static/styles/*.less',
      tasks: ['less', 'autoprefixer']
    },
    js: {
      files: 'static/scripts/*.js',
      tasks: ['rollup', 'babel']
    }
  },

  concurrent: {
    app: {
      options: {limit: 3, logConcurrentOutput: true},
      tasks: ['watch:markdown', 'watch:less', 'watch:js']
    }
  }
});

grunt.registerTask('build', ['clean', 'rollup', 'babel', 'less', 'autoprefixer', 'markdown', 'yaml']);
grunt.registerTask('default', ['build', 'uglify', 'cssmin']);
