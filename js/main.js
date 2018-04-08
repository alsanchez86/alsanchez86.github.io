"use strict";

// Importar y usar jquery cache

(function () {
    var nav_link_as_icon = $("#nav-link-as-icon");
    var header_page = $("#header-page");
    var body = $("body");

    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        if ($(this).data("is-open")) {
            header_page.addClass("header-page-open");
            body.addClass("hidden");
        }else{
            header_page.removeClass("header-page-open");
            body.removeClass("hidden");
        }
    });
})();