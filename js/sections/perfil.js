"use strict";

define(function () {
    require(["../require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init_module", "d3"], function (init_module, d3) {
                        init_module.set_active_menu_link();
                        init_module.mobile_menu_xs();
                        init_module.page_loading(false);

                        console.log(d3);
                    });
                });
            });
        });
    });
});