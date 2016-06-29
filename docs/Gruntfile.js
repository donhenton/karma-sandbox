/* global module */

'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            reports: ['coverage', 'html_coverage', 'html_out', 'junit']
        },
        jshint: {
            files: ['public_html/xtree/xtree/*.js', 'public_html/jasmine/code'],
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
            caliper: {
                configFile: 'public_html/caliper-karma/conf/caliper-karma.conf.js',
                singleRun: true
            },
            xtree: {
                configFile: 'public_html/xtree/conf/xtree.karma.conf.js',
                singleRun: true
            },
            jasmine: {
                configFile: 'public_html/jasmine/conf/jasmine.conf.js',
                singleRun: true
            },
             jasminejq: {
                configFile: 'public_html/jasmine-jquery/conf/jasmine-jquery.conf.js',
                singleRun: true
            }
        }






    });




    grunt.registerTask('runkarma', ['karma:test']);
    grunt.registerTask('runcaliper', ['karma:caliper']);
    grunt.registerTask('runxtree', ['karma:xtree']);
    grunt.registerTask('runjasminejq',['karma:jasminejq']);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('runjsamine', ['clean','karma:jasmine']);
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('runalltests', ['clean', 'karma:test', 'karma:xtree', 'karma:jasmine', 'karma:caliper']);
};



 