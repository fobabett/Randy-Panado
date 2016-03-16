'use strict';

module.exports = /*@ngInject*/
  function projectService($http) {
    
    this.getProjects = function() {
      return $http.get('/projects')
      .success(function(res) {
        return res;
      });
    };
  };
