define(["module", "jquery", "jquery_cache_module"], function (module, $, _$) {

    /**
     *
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