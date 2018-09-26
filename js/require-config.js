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
                popper: _this.build + 'popper.min',
                bootstrap: _this.build + "bootstrap.min",
                _$: "jquery_cache"
            },
            shim: {
                popper: {
                    deps: ["jquery"],
                    exports: 'Popper'
                },
                bootstrap: {
                    deps: ["jquery", "popper"]
                },
                _$: {
                    deps: ["jquery"]
                }        
            },
            callback: _this.callback
        };
    })()
);