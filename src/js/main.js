"use strict";

define(function () {
    require(["require-config"], function () {
        require(["fetch", "promise_polyfill"], function (fetch) {
            // Polyfills
            window.fetch = fetch.fetch; // Because its UMD

            require(["jquery"], function ($) {
                require(["bootstrap"], function () {
                    // jquery document ready
                    // domReady requirejs plugin is not necessary here
                    $(function () {
                        // Section module
                        if (sectionModule && (typeof sectionModule === "string") && (sectionModule !== "")) {
                            require(["main_module", sectionModule], function (main_module, _sectionModule_) {
                                mainPageLoading(main_module, function () {
                                    if (_sectionModule_ && _sectionModule_.run && (typeof _sectionModule_.run === "function")) {
                                        _sectionModule_.run();
                                    }
                                });
                            });
                        } else {
                            require(["main_module"], function (main_module) {
                                mainPageLoading(main_module);
                            });
                        }
                    });
                });
            });
        });
    });

    function mainPageLoading(module, callback) {
        module.setPageLoading(false, function () {
            // Highlight section menu item
            if (menuActiveItem && (menuActiveItem !== "")) {
                module.setActiveMenuItem(menuActiveItem);
            }
            // Menu tablet md
            // module.mobileTabletMenu();
            // Callback
            if (typeof callback === "function") {
                callback();
            }
        });
    }
});