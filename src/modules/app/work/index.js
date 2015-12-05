'use strict';

module.exports =
  angular.module('Pando.work', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('work', {
      url: '/work',
      templateUrl: 'app/work/layout.html',
      controller: 'workController'
    });
  })
  .controller('workController', require('./workController'));
