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
                bootstrap: _this.build + "bootstrap.bundle.min",
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
                }
            },
            callback: _this.callback
        };
    })()
);