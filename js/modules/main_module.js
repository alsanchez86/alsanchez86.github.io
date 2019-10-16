"use strict";

define(["module", "jquery_cache_module"], function (module, _$) {
    var tableMenuActive = false;

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
        var _callback = (typeof callback === "function") ? callback : function () {};
        var _$preLoader = _$("#preloader");

        if (!is_loading) {
            _$preLoader
                .delay(200)
                .fadeOut("slow", _callback);
        }
    }

    /**
     * Set menu item class "active"
     *
     * @param {string} menuItem
     * @return {void}
     */
    module.exports.setActiveMenuItem = function (menuItem) {
        var _$menuItem = _$("#" + menuItem);

        if (_$menuItem) {
            _$menuItem.addClass("active");
        }
    }

    /**
     * xs: 0,
     * sm: 576px,
     * md: 768px,
     * lg: 992px,
     * xl: 1200px
     */
    module.exports.mobileTabletMenu = function () {
        var breakPoint = 768; // md

        _$(window)
            .resize(function (){
                if (_$(window).width() <= breakPoint){
                    tableMenuActive = true;
                }
            })
            .trigger('resize');
    }

    // function activeTabletMenu (){
    //     // var scrollDirection;
    //     // if ($window.width() <= breakPoint){
    //     //     $window.scroll(function (){
    //     //     });
    //     // }
    // }
});