var gulp = require('gulp');

// include plugins
var jshint = require('gulp-jshint');

gulp.task('default', function() {
  // place code here
});

gulp.task('jshint', function() {
  gulp.src('js/fetch.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
