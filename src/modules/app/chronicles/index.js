'use strict';

module.exports =
  angular.module('Pando.chronicles', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('chronicles', {
      url: '/chronicles',
      templateUrl: 'app/chronicles/layout.html',
      controller: 'chroniclesController'
    });
  })
  .controller('chroniclesController', require('./chroniclesController'));
