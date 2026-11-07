'use strict';

define(['module', 'jquery_cache_module'], function (module, _$) {
  module.exports.run = () => {
    animateProgressAll();
    mainNavToggleButton();
  };

  function animateProgressAll() {
    _$('.skills-item').addClass('skills-item-animated');
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
