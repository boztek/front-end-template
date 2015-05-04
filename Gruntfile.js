module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    broccoli: {
      dist: {
        dest: 'dist',
        config: 'Brocfile.js'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: 'app/*.html'
        },
        options: {
          watchTask: true,
          notify: false
          // proxy: "localhost:4200"
        }
      }
    },
  });

  grunt.registerTask('default', ['browserSync', 'broccoli:dist:serve']);
};
