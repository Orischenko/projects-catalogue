/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class Filter{
    constructor(options) {
        this._el = options.element;

        this._field = this._el.querySelector('[data-element="field"]');

        this._field.addEventListener('input', this._onFilterChange.bind(this));
    }

    _onFilterChange() {
        let customEvent = new CustomEvent('filterChanged', {
            detail: this._field.value
        });

        this._el.dispatchEvent(customEvent);
    }

    _getField() {
        return this._field;
    }

    _show() {
        this._el.parentNode.classList.remove('js-hidden');
    }

    _hide() {
        this._el.parentNode.classList.add('js-hidden');
    }

    _getElement() {
        return this._el;
    }
}

module.exports = Filter;