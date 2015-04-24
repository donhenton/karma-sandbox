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
            'public_html/js/json3/lib/json3.js',
            
            //code to cover
            'public_html/tree_tests/xtree/*.js',
             
            
            'public_html/tree_tests/jquery.mockjax.js',
            'public_html/tree_tests/BeforeMock.js',
            
             //tests
            'public_html/tree_tests/tests/*.js',
            
            //handle oddball files they will be served but not processed
             {pattern: 'public_html/tree_tests/**/*.xslt', 
                 watched: false, included: false, served: true }  ,
              {pattern: 'public_html/tree_tests/**/*.html', 
                 watched: false, included: false, served: true }  ,
             {pattern: 'public_html/tree_tests/**/*.xml', 
                 watched: false, included: false, served: true }  
            
            
        ],
        htmlReporter: {
            outputFile: 'html_out/xtree_unit_tests.html' 
 
        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            
            //if these had been 'htmljs' the file would be processed and available
            //in the __html__ global hashmap
            //however IT MUST BE COMPATIBABLE WITH JS, ie no '//' included
            
            '**/*.html': [],
            //turn processing off
            '**/*.xslt': [],
            '**/*.xml': [],
            'public_html/tree_tests/xtree/*.js': ['coverage']
        },
        junitReporter: {
            outputFile: 'junit/xtree-test-results.xml',
            suite: 'XTree Tests'
        },
        coverageReporter: {
            reporters: [
                
                 {
                    type: 'html',
                    dir: 'html_coverage/',
                    subdir: 'xtree-chrome',
                    file: 'xtree-chrome.xml'
                }, 
                {
                    type: 'cobertura',
                    dir: 'coverage/',
                    subdir: 'chrome',
                    file: 'xtree-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'coverage/',
                    subdir: 'json',
                    file: 'xtree-coverage.json'
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
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['PhantomJS'],
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
