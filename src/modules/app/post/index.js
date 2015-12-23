'use strict';

module.exports =
  angular.module('Pando.post', [

  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('post',{
      url: '/post/:id',
      templateUrl: 'app/post/layout.html',
      controller: 'postController'
    });
  })
  .controller('postController', require('./postController'));