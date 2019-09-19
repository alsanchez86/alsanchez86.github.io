"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not necessary here
                $(function () {
                    require(["main_module"], function (main_module) {
                        main_module.setPageLoading(false, function () {
                            if (sectionModule && (sectionModule !== "")){
                                require([sectionModule], function (_sectionModule_) {
                                    _sectionModule_.run();
                                });
                            }
                        });
                    });
                });
            });
        });
    });
});