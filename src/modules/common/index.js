'use strict';

module.exports =
  angular.module('Pando.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
