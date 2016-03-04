'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state, $location, $anchorScroll, $rootScope, $timeout, $document, $stateParams) {
    if($stateParams.scrollTo !== null) {
      $timeout(function() { 
        var anchor = angular.element(document.getElementById($stateParams.scrollTo));
        console.log(anchor);
        $document.scrollToElementAnimated(anchor, 0, 2000);
      }, 100);
    }

    $scope.activeTab = $state.current.name;
    $scope.activeSection = 'about';
  };
