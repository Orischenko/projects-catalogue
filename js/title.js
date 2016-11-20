/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let BaseComponent = require('./baseComponent');

class ProjectTitle extends BaseComponent{
    constructor(options) {
        super(options.element);
    }
}

module.exports = ProjectTitle;