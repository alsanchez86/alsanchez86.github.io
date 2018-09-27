"use strict";

require.config(
    (function () {
        var _this = {
            config: {
                modules: "../js/modules/",
                lib: "../lib/"
            },
            callback: function () {
                var msg_conf = window.config ? "Set config values from on window.config." : "Set default config values.";
                console.log("Loaded require config file.");
                console.log(msg_conf);
            }
        };

        // Set config from window.config if defined
        if (window.config){
            _this.config = window.config;
        }

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
