"use strict";

define(function (require, exports, module) {
    // Private Vars
    var _this = {};
    _this.config = {
        lib: "../lib/",
        node_path: "../node_modules/",
        build: "../build/js/",
        callback: function () {
            console.log("Loaded require config file. Not rc.init callback defined.");
        }
    }
    
    // Public Methods
    exports.set_config = function (config) {
        _this.config = config;
    }

    exports.init = function (callback){
        require.config({
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: _this.config.lib + "jquery.min",
                bootstrap: _this.config.lib + "bootstrap.bundle.min", // contains popper.js
                transition: _this.config.lib + "transition",
                zoom: _this.config.lib + "zoom.js/js/zoom.js",
                _$: "jquery_cache",
                animate: "animate"
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
            callback: typeof callback === "function" ? callback() : _this.config.callback
        });
    } 
});
