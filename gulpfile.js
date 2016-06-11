var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['webserver', 'sass', 'watch'], function() {

});
