require.config(
    (function () {
        var _this = {
            lib: "lib/",
            bower_path: "../bower_components/",
            node_path: "../node_modules/",
            root: "../",
            callback: function () {
                console.log("Loaded require config file.");
            }
        };

        return {
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: _this.node_path + "jquery/jquery.min",
                popper: _this.node_path + "popper.js/dist/umd/popper.min",
                bootstrap: _this.node_path + "bootstrap/dist/js/bootstrap.min",
                $cache: _this.lib + "jquery-cache"
            },
            shim: {
                popper: {
                    deps: ["jquery"]
                },
                bootstrap: {
                    deps: ["jquery", "popper"]
                },
                $cache: {
                    deps: ["jquery"]
                }
            },
            callback: _this.callback
        };
    })()
);