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

console.log("main module");

// define(function (require, exports, module) {
//     require(["require-config"], function () {
//         require(["jquery", "popper"], function ($, popper) {
//             window.Popper = popper; // hack for bootstrap

//             debugger;

//             require(["bootstrap"], function () {
//                 debugger;

//                 $(function () {
//                     // jquery document ready
//                     // domReady requirejs plugin is not neccesary here
//                 });
//             });
//         });
//     });
// });