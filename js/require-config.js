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
                // lib
                jquery: _this.config.lib + "jquery.min",
                bootstrap: _this.config.lib + "bootstrap.bundle.min",
                // modules
                jquery_cache_module: _this.config.modules + "jquery_cache_module",
                init_module: _this.config.modules + "init_module",
                profile_module: _this.config.modules + "profile_module"
            },
            shim: {
                // lib
                bootstrap: {
                    deps: ["jquery"]
                },
                // modules
                jquery_cache_module: {
                    deps: ["jquery"],
                    exports: "_$"
                },
                init_module: {
                    deps: ["jquery", "jquery_cache_module"]
                },
                profile_module: {
                    deps: ["jquery", "jquery_cache_module"]
                }
            },
            callback: _this.callback
        }
    })()
);