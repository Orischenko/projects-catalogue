/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class Sorter {
    constructor(options) {
        this._el = options.element;
    }

    getElement() {
        return this._el;
    }
}

module.exports = Sorter;