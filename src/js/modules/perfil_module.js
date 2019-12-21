"use strict";

define(["module", "jquery_cache_module", "glide", "github_calendar", "browser_detect"], function (module, _$, Glide, GitHubCalendar, browserDetect) {
    /**
     *
     * @return {void}
     */
    module.exports.run = function () {
        var browser = browserDetect();
        ghCalendar(browser.name !== "ie");
        animateProgressAll();
        initSliders();
    }

    /**
     *
     * @return {void}
     */
    function animateProgressAll() {
        var animateClass = "skills-item-animated";
        var $wrappers = _$(".skills-item");

        if ($wrappers) {
            $wrappers
                .each(function (index, domElem) {
                    _$("#" + domElem.id).addClass(animateClass);
                });
        }
    }

    /**
     *
     * @return {void}
     */
    function initSliders() {
        [
            {
                id: "expertus",
                perView: 2
            },
            {
                id: "innofis",
                perView: 2
            },
            {
                id: "ximdex",
                perView: 2
            },
            {
                id: "existo",
                perView: 2
            },
            {
                id: "freelance",
                perView: 1
            }
        ]
        .map(function (slider) {
            return new Glide("#glide-slider-" + slider.id, {
                type: "carousel",
                perView: 2,
                breakpoints: {
                    576: {
                        perView: 1
                    },
                    768: {
                        perView: 1
                    },
                    992: {
                        perView: slider.perView
                    },
                    1200: {
                        perView: slider.perView
                    }
                },
                autoplay: 5000,
                hoverpause: true
            });
        })
        .map(function (carousel) {
            carousel
                .on(["build.after"], function () {
                    _$(carousel.selector)
                        .removeClass("invisible")
                        .addClass("visible");
                })
                .mount();
        })
    }

    function ghCalendar(show){
        var ghUser = "alsanchez86";
        var container = ".github-calendar";
        var $container = _$(container);

        if (show){
            GitHubCalendar(container, ghUser, {
                responsive: true,
                summary_text: "",
                global_stats: false
            })
            .then(function (data){
                $container.removeClass("with-loader");
            });
        }else{
            $container.addClass("d-none");
        }
    }
});