var require_config = function () {
    this.config = {
        lib: "../lib/",
        node_path: "../node_modules/",
        build: "../build/js/",
        callback: function () {
            console.log("Loaded require config file. Not rc.init callback defined.");
        }
    }
    
    this.init = function (callback){
        require.config({
            waitSeconds: 30,
            baseUrl: "js",
            paths: {
                jquery: this.config.build + "jquery.min",
                bootstrap: this.config.build + "bootstrap.bundle.min", // contains popper.js
                transition: this.config.lib + "transition",
                zoom: this.config.lib + "zoom.js/js/zoom.js",
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
            callback: typeof callback === "function" ? callback() : this.config.callback
        });
    }    
}