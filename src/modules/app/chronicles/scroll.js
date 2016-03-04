'use strict';

module.exports = /*@ngInject*/
  function scroll($window) {
    return function(scope, element, attrs) {
      var home = document.getElementById('home-page');
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 500) {
          scope.boolChangeClass = true;
        } else {
          scope.boolChangeClass = false;
        }
        if (this.pageYOffset >= 100) {
          scope.boolChangeClassHome = true;
        } else {
          scope.boolChangeClassHome = false;
        }
        scope.$apply();
      });
    };
  };