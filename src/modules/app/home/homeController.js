'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, $location, $anchorScroll, $window, angularGridInstance, $state, blogService, $document, $stateParams, $timeout, $rootScope, $http, projectService) {
    if($stateParams.scrollTo !== null) {
      $timeout(function() { 
        var anchor = angular.element(document.getElementById($stateParams.scrollTo));
        $document.scrollToElement(anchor, 150, 2000);
      }, 600);
    }

    $scope.activeTab = $state.current.name;
      console.log($scope.activeTab);

    $scope.selectedTags = [];
    $scope.tags = ['commercial', 'narrative', 'creative'];
    var video = document.getElementsByTagName('iframe');

    projectService.getProjects()
      .success(function(res) {
        console.log(res);
      });
    var mockData = [
      {
        name: 'one of a kind',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'Adventure Time',
        // url: '//vimeo.com/74611159',
        url: 'http://placehold.it/1050x750',
        // type: 'vimeo',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'commercial'}
        ]
      },
      {
        name: 'Star Wars',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'creative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'creative'},
          {value: 'narrative'},
          {value: 'commercial'}
        ]
      },
      {
        name: 'one of a kind',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'commercial'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'kitty cat',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'creative'}
        ]
      },
      {
        name: 'awesomeness',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'creative'},
          {value: 'narrative'}
        ]
      },
      {
        name: 'blah',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'narrative'}
        ]
      },
      {
        name: 'dsfdsf',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'commercial'},
          {value: 'creative'}
        ]
      },
      {
        name: 'boooo',
        url: 'http://placehold.it/1050x750',
        location: 'Panado Ranch 1',
        type: 'image',
        tags: [
          {value: 'commercial'},
          {value: 'creative'},
          {value: 'narrative'}
        ]
      }
    ];
    $scope.pics = mockData;

    function removeA(arr) {
      var what, a = arguments, L = a.length, ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
        }
      }
      return arr;
    }

    $scope.modalShown = false;
    $scope.toggleModal = function(pic) {
      console.log(pic);
      if(!$scope.modalShown) {
        $scope.modalShown = !$scope.modalShown;
      }
      $scope.selectedPic = pic;
      $scope.types = pic.types;
    };

    $scope.openArticle = function(index, id) {
      // console.log(index, id);
      return blogService.getSingleArticle(id)
        .success(function(res) {
          $state.go('post', {id: id});
        });
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

    $scope.selectTag = function(index, tag) {
      if($scope.selectedTags.length === 0) {
        $scope.selectedTags.push(tag);
      } else {
        for(var i in $scope.selectedTags) {
          if($scope.selectedTags[i] === tag) {
            removeA($scope.selectedTags, tag);
          } else {
            $scope.selectedTags.push(tag);
          }
        }
      }
      angularGridInstance.gallery.refresh();
    }

    //Vimeo API
    var vimeoPlayer = null; 
    var isVimeoPlayerReady = false;

    $scope.pauseVideo = function() {
      if(isVimeoPlayerReady) {
        vimeoPlayer.api('pause');
      }
      // video.stopVideo();
    };
    
    function loadVimeoPlayer() { 
      vimeoPlayer = $f(document.getElementById("vimeo1"));
      vimeoPlayer.addEvent('ready', function() {
        isVimeoPlayerReady = true;
      });
    }
    
    window.onload = function() {
      loadVimeoPlayer();
    };

    // $scope.contact = function(form) { //doesn't work
    //   console.log('yas');
    //   $http({
    //     method: 'POST',
    //     url: 'https://script.google.com/macros/s/AKfycbzPDcx9lJYlrTvJYiM50oNFeXfYb61uQ7qcHfiKVvMBzw3vZ_A/exec',
    //     headers: {
    //       'Content-Type': 'application/json; charset=utf-8',
    //       'Access-Control-Allow-Origin': true
    //     },
    //     data: {name: 'te vallee'}
    //   }).then(function(res) {
    //     console.log(res);
    //   });
    // };
    $scope.submit = function() {
      console.log('hayyy')
      $state.go('home')
    }

    return blogService.getBlogArticles()
      .success(function(res) {
        $scope.articles = res;
      });

  };
