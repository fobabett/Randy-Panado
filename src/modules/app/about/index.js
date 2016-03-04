'use strict';

module.exports =
  angular.module('Pando.about', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      params: {scrollTo: null},
      templateUrl: 'app/about/layout.html',
      controller: 'aboutController'
    });
  })
  .controller('aboutController', require('./aboutController'));
