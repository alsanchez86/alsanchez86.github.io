define(["module", "jquery_cache_module"], function (module, _$) {
    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        var animateClass = "progress-wrapper-animated";
        var _$wrappers = _$(".progress-wrapper");

        // TODO: Poner un timeInterval para que esto no se esté llamando continuamente

        _$(window).scroll(function() {
            var wTop = _$(window).scrollTop();
            _$wrappers.each(function (index, domElem){
                var isVisible = (_$(domElem).scrollTop() < wTop);
                var hasClass = _$(domElem).hasClass(animateClass);

                if (isVisible && !hasClass){
                    _$(domElem).addClass(animateClass);
                }
            });
        });
    }
});