"use strict";

// Importar y usar jquery cache

(function () {
    var nav_link_as_icon = $("#nav-link-as-icon");
    var header_page = $("#header-page");

    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        if ($(this).data("is-open")) {
            header_page.addClass("header-page-open");
        }else{
            header_page.removeClass("header-page-open");
        }
    });
})();