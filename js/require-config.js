"use strict";

require.config(
    (function () {
        var _this = {
            config: {
                modules: window.location.origin + "/js/modules/",
                sections: window.location.origin + "/js/sections/",
                dependencies: window.location.origin + "/dependencies/"                
            },
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                // dependencies
                jquery: _this.config.dependencies + "jquery.min",
                bootstrap: _this.config.dependencies + "bootstrap.bundle.min", // contains popper.js
                animate: _this.config.dependencies + "animate",
                transition: _this.config.dependencies + "transition",
                zoom: _this.config.dependencies + "zoom.js/js/zoom",
                d3: _this.config.dependencies + "d3.min",
                d3pie: _this.config.dependencies + "d3pie.min",
                // modules
                jquery_cache_module: _this.config.modules + "jquery_cache.module",
                init: _this.config.modules + "init.module",
                // sections
                perfil: _this.config.sections + "perfil",
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
                d3pie: {
                    deps: ["d3"]
                },
                // modules
                jquery_cache_module: {
                    deps: ["jquery"],
                    exports: "_$"
                },
                init: {
                    deps: ["jquery", "jquery_cache_module", "animate", "zoom"]
                }
            },
            callback: _this.callback
        }
    })()
);
