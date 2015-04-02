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
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'public_html/js/jquery/dist/jquery.js',
            'public_html/jasmine/code/*.js',
            'public_html/jasmine/tests/**tests.js'

        ],
        htmlReporter: {
            outputFile: 'html_out/jasmine_units.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.js': ['coverage']
        },
        junitReporter: {
            outputFile: 'junit/jasmine-test-results.xml',
            suite: 'Jasmine Tests'
        },
        coverageReporter: {
            reporters: [{
                    type: 'cobertura',
                    dir: 'coverage/',
                    subdir: 'chrome',
                    file: 'jasmine-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'coverage/',
                    subdir: 'json',
                    file: 'jasmine-coverage.json'
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
        logLevel: config.LOG_DEBUG,
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
