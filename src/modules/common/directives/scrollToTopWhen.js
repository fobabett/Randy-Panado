'use strict';

module.exports = /*@ngInject*/
  function scrollToTopWhen($timeout) {
    function link (scope, element, attrs) {
      scope.$on(attrs.scrollToTopWhen, function () {
        $timeout(function () {
          angular.element(element)[0].scrollTop = 0;
        });
      });
    }
  };