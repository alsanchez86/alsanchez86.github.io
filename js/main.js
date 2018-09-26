"use strict";

define("main", function (require, exports, module) {
    require(["require-config"], function () {
        require(["jquery", "popper"], function ($, Tether) {
            // window.Tether = Tether; // hack for bootstrap

            require(["bootstrap"], function () {
                // jquery document ready
                // domReady requirejs plugin is not neccesary here
                $(function () {
                    // Add in a JS independent
                    var body = $("body");
                    var html = $("html");
                    var nav_link_as_icon = $("#nav-link-menu-icon");
                    var header_page = $("#header-page");

                    function _page_overflow_hidden(is_hidden) {
                        if (is_hidden) {
                            body.css({
                                overflow: "hidden"
                            });
                            html.css({
                                overflow: "hidden"
                            });
                        } else {
                            body.css({
                                overflow: "visible"
                            });
                            html.css({
                                overflow: "visible"
                            });
                        }
                    }

                    function _page_loading(is_loading) {
                        // var content = $("#content");
                        var main_loader = $("#main-loader-container");

                        if (!is_loading) {
                            // content.removeClass("d-none");
                            // main_loader.addClass("fadeOut animated");
                            main_loader.animateCss("fadeOut", function () {
                                main_loader.remove();
                                _page_overflow_hidden(false);
                            });
                        }
                    }

                    nav_link_as_icon.bind("click", function () {
                        $(this).data("is-open", !$(this).data("is-open"));

                        _page_overflow_hidden($(this).data("is-open"));

                        if ($(this).data("is-open")) {
                            header_page.addClass("header-page-open").animateCss("fadeInDown faster");
                        } else {
                            header_page.removeClass("header-page-open");
                        }
                    });

                    setTimeout(function () {
                        _page_loading(false);
                    }, 1000);

                    // Set active menu link
                    var pathname = window.location.pathname;
                    var path_split = pathname.split("/");
                    var path_id = path_split && path_split[1];

                    $("#main-nav .nav-link").removeClass("active");

                    if (path_id !== "") {
                        $("#" + path_id).addClass("active");
                    } else {
                        $("#inicio").addClass("active");
                    }
                });
            });
        });
    });
});