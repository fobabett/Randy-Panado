'use strict';

module.exports = /*@ngInject*/
  function categoryController($scope, $stateParams, blogService, $state) {

    $scope.activeTab = 'chronicles';
    $scope.category = $stateParams.category;

    $scope.openArticle = function(index, id) {
      console.log(index, id);
      return blogService.getSingleArticle(id)
        .success(function(res) {
          $state.go('post', {id: id});
        });
    };

    return blogService.getArticlesByCategory($stateParams.category)
      .success(function(res) {
        $scope.articles = res;
      });
  };