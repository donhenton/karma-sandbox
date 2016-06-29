var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma');
var del = require('del');

 
gulp.task('testJasmine', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/test/jasmine/conf/jasmine.conf.js' 
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });

gulp.task('testJasmineJQ', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/test/jasmine-jquery/conf/jasmine-jquery.conf.js' 
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });




gulp.task('clean', function (  ) {

    del(['reports']);

});

gulp.task("default",['clean','testJasmine','testJasmineJQ']);