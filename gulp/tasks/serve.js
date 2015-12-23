'use strict';

var gulp = require('gulp');
var nodemon = require('nodemon');

module.exports = gulp.task('serve', function (next) {
  var staticServerPath = BUILD_FOLDER;
  if (release) staticServerPath = RELEASE_FOLDER;

  nodemon({
    script: './server'
    , ext: 'js'
    , env: {
      'NODE_ENV': (release)?'production':'development',
      'STATIC_PATH': staticServerPath
    }
  });
});
