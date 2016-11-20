/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class baseComponent{
    constructor(element) {
        this._el = element;
    }

    _show() {
        this._el.classList.remove('js-hidden');
    }

    _hide() {
        this._el.classList.add('js-hidden');
    }

    _getElement() {
        return this._el;
    }
}

module.exports = baseComponent;