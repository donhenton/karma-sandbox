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
        frameworks: ['jasmine-jquery','jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'public_html/js/jquery/dist/jquery.js',
            //'public_html/js/jasmine/lib/jasmine-core/jasmine.js',
            //'public_html/js/jasmine-jquery/lib/jasmine-jquery.js',
            'public_html/jasmine-jquery/javascripts/*.js',
            {pattern: 'public_html/jasmine-jquery/fixtures/*.html',
                included: false, served: true},
            'public_html/jasmine-jquery/tests/**tests.js'

        ],
        htmlReporter: {
            outputFile: 'html_out/jasmine-jquery_unit_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
             'public_html/jasmine-jquery/code/*.js': ['coverage']
        },
        junitReporter: {
            outputFile: 'junit/jasmine-jquery-test-results.xml',
            suite: 'Jasmine Tests'
        },
        coverageReporter: {
            reporters: [
                  {
                    type: 'html',
                    dir: 'html_coverage/',
                    subdir: 'jasmine-jquery-chrome',
                    file: 'jasmine-jquery-chrome.xml'
                }, 
                
                
                {
                    type: 'cobertura',
                    dir: 'coverage/',
                    subdir: 'chrome',
                    file: 'jasmine-jquery-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'coverage/',
                    subdir: 'json',
                    file: 'jasmine-jquery-coverage.json'
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
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['PhantomJS'],
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
