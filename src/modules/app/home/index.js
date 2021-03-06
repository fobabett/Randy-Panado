'use strict';

module.exports =
  angular.module('Pando.home', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      params: {scrollTo: null},
      templateUrl: 'app/home/layout.html',
      controller: 'homeController',
      directive: 'modalDirective',
      filter: 'selectedTags'
    });
  })
  .controller('homeController', require('./homeController'))
  .directive('modalDirective', require('./modalDirective'))
  .filter('selectedTags', require('./selectedTags'));