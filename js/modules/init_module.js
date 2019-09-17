"use strict";

define(["module", "jquery_cache_module"], function (module, _$) {
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
        var _callback = (typeof callback === "function") ? callback : function(){};
        var _$preLoader = _$("#preloader");

        if (!is_loading) {
            _$preLoader
                .delay(200)
                .fadeOut("slow", _callback);
        }
    }
});