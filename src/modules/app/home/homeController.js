'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, $location, $anchorScroll, $window, angularGridInstance) {

    $scope.filter = {};
    $scope.commercial = '';
    $scope.narrative = '';
    $scope.creative = '';
    var video = document.getElementsByTagName('iframe');

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
        name: 'Adventure Time',
        url: '//vimeo.com/74611159',
        type: 'vimeo',
        categories: [
          {value: 'commercial'}
        ]
      },
      {
        name: 'Star Wars',
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

    //Vimeo API
    var vimeoPlayer = null; 
    var isVimeoPlayerReady = false;

    $scope.pauseVideo = function() {
      if(isVimeoPlayerReady) {
        vimeoPlayer.api('pause');
      }
      // video.stopVideo();
    }
    
    function loadVimeoPlayer() { 
      vimeoPlayer = $f(document.getElementById("vimeo1"));
      vimeoPlayer.addEvent('ready', function() {
        isVimeoPlayerReady = true;
      });
    }
    
    window.onload = function() {
      loadVimeoPlayer();
    };

  };
