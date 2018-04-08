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

// Importar y usar jquery cache

(function () {
    var nav_link_as_icon = $("#nav-link-as-icon");
    var header_page = $("#header-page");
    var body = $("body");
    var html = $("html");

    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        if ($(this).data("is-open")) {
            header_page.addClass("header-page-open");
            body.addClass("hidden");
            html.addClass("hidden");
        }else{
            header_page.removeClass("header-page-open");
            body.removeClass("hidden");
            html.removeClass("hidden");
        }
    });
})();