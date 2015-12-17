'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, $location, $anchorScroll, $window, angularGridInstance) {

    $scope.filter = {};
    $scope.commercial = '';
    $scope.narrative = '';
    $scope.creative = '';

    var mockData = [
      {
        name: 'one of a kind',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'Excision',
        url: 'https://youtu.be/1Cz-53Ud2Wc',
        type: 'video',
        categories: [
          {value: 'commercial'}
        ]
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'creative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'creative'},
          {value: 'narrative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'one of a kind',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'creative'}
        ]
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'commercial'},
          {value: 'creative'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/300x200',
        type: 'image',
        categories: [
          {value: 'commercial'},
          {value: 'creative'},
          {value: 'narrative'}
        ]
      }
    ];

    $scope.pics = mockData;

    $scope.modalShown = false;
    $scope.toggleModal = function(pic) {
      console.log(pic);
      $scope.modalShown = !$scope.modalShown;
      $scope.selectedPic = pic;
      $scope.types = pic.types;
      // $location.hash('slidesow-modal');
      // $anchorScroll();
      // $window.scrollTo(0,165);
    };

    $scope.setSelectedPic = function(pic) {
      $scope.selectedPic = pic;
      $scope.types = pic.types;
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
