"use strict";

define(["exports", "jquery"], function (exports, $) {
    // Private Vars
    var _this = {};

    // Private Methods
    function _set(selector) {
        _this[selector] = $(selector);
    }

    /**
     * @param {string} selector
     * @return {object} jquery object
     */
    return function (selector) {
        if (_this[selector] !== undefined) {
            // Already on cache. Return jquery object from cache
            return _this[_selector];
        }
        // Save on cache
        _set(selector);
        // Return jquery object from cache
        return _this[selector];
    };
});