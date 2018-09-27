define(["jquery", "jquery_cache"], function ($, _$) {
    function __page_overflow_hidden(is_hidden) {
        var body = _$("body");
        var html = _$("html");
        var hidden = is_hidden ? "hidden" : "visible";

        body.css({
            overflow: hidden
        });
        html.css({
            overflow: hidden
        });
    }

    function __page_loading(is_loading) {
        var main_loader = _$("#main-loader-container");

        if (!is_loading) {
            main_loader.animateCss("fadeOut", function () {
                main_loader.remove();
                __page_overflow_hidden(false);
            });
        }
    }

    function __set_active_menu_link() {
        var pathname = window.location.pathname;
        var path_split = pathname.split("/");
        var path_id = path_split && path_split[1];

        _$("#main-nav .nav-link").removeClass("active");

        if (path_id !== "") {
            _$("#" + path_id).addClass("active");
        } else {
            _$("#inicio").addClass("active");
        }
    }

    function __mobile_menu_xs() {
        var nav_link_as_icon = _$("#nav-link-menu-icon");
        var header_page = _$("#header-page");

        nav_link_as_icon.bind("click", function () {
            $(this).data("is-open", !$(this).data("is-open"));

            __page_overflow_hidden($(this).data("is-open"));

            if ($(this).data("is-open")) {
                header_page.addClass("header-page-open").animateCss("fadeInDown faster");
            } else {
                header_page.removeClass("header-page-open");
            }
        });
    }

    // INIT MODULE
    __set_active_menu_link();
    __mobile_menu_xs();
    __page_loading(false);
});