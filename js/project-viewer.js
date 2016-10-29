/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let compiledTemplate = require('./../templates/project-viewer-template.hbs');

class ProjectViewer{
    constructor(options) {
        this._el = options.element;
    }

    _show() {
        this._el.classList.remove('js-hidden');
    }

    _hide() {
        this._el.classList.add('js-hidden');
    }

    _render(project) {
        this._el.innerHTML = compiledTemplate({
            project: project
        });
    }

    getElement() {
        return this._el;
    }
}

module.exports = ProjectViewer;