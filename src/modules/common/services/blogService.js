'use strict';

module.exports = /*@ngInject*/
  function blogService($http) {
    
    this.getBlogArticles = function() {
      return $http.get('/articles')
      .success(function(res) {
        return res;
      });
    };

    this.getArticlesByCategory = function(category) {
      return $http.get('/articles/category/' + category)
      .success(function(res) {
        return res;
      });
    };

    this.getSingleArticle = function(id) {
      return $http.get('/articles/' + id)
      .success(function(res) {
        return res;
      });
    };

  };
