'use strict';

module.exports = /*@ngInject*/
  function postController($scope, $stateParams, blogService, $state) {

    $scope.activeTab = 'chronicles';
    
    return blogService.getSingleArticle($stateParams.id)
      .success(function(res) {
        $scope.article = res;
      });
  };