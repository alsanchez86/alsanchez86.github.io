define(["module", "jquery", "jquery_cache_module"], function (module, $, _$) {
    /**
     * Set page loading to true or false
     * If true, preloader will be showed
     * If false, preloader will be hide with a fadeOut effect
     *
     * @param {boolean} is_loading
     * @param {function} callback
     * @return {void}
     */
    module.exports.setPageLoading = function (is_loading, callback) {
        var $preLoader = _$("#preloader");

        if (!is_loading) {
            $preLoader
                .delay(200)
                .fadeOut("slow", callback);
        }
    }

    /**
     *
     * @return {void}
     * */
    module.exports.animateProgressBar = function () {
        var $bars = _$(".progress-item .progress .progress-bar");
        $bars.addClass("animate-bar");
    }
});