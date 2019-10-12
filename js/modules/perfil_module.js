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
            $wrappers.each(function (index, domElem) {
                _$("#" + domElem.id).addClass(animateClass);
            });
        }
    }

    function initSliders() {
        ["expertus", "innofis", "ximdex", "existo", "freelance", "gaesa"]
            .map(function (id) {
                return new Glide("#glide-slider-" + id, {
                    type: "carousel",
                    hoverpause: true,
                    perView: 3,
                    autoplay: 2000
                }).mount();
            });
    }
});