"use strict";

define(["module", "jquery_cache_module", "glide"], function (module, _$, glide) {
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

    function initSliders(){
        console.log(glide);

        var sliders = _$("div:regex(id, .*glide-slider-.*)");
        // initSlider(id);
    }

    function initSlider(){

    }
});