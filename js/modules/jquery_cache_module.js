"use strict";

define(["exports", "jquery"], function (exports, $) {
    // Private Vars
    var _this = {};

    /**
     * @param {string} selector
     * @param {object} element
     * @return {object} jquery object
     */
    return function (selector, element) {
        if (_this[selector] !== undefined) {
            // Already on cache. Return jquery object from cache
            return _this[selector];
        }
        // Save on cache
        _set(selector, element);
        // Return jquery object from cache
        return _this[selector];
    };

    function _set(selector, element) {
        var jObj = $(selector);
        var exists = (jObj.length > 0);
        var forceCreate = (element !== undefined && (typeof element === "object"));

        if (exists) {
            _this[selector] = $(selector);
        } else if (forceCreate) {
            _this[selector] = $(element);
        }
    }
});