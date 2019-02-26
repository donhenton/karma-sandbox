var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma');
var del = require('del');


gulp.task('testSimpleFixture', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/test/simple_fixture/conf/simple_fixture.conf.js' 
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });



 
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

gulp.task('testDeviant', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/test/deviant-images/conf/deviant-images.conf.js' 
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });



gulp.task('clean', function (  ) {

    del(['reports']);

});

gulp.task("default",['clean','testJasmine','testJasmineJQ','testDeviant']);