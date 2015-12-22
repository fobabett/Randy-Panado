'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope, $state) {
    $scope.activeTab = $state.current.name;
  };
