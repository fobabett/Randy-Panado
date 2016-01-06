'use strict';

module.exports = /*@ngInject*/
  function selectedTags() {
    return function(pics, selectedTags) {
      return pics.filter(function(pic) {

        if(selectedTags.length === 0) {
          return pics;
        }

        for (var i in pic.tags) {
          if (selectedTags.indexOf(pic.tags[i].value) != -1) {
            return true;
          }
        }
        return false;
      });
    };
  }