/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class Filter {
    constructor(options) {
        this._el = options.element;
    }

    _show() {
        this._el.parentNode.classList.remove('js-hidden');
    }

    _hide() {
        this._el.parentNode.classList.add('js-hidden');
    }

    getElement() {
        return this._el;
    }
}

module.exports = Filter;