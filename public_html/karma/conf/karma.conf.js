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
            'public_html/js/jsxml.js',
            'public_html/karma/tests/**_tests.js',
             'public_html/qunit/transform/test_transform.xsl' ,
             'public_html/qunit/transform/test.xml'     
         ],
        htmlReporter: {
            outputDir: 'karma_html', // where to put the reports  
            templatePath: null, // set if you moved jasmine_template.html 
            focusOnFailures: false, // reports show failures on start 
            namedFiles: false, // name files instead of creating sub-directories 
            pageTitle: "geta job", // page title for reports; browser info by default 
            urlFriendlyName: true, // simply replaces spaces with _ for files/dirs 


            // experimental 
            preserveDescribeNesting: false, // folded suites stay folded  
            foldAll: false  // reports start folded (only with preserveDescribeNesting) 
        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['html2js'],
            '**/*.xslt': ['html2js'], 
            '**/*.xml': ['html2js'], 
            '**/*.xsl': ['html2js'],
            '**/*.js': ['coverage']
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html'],
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