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
                            init_module.animateProgressBar();
                        });
                    });
                });
            });
        });
    });
});