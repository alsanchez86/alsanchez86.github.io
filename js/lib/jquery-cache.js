/*
    Cache read only
*/
define(["jquery"], function ($) {
    // Private vars
    var _this = {};

    // Public vars
    var cache = {};

    // Private Methods
    function _set(selector) {
        _this[selector] = $(selector);
    }

    // Public Methods
    cache.get = function (selector, force) {
        if (_this[selector] !== undefined && force === undefined) {
            return _this[selector];
        }
        _set(selector);
        return _this[selector];
    }

    return cache;
});