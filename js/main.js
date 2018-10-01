"use strict";

define(function () {
    require(["require-config"], function () {
        require(["jquery"], function ($) {
            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    require(["init_module"], function () {
                        // llamar aqui al modulo extra definido en el index.json de la plantilla si existe
                    });
                });
            });
        });
    });
});