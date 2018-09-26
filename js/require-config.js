require.config(
    (function () {
        // Private Vars
        var _this = {
            lib: "../lib/",
            node_path: "../node_modules/",
            build: "../build/js/",
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        // Public Vars
        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: _this.build + "jquery.min",
                // tether: _this.node_path + "tether/dist/js/tether.min",
                popper: _this.build + 'popper.min.js',
                bootstrap: _this.build + "bootstrap.min",
                _$: "jquery_cache"
            },
            shim: {
                tether: {
                    deps: ["jquery"]
                },
                bootstrap: {
                    deps: ["jquery", "tether"]
                },
                _$: {
                    deps: ["jquery"]
                }        
            },
            callback: _this.callback
        };
    })()
);