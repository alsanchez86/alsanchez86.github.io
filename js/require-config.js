"use strict";

require.config(
    (function () {
        var _this = {
            config: {
                lib: "../lib/",
                node_path: "../node_modules/",
                build: "../build/js/",
                callback: function () {
                    console.log("Loaded require config file...");

                    if (window.config){
                        console.log("Set config values from on window.config.");
                    }else{
                        console.log("Set default config values.");
                    }
                }
            }
        };

        // Set config from window.config if its defined
        if (window.config){
            _this.config = window.config;
        }

        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: _this.config.lib + "jquery.min",
                bootstrap: _this.config.lib + "bootstrap.bundle.min", // contains popper.js
                _$: "jquery_cache",
                animate: "animate",
                transition: _this.config.lib + "transition",
                zoom: _this.config.lib + "zoom.js/js/zoom"
            },
            shim: {
                bootstrap: {
                    deps: ["jquery"]
                },
                _$: {
                    deps: ["jquery"]
                },
                animate: {
                    deps: ["jquery"]
                },
                zoom: {
                    deps: ["transition"]
                }
            },
            callback: _this.config.callback
        }
    })()
);
