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
                            jQuery
                            AngularJS
                            Angular
                            Riot.js
                            CoffeeScript
                            TypeScript
                            Bootstrap
                            Foundation
                            HTML5
                            CSS
                            Less
                            Sass
                            Grunt
                            Gulp
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
                            var content = [
                                new Data("jQuery", 10, ""),
                                new Data("AngularJS", 10, ""),
                                new Data("Angular", 10, ""),
                                new Data("Riot.js", 10, ""),
                                new Data("CoffeeScript", 10, ""),
                                new Data("TypeScript", 10, ""),
                                new Data("Bootstrap", 10, ""),
                                new Data("Foundation", 10, ""),
                                new Data("HTML5", 10, ""),
                                new Data("CSS", 10, ""),
                                new Data("Less", 10, ""),
                                new Data("Sass", 10, ""),
                                new Data("Grunt", 10, ""),
                                new Data("Gulp", 10, ""),
                            ];
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