/*
    Cache read only
*/
// define(["jquery"], function ($) {
//     // Private vars
//     var _this = {};

//     // Public vars
//     var cache = {};

//     // Private Methods
//     function _set(selector) {
//         _this[selector] = $(selector);
//     }

//     // Public Methods
//     cache.get = function (selector, force) {
//         if (_this[selector] !== undefined && force === undefined) {
//             return _this[selector];
//         }
//         _set(selector);
//         return _this[selector];
//     }

//     return cache;
// });
"use strict";

// Importar jquery cache

(function () {
    var nav_link_as_icon = $("#nav-link-as-icon");
    var main_nav = $("#main-nav");


    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        if ($(this).data("is-open")) {
            main_nav.addClass("main-nav-open");
        }else{
            main_nav.removeClass("main-nav-open");
        }
    });
})();