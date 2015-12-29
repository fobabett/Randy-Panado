'use strict';

module.exports =
  angular.module('Pando.home', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home/:scrollTo',
      templateUrl: 'app/home/layout.html',
      controller: 'homeController',
      directive: 'modalDirective',
      onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
        $timeout(function() { 
          $location.hash($stateParams.scrollTo);
          $anchorScroll();
        }, 100);
      }
    });
  })
  .controller('homeController', require('./homeController'))
  .directive('modalDirective', require('./modalDirective'));
