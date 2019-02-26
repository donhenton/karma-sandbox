// Karma configuration
// Generated on Tue Mar 24 2015 09:16:43 GMT-0500 (CDT)
//http://karma-runner.github.io/0.10/config/configuration-file.html
//https://github.com/velesin/jasmine-jquery

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
            'test/jasmine-jquery/javascripts/*.js',
            {pattern: 'test/jasmine-jquery/fixtures/*.html',
                included: false, served: true},
            'test/jasmine-jquery/tests/**tests.js'

        ],
        htmlReporter: {
            outputFile: 'reports/jasmine-jquery/html_out/jasmine-jquery_unit_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // coverge not needed here really
         preprocessors: {
              'test/jasmine-jquery/javascripts/*.js': ['coverage']
         },
        junitReporter: {
            outputDir: "reports/jasmine-jquery/junit/",
            outputFile: 'jasmine-jquery-test-results.xml',
            suite: 'Jasmine JQuery Tests'
        },
        coverageReporter: {
            reporters: [
                  {
                    type: 'html',
                    dir: 'reports/jasmine-jquery/html_coverage/',
                   
                    file: 'jasmine-jquery-chrome.xml'
                }, 
                
                
                {
                    type: 'cobertura',
                    dir: 'reports/jasmine-jquery/coverage/',
                    subdir: 'chrome',
                    file: 'reports/jasmine-jquery/jasmine-jquery-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'reports/jasmine-jquery/coverage/',
                    subdir: 'json',
                    file: 'reports/jasmine-jquery/jasmine-jquery-coverage.json'
                }]
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],
        // web server port
        port: 9877,
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
