'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state, $location, $anchorScroll, $rootScope) {
    $scope.activeTab = $state.current.name;
    $scope.activeSection = 'about';

    $scope.scrollToAbout = function() {
      $scope.activeSection = 'about';
      $location.hash('about');
      $anchorScroll();
    };
    $scope.scrollToCredits = function() {
      $scope.activeSection = 'credits';
      $location.hash('credits-section');
      $anchorScroll();
    };
    $scope.scrollToEquipment = function() {
      $scope.activeSection = 'equipment';
      $location.hash('equipment-section');
      $anchorScroll();
    };

  };
