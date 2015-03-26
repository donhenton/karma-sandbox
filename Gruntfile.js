'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({

    karma: {
      test: {
        configFile: 'public_html/karma/conf/karma.conf.js'
      }
    },
  });
  grunt.registerTask('runtest', ['karma']);
  grunt.loadNpmTasks('grunt-karma');
};
