'use strict';

module.exports =
  angular.module('Pando.home', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/layout.html',
      controller: 'homeController',
      directive: 'modalDirective'
    });
  })
  .controller('homeController', require('./homeController'))
  .directive('modalDirective', require('./modalDirective'));

