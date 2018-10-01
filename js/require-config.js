"use strict";

require.config(
    (function () {
        var _this = {
            config: {
                modules: window.location.origin + "/js/modules/",
                lib: window.location.origin + "/lib/"
            },
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                // modules
                init_module: _this.config.modules + "init_module",
                // libs
                jquery: _this.config.lib + "jquery.min",
                bootstrap: _this.config.lib + "bootstrap.bundle.min", // contains popper.js
                jquery_cache: _this.config.lib + "jquery_cache",
                animate: _this.config.lib + "animate",
                transition: _this.config.lib + "transition",
                zoom: _this.config.lib + "zoom.js/js/zoom"
            },
            shim: {
                // modules
                init_module: {
                    deps: ["jquery", "jquery_cache", "animate", "zoom"]
                },
                // libs
                bootstrap: {
                    deps: ["jquery"]
                },
                jquery_cache: {
                    deps: ["jquery"],
                    exports: "_$"
                },
                animate: {
                    deps: ["jquery"]
                },
                zoom: {
                    deps: ["transition"]
                }
            },
            callback: _this.callback
        }
    })()
);
