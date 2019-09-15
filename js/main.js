"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not necessary here
                $(function () {
                    require(["init_module"], function (init_module) {
                        init_module.setPageLoading(false, function () {
                            // TODO: añadir clase animate-bar a los .progress-item .progress-bar
                            console.log("callback");
                        });
                    });
                });
            });
        });
    });
});