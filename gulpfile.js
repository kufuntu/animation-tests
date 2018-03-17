'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('sass', function() {
	return gulp
		.src('./**/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'));
});

gulp.task('ts', function() {
	return gulp
		.src('./**/js/*.ts')
		.pipe(
			ts({
        noImplicitAny: true,
        target: 'es5'
			})
		)
		.js.pipe(gulp.dest('./'));
});

gulp.task('default', function() {
	gulp.watch('./**/scss/*.scss', ['sass']);
	gulp.watch('./**/js/*.ts', ['ts']);
});
