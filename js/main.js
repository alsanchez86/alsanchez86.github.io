"use strict";

// Importar y usar jquery cache

(function () {
    var body = $("body");
    var html = $("html");
    var nav_link_as_icon = $("#nav-link-as-icon");
    var header_page = $("#header-page");

    function _page_hidden(is_hidden) {
        if (is_hidden) {
            body.addClass("hidden");
            html.addClass("hidden");
        } else {
            body.removeClass("hidden");
            html.removeClass("hidden");
        }
    }

    function _page_loading(is_loading) {
        var content = $("#content");
        var spinner = $("#spinner");

        _page_hidden(is_loading);

        if (is_loading) {
            content.addClass("d-none");
        } else {
            content.removeClass("d-none");
            spinner.addClass("d-none");
        }
    }

    nav_link_as_icon.bind("click", function () {
        $(this).data("is-open", !$(this).data("is-open"));

        _page_hidden($(this).data("is-open"));

        if ($(this).data("is-open")) {
            header_page.addClass("header-page-open");
        } else {
            header_page.removeClass("header-page-open");
        }
    });

    _page_loading(true);

    setTimeout(function () {
        _page_loading(false);
    }, 2000);
})();