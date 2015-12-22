'use strict';

module.exports = /*@ngInject*/
  function chroniclesController($scope, $state) {
    $scope.activeTab = $state.current.name;
  };
