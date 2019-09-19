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
                            // TODO: esto debe ser dinámico por sección
                            // profile_module.animateProgressAll();
                            // main_module.loadSectionModule();
                            if (sectionModule && (sectionModule !== "")){
                                require([sectionModule], function () {
                                    sectionModule.run();
                                });
                            }
                        });
                    });
                });
            });
        });
    });
});