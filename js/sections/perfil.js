"use strict";

define(function () {
    require(["../require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init", "d3"], function (init, d3) {
                        init.set_active_menu_link();
                        init.mobile_menu_xs();
                        init.page_loading(false);
                        // Save reference to d3
                        window.d3 = d3;

                        require(["d3pie", "jquery_cache_module"], function (d3pie, _$) {
                            var pie = new d3pie("piechart", {
                                "size": {
                                    "canvasHeight": 500,
                                    "canvasWidth": _$("#main-content").width(),
                                    "pieOuterRadius": "88%"
                                },
                                "data": {
                                    "content": [{
                                            "label": "When's it going to be done?",
                                            "value": 8,
                                            "color": "#7e3838"
                                        },
                                        {
                                            "label": "Bennnnn!",
                                            "value": 5,
                                            "color": "#7e6538"
                                        },
                                        {
                                            "label": "Oh, god.",
                                            "value": 2,
                                            "color": "#7c7e38"
                                        },
                                        {
                                            "label": "But it's Friday night!",
                                            "value": 3,
                                            "color": "#587e38"
                                        },
                                        {
                                            "label": "Again?",
                                            "value": 2,
                                            "color": "#387e45"
                                        },
                                        {
                                            "label": "I'm considering an affair.",
                                            "value": 1,
                                            "color": "#387e6a"
                                        },
                                        {
                                            "label": "[baleful stare]",
                                            "value": 3,
                                            "color": "#386a7e"
                                        }
                                    ]
                                },
                                "labels": {
                                    "outer": {
                                        "pieDistance": 32
                                    },
                                    "inner": {
                                        "format": "value"
                                    },                                    
                                    "percentage": {
                                        "color": "#e1e1e1",
                                        "decimalPlaces": 0
                                    },
                                    "mainLabel": {
                                        "fontSize": 17
                                    },
                                    "value": {
                                        "color": "#e1e1e1",
                                        "fontSize": 14
                                    },
                                    "lines": {
                                        "enabled": true,
                                        "color": "#cccccc"
                                    },
                                    "truncation": {
                                        "enabled": true
                                    }
                                },
                                "effects": {
                                    "pullOutSegmentOnClick": {
                                        "effect": "linear",
                                        "speed": 400,
                                        "size": 8
                                    }
                                }
                            });
                        });
                    });
                });
            });
        });
    });
});