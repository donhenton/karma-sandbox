/* global module */

'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['public_html/tree_tests/xtree/*.js','public_html/jasmine/code'],
            options: {
                reporter: require('jshint-html-reporter'),
                reporterOutput: 'jshint-report.html',
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        karma: {
            test: {
                configFile: 'public_html/karma/conf/karma.conf.js',
                singleRun: true
            },
            xtree: {
                configFile: 'public_html/tree_tests/conf/xtree.karma.conf.js',
                singleRun: true
            },
             jasmine: {
                configFile: 'public_html/jasmine/conf/jasmine.conf.js',
                singleRun: true
            }
        }






    });




    grunt.registerTask('runtest', ['karma:test']);
    grunt.registerTask('runxtree', ['karma:xtree']);
    grunt.registerTask('runjsamine', ['karma:jasmine']);
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};



 