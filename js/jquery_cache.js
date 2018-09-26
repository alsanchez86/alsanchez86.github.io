"use strict";

define(["exports", "jquery"], function (exports, $) {
    // Private Vars
    var _this = {};

    // Private Methods
    function _set(selector) {
        _this[selector] = $(selector);
    }

    // Public Methods
    exports.get = function (selector, force) {
        if (_this[selector] !== undefined && force === undefined) {
            return _this[selector];
        }
        _set(selector);
        return _this[selector];
    };
});