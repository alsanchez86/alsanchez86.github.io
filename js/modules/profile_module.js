define(["module", "jquery_cache_module"], function (module, _$) {
    var interval;
    var intervalDelay = 1000;

    function _animateProgress() {
        var animateClass = "progress-wrapper-animated";
        var _$wrappers = _$(".progress-wrapper");
        var top = _$("window", window).scrollTop();

        _$wrappers.each(function (index, domElem) {
            var id = ("#" + domElem.id);
            var isVisible = (_$(id).scrollTop() < top);
            var hasClass = _$(id).hasClass(animateClass);

            if (isVisible && !hasClass) {
                _$(id).addClass(animateClass);
            }
        });
    }

    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        // Exec on init
        _animateProgress();
        // Create listener
        _$("window", window).scroll(function () {
            if (interval) {
                clearTimeout(interval);
            }
            interval = setTimeout(function () {
                _animateProgress();
            }, intervalDelay);
        });
    }
});