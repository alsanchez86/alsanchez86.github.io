'use strict';

define(['module', 'jquery_cache_module'], function (module, _$) {
  module.exports.run = function (
    { isLoading = false, callback } = { isLoading: false, callback: () => {} },
  ) {
    initPopovers();
    mainNavToggleButton();

    if (!isLoading) {
      _$('#preloader').delay(100).fadeOut('slow', callback);
    }
  };

  function initPopovers() {
    $('[data-toggle="popover"]').popover({
      trigger: 'hover focus',
      offset: '0, 5px',
      container: 'body',
      placement: function (context, source) {
        if ($(window).width() < 768) {
          return 'bottom';
        }

        return 'left';
      },
    });
  }

  function mainNavToggleButton() {
    const isOpenClass = 'is-open';
    const noScrollClass = 'no-scroll';
    const $body = _$('body');
    const $mainNav = _$('#main-nav');
    const $menuToggleButton = _$('#main-nav-toggle-button');
    const $navLinks = _$('#main-nav .nav-link');

    $menuToggleButton.on('click', function (event) {
      event.stopPropagation();
      toggleNav();
    });

    $navLinks.on('click', function () {
      closeNav();
    });

    _$(document).on('keydown', function (event) {
      if (event.key === 'Escape' && $mainNav.hasClass(isOpenClass)) {
        closeNav();
      }
    });

    function closeNav() {
      $mainNav.removeClass(isOpenClass);
      $body.removeClass(noScrollClass);
      $menuToggleButton.attr('aria-expanded', 'false');
    }

    function toggleNav() {
      const isOpen = $mainNav.toggleClass(isOpenClass).hasClass(isOpenClass);

      $body.toggleClass(noScrollClass, isOpen);
      $menuToggleButton.attr('aria-expanded', isOpen.toString());
    }
  }
});
