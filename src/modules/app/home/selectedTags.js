'use strict';

module.exports = /*@ngInject*/
  function selectedTags() {
    return function(projects, selectedTags) {
      if (projects!== undefined) {
        return projects.filter(function(project) {
  
          if(selectedTags.length === 0) {
            return projects;
          }
  
          for (var i in project.tags) {
            if (selectedTags.indexOf(project.tags[i].value) != -1) {
              return true;
            }
          }
          return false;
        });
      }
    };
  };