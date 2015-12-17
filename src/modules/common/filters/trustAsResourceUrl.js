'use strict';

module.exports = /*@ngInject*/
  function trustAsResourceUrl($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  };