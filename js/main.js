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