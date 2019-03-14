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
                            
                            {
                                            "label": "When's it going to be done?",
                                            "value": 8,
                                            "color": "#ed143d"
                                        }
                        */
                            var content = [new Data("fefef", 10, "blue")];
                            var pie = new d3pie("piechart", {
                                "size": {
                                    "canvasHeight": 500,
                                    "canvasWidth": _$("#main-content").width(),
                                    "pieOuterRadius": "88%"
                                },
                                "data": {
                                    "content": content,
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

                            function Data(label, value, color){
                                this.label = label || "No label";
                                this.value = value || 1;
                                this.color = color || "crimson"
                            }
                        });
                    });
                });
            });
        });
    });
});