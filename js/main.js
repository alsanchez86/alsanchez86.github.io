"use strict";

define(function (require, exports, module) {
    require(["require-config"], function () {
        require(["jquery", "popper"], function ($, popper) {
            window.Popper = popper; // hack for bootstrap

            debugger;

            require(["bootstrap"], function () {
                debugger;

                $(function () {
                    // jquery document ready
                    // domReady requirejs plugin is not neccesary here
                });
            });
        });
    });
});