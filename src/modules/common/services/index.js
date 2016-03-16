'use strict';

module.exports =
  angular.module('Pando.common.services', [])
  .service('blogService', require('./blogService'))
  .service('projectService', require('./projectService'));
