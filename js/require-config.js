require.config(
    (function () {
        // Private Vars
        var _this = {
            lib: "lib/",
            node_path: "../node_modules/",
            // lang: "../lang/",
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        // Public Vars
        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                // es: _this.lang + "es.json",
                jquery: _this.node_path + "jquery/dist/jquery.min",
                // tether: _this.node_path + "tether/dist/js/tether.min",
                popper: _this.node_modules + 'popper.js/dist/umd/popper.min.js',
                bootstrap: _this.node_path + "bootstrap/dist/js/bootstrap.min",
                _$: _this.lib + "jquery-cache"
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