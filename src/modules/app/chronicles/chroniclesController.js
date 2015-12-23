'use strict';

module.exports = /*@ngInject*/
  function chroniclesController($scope, $state, $location, blogService) {

    $scope.activeTab = $state.current.name;

    $scope.openArticle = function(index, id) {
      console.log(index, id);
      return blogService.getSingleArticle(id)
        .success(function(res) {
          $state.go('post', {id: id});
        });
    };

    $scope.getCategory = function(category) {
      return blogService.getArticlesByCategory(category)
        .success(function(res) {
          $state.go('category', {category: category});
        });
    };

    return blogService.getBlogArticles()
      .success(function(res) {
        $scope.articles = res;
      });

  };
