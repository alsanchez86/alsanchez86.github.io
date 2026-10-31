'use strict';

define(['module', 'jquery_cache_module'], function (module, _$) {
  /**
   *
   * @return {void}
   */
  module.exports.run = function () {
    animateProgressAll();
  };

  /**
   *
   * @return {void}
   */
  function animateProgressAll() {
    var animateClass = 'skills-item-animated';
    var $wrappers = _$('.skills-item');

    if ($wrappers) {
      $wrappers.each(function (_, domElem) {
        _$('#' + domElem.id).addClass(animateClass);
      });
    }
  }
});
