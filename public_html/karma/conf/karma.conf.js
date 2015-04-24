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
            'public_html/qunit/jsxml.js',
            'public_html/karma/tests/**_tests.js',
            'public_html/qunit/transform/test_transform.xsl',
            'public_html/karma/templates/a1.html',
            'public_html/qunit/transform/test.xml'
        ],
        htmlReporter: {
            outputFile: 'html_out/karma_unit_tests.html' 
 
        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['html2js'],
            '**/*.xslt': ['html2js'],
            '**/*.xml': ['html2js'],
            '**/*.xsl': ['html2js'],
            'public_html/karma/tests/**_tests.js': ['coverage']
        },
        junitReporter: {
            outputFile: 'junit/karma-test-results.xml',
            suite: 'Karma Tests'
        },
        coverageReporter: {
            reporters: [
                
                {
                    type: 'html',
                    dir: 'html_coverage/',
                    subdir: 'karma-chrome' 
                }, 
                
                
                {
                    type: 'cobertura',
                    dir: 'coverage/',
                    subdir: 'chrome',
                    file: 'karma-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'coverage/',
                    subdir: 'json',
                    file: 'karma-coverage.json'
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
