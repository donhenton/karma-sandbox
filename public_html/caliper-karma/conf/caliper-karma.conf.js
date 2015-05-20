// Karma configuration
// Generated on Tue Mar 24 2015 09:16:43 GMT-0500 (CDT)
//http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
config.set({
// base path that will be used to resolve all patterns (eg. files, exclude)
basePath: '../../..',
        autoWatch: false,
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],
        // list of files / patterns to load in the browser
        files: [
                'public_html/js/jquery/dist/jquery.js',
                'public_html/js/d3/d3.js',
                
                'public_html/js/jquery-simulate-ext/libs/bililiteRange.js',
                'public_html/js/jquery-simulate-ext/libs/jquery.simulate.js',
                'public_html/js/jquery-simulate-ext/src/jquery.simulate.ext.js',
                'public_html/js/jquery-simulate-ext/src/jquery.simulate.drag-n-drop.js',
                'public_html/js/jquery-simulate-ext/src/jquery.simulate.key-sequence.js',
                'public_html/js/jquery-simulate-ext/src/jquery.simulate.key-combo.js',
                'public_html/caliper-karma/caliper1.js' ,
                'public_html/caliper-karma/caliper_setup.js',  
                'public_html/caliper-karma/tests/**_tests.js' 


        ],
        htmlReporter: {
        outputFile: 'html_out/caliper_karma_unit_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        '**/*.html': ['html2js'],
                
                'public_html/caliper-karma/caliper1.js': ['coverage']
        },
        junitReporter: {
        outputFile: 'junit/caliper-karma-test-results.xml',
                suite: 'Caliper Karma Tests'
        },
        coverageReporter: {
        reporters: [

        {
        type: 'html',
                dir: 'html_coverage/',
               subdir: 'caliper-karma-chrome'
        },
        {
        type: 'cobertura',
                dir: 'coverage/',
                subdir: 'chrome',
                file: 'caliper-karma-chrome.xml'
        }, {
        type: 'json',
                dir: 'coverage/',
                subdir: 'json',
                file: 'caliper-karma-coverage.json'
        }]
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['PhantomJS'],
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
});
        };
