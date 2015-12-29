'use strict';

module.exports =
  angular.module('Pando.about', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about/:scrollTo',
      templateUrl: 'app/about/layout.html',
      controller: 'aboutController',
      onEnter: function ($location, $stateParams, $anchorScroll, $timeout, $state) {
        $timeout(function() { 
          console.log($location.url());
          $location.hash($stateParams.scrollTo);
          $anchorScroll();
        }, 100);
      }
    });
  })
  .controller('aboutController', require('./aboutController'));
