"use strict";

define(["module", "jquery_cache_module", "tiny_slider"], function (module, _$, tns) {
    module.exports.run = function () {
        animateProgressAll();
        initSlider();
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

    function initSlider(){
        console.log(tns);
    }
});