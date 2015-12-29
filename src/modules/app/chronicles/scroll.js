'use strict';

module.exports = /*@ngInject*/
  function scroll($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 500) {
            scope.boolChangeClass = true;
        } else {
            scope.boolChangeClass = false;
        }
        scope.$apply();
      });
    };
  };