'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, $location, $anchorScroll, $window) {

    $scope.filter = {};
    $scope.commercial = '';
    $scope.narrative = '';
    $scope.creative = '';

    var mockData = [
      {
        name: 'one of a kind',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'commercial'}
        ]
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'creative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'creative'},
          {value: 'narrative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'one of a kind',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'creative'}
        ]
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/300x200',
        types: [
          {value: 'commercial'},
          {value: 'creative'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/300x200',
        type: ['commercial', 'creative', 'narrative']
      }
    ];

    $scope.images = mockData;

    $scope.modalShown = false;
    $scope.toggleModal = function(image) {
      console.log(image);
      $scope.modalShown = !$scope.modalShown;
      $scope.selectedImage = image;
      $scope.types = image.types;
      // $location.hash('slidesow-modal');
      // $anchorScroll();
      // $window.scrollTo(0,165);
    };

    $scope.setSelectedImage = function(image) {
      $scope.selectedImage = image;
      $scope.types = image.types;
    };

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.commercialFilter = function() {
      if ($scope.commercial === '') {
        $scope.commercial = 'commercial';
      } else {
        $scope.commercial = '';
      }
    };
    $scope.narrativeFilter = function() {
      if ($scope.narrative === '') {
        $scope.narrative = 'narrative';
      } else {
        $scope.narrative = '';
      }
    };
    $scope.creativeFilter = function() {
      if ($scope.creative === '') {
        $scope.creative = 'creative';
      } else {
        $scope.creative = '';
      }
    };

    $scope.refresh = function(){
      angularGridInstance.gallery.refresh();
    };

  };
