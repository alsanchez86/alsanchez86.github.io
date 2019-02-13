"use strict";

require.config(
    (function () {
        var _this = {
            config: {
                modules: window.location.origin + "/js/modules/",
                tp: window.location.origin + "/third_parties/"
            },
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                // third parties
                jquery: _this.config.tp + "jquery.min",
                bootstrap: _this.config.tp + "bootstrap.bundle.min", // contains popper.js
                animate: _this.config.tp + "animate",
                transition: _this.config.tp + "transition",
                zoom: _this.config.tp + "zoom.js/js/zoom",
                // modules
                jquery_cache_module: _this.config.modules + "jquery_cache_module",
                init_module: _this.config.modules + "init_module"
            },
            shim: {
                // third parties
                bootstrap: {
                    deps: ["jquery"]
                },
                animate: {
                    deps: ["jquery"]
                },
                zoom: {
                    deps: ["transition"]
                },
                // modules
                jquery_cache_module: {
                    deps: ["jquery"],
                    exports: "_$"
                },
                init_module: {
                    deps: ["jquery", "jquery_cache_module", "animate", "zoom"]
                }
            },
            callback: _this.callback
        }
    })()
);
