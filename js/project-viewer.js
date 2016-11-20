/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let BaseComponent = require('./baseComponent'),
    compiledTemplate = require('./../templates/project-viewer-template.hbs');

class ProjectViewer extends BaseComponent{
    constructor(options) {
        super(options.element);
    }

    _render(project) {
        this._el.innerHTML = compiledTemplate({
            project: project
        });
    }
}

module.exports = ProjectViewer;