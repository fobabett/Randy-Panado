'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {

    $scope.filter = {};

    var mockData = [
      {
        name: 'one of a kind',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'narrative']
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/350x200',
        type: ['creative']
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/350x200',
        type: ['creative', 'narrative']
      },
      {
        name: 'blah',
        url: 'http://placehold.it/350x200',
        type: ['narrative']
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'creative']
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'creative', 'narrative']
      },
      {
        name: 'one of a kind',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'narrative']
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/350x200',
        type: ['creative']
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/350x200',
        type: ['creative', 'narrative']
      },
      {
        name: 'blah',
        url: 'http://placehold.it/350x200',
        type: ['narrative']
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'creative']
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/350x200',
        type: ['commercial', 'creative', 'narrative']
      }
    ];

    $scope.images = mockData;

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    $scope.slides = [
      {name: 'img 1', url: "http://placehold.it/600x300"},
      {name: 'img 2', url: "http://placehold.it/600x300"},
      {name: 'img 3', url: "http://placehold.it/600x300"}
    ];

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.filters = [
      {type: 'commerical'},
      {type: 'narrative'},
      {type: 'creative'}
    ];

    $scope.setFilterType = function(filter) {
      $scope.filter.type = filter.type;
      console.log($scope.filter.type);
    };

  };
