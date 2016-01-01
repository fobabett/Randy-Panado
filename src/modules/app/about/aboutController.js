'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state, $location, $anchorScroll, $rootScope) {
    $scope.activeTab = $state.current.name;
    $scope.activeSection = 'about';
  };
