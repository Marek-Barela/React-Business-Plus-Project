'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass','watch']);