"use strict";

define(function () {
    require(["../require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init", "radarchart", "d3", "jquery_cache_module"], function (init, radarchart, d3, _$) {
                        init.set_active_menu_link();
                        init.mobile_menu_xs();
                        init.page_loading(false);
                        // Radar chart                       
                        var margin = {
                            top: 100,
                            right: 100,
                            bottom: 100,
                            left: 100
                        };
                        var width = Math.min(_$(".main-content").width(), window.innerWidth - 10) - margin.left - margin.right;
                        var height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

                        /*
                        - Front-end:
                            · jQuery
                            · AngularJS
                            · Angular
                            · Riot.js
                            · CoffeeScript
                            · TypeScript
                            · Bootstrap
                            · Foundation
                            · HTML5
                            · CSS
                            · Less
                            · Sass
                            · Grunt
                            · Gulp

                        - Back-end:
                            · Nodejs
                            · PHP 5.* ~ 7 (Symfony 2, Twig, Blade, Smarty)
                            · Bases de datos SQL (MySQL)
                            · Apache Solr
                            · ElasticSearch

                        - Sistemas:
                            · Linux
                            · Mac OS X
                            · Windows *

                        - Otras tecnologías a destacar:
                            · Formatos: XML, XSLT, RELAX-NG, JSON, JSON-LD
                            · Gestor de versiones: Github
                            · Gestores de dependencias: npm, Composer, Bower

                        - Accesibilidad:
                            · UX, UI. WCAG 2.0

                        - Diseño gráfico:
                            · Illustrator
                            · Photoshop
                            · Fireworks
                            · Adobe Flash (ActionScript 3)
                            · Inkscape
                            · Gimp

                        - Metodologías ágiles:
                            · Scrum                        
                        */
                        var data = [
                            [{
                                    axis: "jQuery",
                                    value: 0.26
                                },
                                {
                                    axis: "AngularJS",
                                    value: 0.10
                                },
                                {
                                    axis: "Angular",
                                    value: 0.30
                                },
                                {
                                    axis: "Riot.js",
                                    value: 0.14
                                },
                                {
                                    axis: "CoffeeScript",
                                    value: 0.22
                                },
                                {
                                    axis: "TypeScript",
                                    value: 0.04
                                },
                                {
                                    axis: "Bootstrap",
                                    value: 0.41
                                },
                                {
                                    axis: "Foundation",
                                    value: 0.30
                                },
                                {
                                    axis: "HTML5",
                                    value: 0.30
                                },
                                {
                                    axis: "CSS",
                                    value: 0.30
                                },
                                {
                                    axis: "Less",
                                    value: 0.30
                                },
                                {
                                    axis: "Sass",
                                    value: 0.30
                                },
                                {
                                    axis: "Grunt",
                                    value: 0.30
                                },
                                {
                                    axis: "Gulp",
                                    value: 0.30
                                }
                            ],
                            [
                                {
                                    axis: "Nodejs",
                                    value: 0.60
                                },
                                {
                                    axis: "PHP",
                                    value: 0.30
                                },
                                {
                                    axis: "SQL",
                                    value: 0.70
                                }
                            ]
                        ];
                        var color = d3.scale.ordinal().range(["crimson", "#CC333F", "#00A0B0"]);
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
                        radarchart.draw("#radar-chart", data, radarChartOptions);
                    });
                });
            });
        });
    });
});