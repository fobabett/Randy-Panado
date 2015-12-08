'use strict';

module.exports =
  angular.module('Pando.category', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('category', {
      url: '/category',
      templateUrl: 'app/category/layout.html',
      controller: 'categoryController'
    });
  })
  .controller('categoryController', require('./categoryController'));