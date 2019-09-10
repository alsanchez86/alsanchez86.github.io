define(["module", "jquery", "jquery_cache_module"], function (module, $, _$) {
    /**
     * Set page loading to true or false
     * If true, preloader will be showed
     * If false, preloader will be hide with a fadeOut effect
     */
    module.exports.setPageLoading = function (is_loading) {
        var $preLoader = _$("#preloader");

        if (!is_loading) {
            $preLoader
                .delay(200)
                .fadeOut('slow');
        }
    }
});