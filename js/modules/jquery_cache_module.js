"use strict";

define(["exports", "jquery"], function (exports, $) {
    // Private Vars
    var _this = {};

    // Private Methods
    function _set(selector) {
        _this[selector] = $(selector);
    }

    function _getSelector(selector) {
        var _selector = "";
        // var _selector = typeof selector === "string" ? selector : ;
        switch (typeof selector) {
            case "undefined":
                break;

            case "string":
                _selector = selector;
                break;

            case "object":
                _selector = ("#" + selector.id || "." + selector.class);
                break;

            default:
                break;
        }
        return _selector;
    }

    // Public Methods
    return function (selector, force) {
        var _selector = _getSelector(selector);

        if (_this[_selector] !== undefined && force === undefined) {
            return _this[_selector];
        }
        _set(_selector);
        return _this[_selector];
    };
});