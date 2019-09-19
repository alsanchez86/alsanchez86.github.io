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

    /**
     *
     * @return {void}
     */
    module.exports.animateProgressBar = function () {
        // Exec on init
        broadcastAnimateProgress(500);
        // Create listeners
        _$("window", window)
            .resize(function () {
                broadcastAnimateProgress();
            })
            .scroll(function () {
                broadcastAnimateProgress();
            });
    }

    /**
     *
     * @return {void}
     */
    function _animateProgress() {
        var animateClass = "skills-item-animated";
        var wHeight = _$("window", window).height();
        var wTop = _$("window", window).scrollTop();
        var _$wrappers = _$(".skills-item");

        _$wrappers.each(function (index, domElem) {
            var id = ("#" + domElem.id);
            var eTop = _$(id).offset().top;
            var isVisible = (eTop <= (wHeight + wTop));
            var hasClass = _$(id).hasClass(animateClass);

            if (isVisible && !hasClass) {
                _$(id).addClass(animateClass);
            }
        });
    }

    /**
     *
     * @return {void}
     */
    function broadcastAnimateProgress(delay) {
        if (interval) {
            clearTimeout(interval);
        }
        interval = setTimeout(function () {
            _animateProgress();
        }, delay || intervalDelay);
    }
});