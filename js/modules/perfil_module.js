"use strict";

define(["module", "jquery_cache_module", "glide"], function (module, _$, Glide) {
    module.exports.run = function () {
        animateProgressAll();
        initSliders();
    }

    /**
     *
     * @return {void}
     */
    function animateProgressAll() {
        var animateClass = "skills-item-animated";
        var $wrappers = _$(".skills-item");
        if ($wrappers) {
            $wrappers
                .each(function (index, domElem) {
                    _$("#" + domElem.id).addClass(animateClass);
                });
        }
    }

    function initSliders() {
        [
            "expertus",
            "innofis",
            "ximdex",
            "existo",
            "freelance",
            "gaesa"
        ].map(function (id) {
            return new Glide("#glide-slider-" + id, {
                type: "carousel",
                perView: 2,
                breakpoints: {
                    576: {
                        perView: 1
                    },
                    768: {
                        perView: 1
                    },
                    992: {
                        perView: 2
                    },
                    1200: {
                        perView: 2
                    }
                },
                // autoplay: 5000,
                // hoverpause: true
            });
        }).map(function (carousel) {
            carousel
                .on(["build.after"], function () {
                    _$(carousel.selector)
                        .removeClass("invisible")
                        .addClass("visible");
                })
                .mount();
        })
    }
});