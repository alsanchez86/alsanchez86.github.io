define(["module", "jquery", "jquery_cache_module"], function (module, $, _$) {
    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        var $bars = _$(".progress-item .progress .progress-bar");
        $bars.addClass("animate-bar");
    }
});