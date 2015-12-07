'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
  };
