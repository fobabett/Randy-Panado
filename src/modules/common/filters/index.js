'use strict';

module.exports =
  angular.module('Pando.common.filters', [])
  .filter('trustAsResourceUrl', require('./trustAsResourceUrl'));