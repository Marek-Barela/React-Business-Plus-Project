'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/sass/*.sass', ['sass']);
});

gulp.task('imgMin', () =>
	gulp.src('src/components/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('src/components/images'))
);

gulp.task('default', ['sass','watch']);