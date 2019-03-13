"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init_module"], function (init_module) {
                        init_module.set_active_menu_link();
                        init_module.mobile_menu_xs();
                        init_module.page_loading(false);
                        // Load section module
                        require((function (){
                            var pathname = window.location.pathname;
                            return ["perfil"];
                        })());
                    });
                });
            });
        });
    });
});