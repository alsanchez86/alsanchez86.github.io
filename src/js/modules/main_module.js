'use strict';

define(['module', 'jquery_cache_module'], function (module, _$) {
  /**
   * Set page loading to true or false
   * If true, preloader will be showed
   * If false, preloader will be hide with a fadeOut effect
   *
   * @param {boolean} is_loading
   * @param {function} callback
   * @return {void}
   */
  module.exports.setPageLoading = function (is_loading, callback) {
    var _callback = typeof callback === 'function' ? callback : function () {};
    var _$preLoader = _$('#preloader');
    var _$body = _$('body');

    if (!is_loading) {
      _$preLoader.delay(100).fadeOut('slow', function () {
        _$body.removeClass('hidden');
        _callback();
      });
    }
  };

  /**
   * Set menu item class "active"
   *
   * @param {string} menuItem
   * @return {void}
   */
  module.exports.setActiveMenuItem = function (menuItem) {
    var _$menuItem = _$('#' + menuItem);

    if (_$menuItem) {
      _$menuItem.addClass('active');
    }
  };

  /**
   * xs: 0,
   * sm: 576px,
   * md: 768px,
   * lg: 992px,
   * xl: 1200px
   */
  module.exports.mobileTabletMenu = function () {
    var last = 0;
    var nav = _$('#main-nav');
    var navClass = 'main-nav-hide';

    _$(window).scroll(function (event) {
      var current = _$(window).scrollTop();
      (function () {
        return current > last
          ? nav.addClass(navClass)
          : nav.removeClass(navClass);
      })();
      last = current;
    });
  };
});
