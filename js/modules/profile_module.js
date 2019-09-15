define(["module", "jquery_cache_module"], function (module, _$) {
    var interval;
    var intervalDelay = 500;

    function _animateProgress() {
        var animateClass = "progress-wrapper-animated";
        var _$wrappers = _$(".progress-wrapper");
        var wHeight = _$("window", window).height();
        var wTop = _$("window", window).scrollTop();

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

    function broadcastAnimateProgress (){
        if (interval) {
            clearTimeout(interval);
        }
        interval = setTimeout(function () {
            _animateProgress();
        }, intervalDelay);
    }

    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        // Exec on init
        _animateProgress();
        // Create listeners
        _$("window", window)
            .resize(function() {
                broadcastAnimateProgress ();
            })
            .scroll(function () {
                broadcastAnimateProgress ();
            });
    }
});