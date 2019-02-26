// Karma configuration
// Generated on Mon Feb 25 2019 13:40:53 GMT-0600 (CST)
// https://medium.com/@metalex9/replace-phantomjs-with-headless-chromium-for-javascript-unit-testing-in-karma-59812e6f8ce4
//https://www.npmjs.com/package/karma-fixture

 


module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude) take it to the route of the nb project
    basePath: '../../../',
    autoWatch: false,
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],
    // list of files / patterns to load in the browser
    files: [
     
      'test/simple_fixture/tests/*.js',
      
       {pattern: 'test/simple_fixture/fixtures/**/*',
                included: true, served: true},

    ],
    htmlReporter: {
      outputFile: 'reports/simple_fixture/html_out/simple_fixture_unit_tests.html'

    },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/simple_fixture/code/*.js': ['coverage'],
      'test/simple_fixture/fixtures/**/*.html': ['html2js']

    },
    junitReporter: {
      outputDir: "reports/simple_fixture/",
      outputFile: 'jasmine-test-results.xml',
      suite: 'Basic Tests'
    },
//    plugins: [
//      'karma-fixture',
//      'karma-html2js-preprocessor'
//
//    ],
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: 'reports/simple_fixture/html_coverage/',
          subdir: 'simple_fixture-firefox',
          file: 'simple_fixture-firefox.xml'
        },
        {
          type: 'cobertura',
          dir: 'reports/simple_fixture/coverage/',
          subdir: 'firefox',
          file: 'simple_fixture-firefox.xml'
        }, {
          type: 'json',
          dir: 'reports/simple_fixture/coverage/',
          subdir: 'json',
          file: 'simple_fixture-coverage.json'
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
    logLevel: config.LOG_ERROR,
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],
    //  browsers: ['Chrome'],
    //   browsers:['ChromeHeadless'],
   // browsers: ['Firefox'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
