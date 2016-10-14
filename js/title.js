/**
 * Plugin Name: Projects App
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class ProjectTitle{
    constructor(options) {
        this._el = options.element;
    }

    getElement() {
        return this._el;
    }
}