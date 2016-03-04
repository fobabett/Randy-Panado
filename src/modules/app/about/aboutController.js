'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state, $location, $anchorScroll, $rootScope, $timeout, $document, $stateParams, $window) {
    if($window.innerWidth <= 1020) {
        $scope.offset = 140;
      }
      if($window.innerWidth >= 1021) {
      $scope.offset = 80;
    }

    if($stateParams.scrollTo !== null) {
      $timeout(function() { 
        var anchor = angular.element(document.getElementById($stateParams.scrollTo));
        $document.scrollToElementAnimated(anchor, 0, 2000);
      }, 100);
    }

    $scope.scrollToSection = function(hash) {
      if(hash === 'credits') {
        var anchor = document.getElementById('credits-section');
      } 
      else if(hash === 'equipment') {
        var anchor = document.getElementById('equipment-section');
      }
      if($window.innerWidth <= 1020) {
        $document.scrollToElementAnimated(anchor, 140, 1000);
      }
      if($window.innerWidth >= 1021) {
        $document.scrollToElementAnimated(anchor, 80, 1000);
      }
    }

    $scope.activeTab = $state.current.name;
    $scope.activeSection = 'about';
  };
