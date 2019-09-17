"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not necessary here
                $(function () {
                    require(["init_module", "profile_module"], function (init_module, profile_module) {
                        init_module.setPageLoading(false, function () {
                            // profile_module.animateProgressBar();
                        });
                    });
                });
            });
        });
    });
});