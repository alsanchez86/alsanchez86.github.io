require.config(
    (function () {
        // Private Vars
        var _this = {
            lib: "../lib/",
            node_path: "../node_modules/",
            build: "../build/",
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        // Public Vars
        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: _this.build + "jquery/dist/jquery.min",
                // tether: _this.node_path + "tether/dist/js/tether.min",
                popper: _this.build + 'popper.js/dist/umd/popper.min.js',
                bootstrap: _this.build + "bootstrap/dist/js/bootstrap.min",
                _$: "jquery-cache"
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