define(["module", "jquery_cache_module"], function (module, _$) {
    var interval;
    var intervalDelay = 1000;

    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        var animateClass = "progress-wrapper-animated";
        var _$wrappers = _$(".progress-wrapper");

        _$("window", window).scroll(function () {
            if (interval) {
                clearTimeout(interval);
            }

            interval = setTimeout(function () {
                var top = _$("window").scrollTop();
                _$wrappers.each(function (index, domElem) {
                    var id = ("#" + domElem.id);
                    var isVisible = (_$(id).scrollTop() < top);
                    var hasClass = _$(id).hasClass(animateClass);

                    if (isVisible && !hasClass) {
                        _$(id).addClass(animateClass);
                    }
                });
            }, intervalDelay);
        });
    }
});