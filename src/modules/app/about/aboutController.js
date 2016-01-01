'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state, $location, $anchorScroll, $rootScope, $timeout, $document, $stateParams) {
    $timeout(function() { 
      var anchor = angular.element(document.getElementById($stateParams.scrollTo));
      console.log(anchor);
      $document.scrollToElementAnimated(anchor, -5000, 2000);
    }, 100);

    $scope.activeTab = $state.current.name;
    $scope.activeSection = 'about';
  };
