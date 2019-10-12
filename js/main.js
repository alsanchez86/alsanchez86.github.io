"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not necessary here
                $(function () {
                    // Section module
                    if (sectionModule && (sectionModule !== "")){
                        require(["main_module", sectionModule], function (main_module, _sectionModule_) {
                            if (_sectionModule_ && (typeof _sectionModule_.run === "function")){
                                _sectionModule_.run();
                            }
                            mainPageLoading(main_module);
                        });
                    }else{
                        require(["main_module"], function (main_module) {
                            mainPageLoading(main_module);
                        });
                    }
                });
            });
        });
    });

    function mainPageLoading(module){
        module.setPageLoading(false, function () {
            // Highligth section menu item
            if (menuActiveItem && (menuActiveItem !== "")){
                module.setActiveMenuItem(menuActiveItem);
            }
        });
    }
});