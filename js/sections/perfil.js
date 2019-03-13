"use strict";

define(function () {
    require(["../require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init"], function (init) {
                        init.set_active_menu_link();
                        init.mobile_menu_xs();
                        init.page_loading(false);
                    });
                });
            });
        });
    });
});