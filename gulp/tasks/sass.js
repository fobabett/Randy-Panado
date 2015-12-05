'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = gulp.task('sass', function() {
  return gulp.src(config.paths.src.sass)
    .pipe(sass({ errLogToConsole: true}))
    .pipe(gulp.dest('./src/styles'));
});