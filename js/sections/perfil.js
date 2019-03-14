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
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "Bennnnn!",
                                            "value": 5,
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "Oh, god.",
                                            "value": 2,
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "But it's Friday night!",
                                            "value": 3,
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "Again?",
                                            "value": 2,
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "I'm considering an affair.",
                                            "value": 1,
                                            "color": "#ed143d"
                                        },
                                        {
                                            "label": "[baleful stare]",
                                            "value": 3,
                                            "color": "#ed143d"
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
                                        "color": "#212529",
                                        "decimalPlaces": 0
                                    },
                                    "mainLabel": {
                                        "font": "Inter, sans-serif",
                                        "fontSize": 14
                                    },
                                    "value": {
                                        "color": "#FFF",
                                        "font": "Inter, sans-serif",
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