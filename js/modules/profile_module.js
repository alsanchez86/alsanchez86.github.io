"use strict";

define(["module", "jquery_cache_module"], function (module, _$) {
    var interval;
    var intervalDelay = 200;

    /**
     *
     * @return {void}
     */
    module.exports.animateProgressAll = function () {
        var animateClass = "skills-item-animated";
        var $wrappers = _$(".skills-item");

        if ($wrappers){
            $wrappers
                .each(function (index, domElem) {
                    _$("#" + domElem.id).addClass(animateClass);
                });
        }
    }
});