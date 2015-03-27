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


/*
  
  
  'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        karma: {
            test: {
                configFile: 'public_html/karma/conf/karma.conf.js',
                 singleRun: true 
            },
            xtree: {
                configFile: 'public_html/tree_tests/conf/xtree.karma.conf.js',
                 singleRun: true 
            },
        },
    });
    grunt.registerTask('runtest', ['karma:test']);
    grunt.registerTask('runxtree', ['karma:xtree']);
    grunt.loadNpmTasks('grunt-karma');
};
  
  
  
 */