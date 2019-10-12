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
                tiny_slider: _this.config.lib + "tiny-slider",
                // modules
                jquery_cache_module: _this.config.modules + "jquery_cache_module",
                main_module: _this.config.modules + "main_module",
                home_module: _this.config.modules + "home_module",
                perfil_module: _this.config.modules + "perfil_module",
                portfolio_module: _this.config.modules + "portfolio_module"
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
                main_module: {
                    deps: ["jquery_cache_module"]
                },
                home_module: {
                    deps: ["jquery_cache_module"]
                },
                perfil_module: {
                    deps: ["jquery_cache_module", "tiny_slider"]
                },
                portfolio_module: {
                    deps: ["jquery_cache_module"]
                }
            },
            callback: _this.callback
        }
    })()
);