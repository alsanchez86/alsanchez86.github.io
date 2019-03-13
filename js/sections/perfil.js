"use strict";

define(function () {
    require(["../require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init", "radarchart", "d3"], function (init, radarchart, d3) {
                        init.set_active_menu_link();
                        init.mobile_menu_xs();
                        init.page_loading(false);
                        // Radar chart                       
                        var margin = {
                                top: 100,
                                right: 100,
                                bottom: 100,
                                left: 100
                            },
                            width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
                            height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

                        var data = [
                            [ //iPhone
                                {
                                    axis: "Battery Life",
                                    value: 0.22
                                },
                                {
                                    axis: "Brand",
                                    value: 0.28
                                },
                                {
                                    axis: "Contract Cost",
                                    value: 0.29
                                },
                                {
                                    axis: "Design And Quality",
                                    value: 0.17
                                },
                                {
                                    axis: "Have Internet Connectivity",
                                    value: 0.22
                                },
                                {
                                    axis: "Large Screen",
                                    value: 0.02
                                },
                                {
                                    axis: "Price Of Device",
                                    value: 0.21
                                },
                                {
                                    axis: "To Be A Smartphone",
                                    value: 0.50
                                }
                            ],
                            [ //Samsung
                                {
                                    axis: "Battery Life",
                                    value: 0.27
                                },
                                {
                                    axis: "Brand",
                                    value: 0.16
                                },
                                {
                                    axis: "Contract Cost",
                                    value: 0.35
                                },
                                {
                                    axis: "Design And Quality",
                                    value: 0.13
                                },
                                {
                                    axis: "Have Internet Connectivity",
                                    value: 0.20
                                },
                                {
                                    axis: "Large Screen",
                                    value: 0.13
                                },
                                {
                                    axis: "Price Of Device",
                                    value: 0.35
                                },
                                {
                                    axis: "To Be A Smartphone",
                                    value: 0.38
                                }
                            ],
                            [ //Nokia Smartphone
                                {
                                    axis: "Battery Life",
                                    value: 0.26
                                },
                                {
                                    axis: "Brand",
                                    value: 0.10
                                },
                                {
                                    axis: "Contract Cost",
                                    value: 0.30
                                },
                                {
                                    axis: "Design And Quality",
                                    value: 0.14
                                },
                                {
                                    axis: "Have Internet Connectivity",
                                    value: 0.22
                                },
                                {
                                    axis: "Large Screen",
                                    value: 0.04
                                },
                                {
                                    axis: "Price Of Device",
                                    value: 0.41
                                },
                                {
                                    axis: "To Be A Smartphone",
                                    value: 0.30
                                }
                            ]
                        ];
                        
                        var color = d3.scaleOrdinal()
                            .range(["#EDC951", "#CC333F", "#00A0B0"]);

                        var radarChartOptions = {
                            w: width,
                            h: height,
                            margin: margin,
                            maxValue: 0.5,
                            levels: 5,
                            roundStrokes: true,
                            color: color
                        };
                        //Call function to draw the Radar chart
                        radarchart.draw(".radarChart", data, radarChartOptions);
                    });
                });
            });
        });
    });
});