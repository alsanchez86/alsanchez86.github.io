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

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});

(function () {
    var body = $("body");
    var html = $("html");
    var nav_link_as_icon = $("#nav-link-as-times");
    var header_page = $("#header-page");

    function _page_overflow_hidden(is_hidden) {
        if (is_hidden) {
            body.css({overflow: "hidden"});
            html.css({overflow: "hidden"});
        } else {
            body.css({overflow: "visible"});
            html.css({overflow: "visible"});
        }
    }

    function _page_loading(is_loading) {
        // var content = $("#content");
        var main_loader = $("#main-loader-container");

        if (!is_loading) {
            // content.removeClass("d-none");
            // main_loader.addClass("fadeOut animated");
            main_loader.animateCss('fadeOut', function () {
                main_loader.remove();
                _page_overflow_hidden(false);
            });
        }
    }

    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        _page_overflow_hidden($(this).data("is-open"));

        if ($(this).data("is-open")) {
            header_page.addClass("header-page-open");
        } else {
            header_page.removeClass("header-page-open");
        }
    });

    setTimeout(function () {
        _page_loading(false);
    }, 1000);
})();