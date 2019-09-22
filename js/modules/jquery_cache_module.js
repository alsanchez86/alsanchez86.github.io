"use strict";

define(["exports", "jquery"], function (exports, $) {
    // Private Vars
    var _cache = {};

    /**
     * @param {string} selector
     * @param {object} element
     * @return {object} jquery object
     */
    return function (selector, element) {
        if (_cache[selector] !== undefined) {
            // Already on cache. Return jquery object from cache
            return _cache[selector];
        }
        // Save on cache
        _set(selector, element);
        // Return jquery object from cache
        return _cache[selector];
    };

    function _set(selector, element) {
        var jObj = $(selector);
        var exists = (jObj.length > 0);
        var forceCreate = (element !== undefined && (typeof element === "object"));

        if (exists) {
            _cache[selector] = $(selector);
        } else if (forceCreate) {
            _cache[selector] = $(element);
        }
    }
});