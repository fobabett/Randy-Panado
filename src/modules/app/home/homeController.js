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
        $scope.projects = res;
      });

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
    $scope.toggleModal = function(project) {
      $scope.modalShown = true;
      $scope.selectedProject = project;
    };

    $scope.openArticle = function(index, id) {
      return blogService.getSingleArticle(id)
        .success(function(res) {
          $state.go('post', {id: id});
        });
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
    };

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

    blogService.getBlogArticles()
      .success(function(res) {
        $scope.articles = res;
      });

  };
