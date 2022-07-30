'use strict';

define(['module', 'jquery_cache_module', 'glide'], function (
  module,
  _$,
  Glide,
) {
  /**
   *
   * @return {void}
   */
  module.exports.run = function () {
    animateProgressAll();
    initSliders();
    initSwitchControl();
  };

  /**
   *
   * @return {void}
   */
  function animateProgressAll() {
    var animateClass = 'skills-item-animated';
    var $wrappers = _$('.skills-item');

    if ($wrappers) {
      $wrappers.each(function (index, domElem) {
        _$('#' + domElem.id).addClass(animateClass);
      });
    }
  }

  /**
   *
   * @return {void}
   */
  function initSliders() {
    [
      {
        id: 'betix',
        perView: 3,
      },
      {
        id: 'crealogix',
        perView: 2,
      },
      {
        id: 'ximdex',
        perView: 3,
      },
      {
        id: 'existo',
        perView: 3,
      },
    ]
      .map(function (slider) {
        return new Glide('#glide-slider-' + slider.id, {
          type: 'carousel',
          perView: slider.perView,
          breakpoints: {
            576: {
              perView: 1,
            },
            768: {
              perView: 1,
            },
          },
          autoplay: 5000,
          hoverpause: true,
        });
      })
      .map(function (carousel) {
        carousel
          .on(['build.after'], function () {
            _$(carousel.selector).removeClass('invisible').addClass('visible');
          })
          .mount();
      });
  }

  /**
   *
   *
   */
  function initSwitchControl() {
    var darkModeClass = 'dark-mode';
    var _$body = _$('body');
    var _$switch = _$('#input-switch-mode');

    _$switch.on('change', function (event) {
      var isOn = _$switch.prop('checked');

      if (isOn) {
        _$body.addClass(darkModeClass);
      } else {
        _$body.removeClass(darkModeClass);
      }
    });
  }
});
