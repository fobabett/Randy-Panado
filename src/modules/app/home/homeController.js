'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {

    $scope.filter = {};

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    $scope.slides = [
      {name: 'img 1', url: "http://placehold.it/600x300"},
      {name: 'img 2', url: "http://placehold.it/600x300"},
      {name: 'img 3', url: "http://placehold.it/600x300"}
    ]

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    }
    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.filters = [
      {type: 'commerical'},
      {type: 'narrative'},
      {type: 'creative'}
    ]

    $scope.setFilterType = function(filter) {
      $scope.filter.type = filter.type
      console.log($scope.filter.type);
    }

    console.log($scope.slides);
  };
