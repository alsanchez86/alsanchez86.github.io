define(["module", "jquery", "jquery_cache"], function (module, $, _$) {
    /**
     *
     */
    module.exports.page_loading = function (is_loading) {
        var main_loader = _$("#main-loader-container");

        if (!is_loading) {
            main_loader.animateCss("fadeOut", function () {
                main_loader.remove();
                __page_overflow_hidden(false);
            });
        }
    }

    /**
     *
     */
    module.exports.set_active_menu_link = function () {
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

    /**
     *
     */
    module.exports.mobile_menu_xs = function () {
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

    /**
     *
     * @param {*} is_hidden
     */
    function __page_overflow_hidden(is_hidden) {
        var _hidden = is_hidden ? "hidden" : "visible";

        _$("body").css({
            overflow: _hidden
        });
        _$("html").css({
            overflow: _hidden
        });
    }
});