/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let BaseComponent = require('./baseComponent');

class Sorter extends BaseComponent{
    constructor(options) {
        super(options.element);

        this._field = this._el.querySelector('[data-element="select"]');

        this._field.addEventListener('change', this._onSelectChange.bind(this));
    }

    _onSelectChange() {
        let customEvent = new CustomEvent("sorterChanged", {
            detail: this._field.value
        });

        this._el.dispatchEvent(customEvent);
    }
}

module.exports = Sorter;