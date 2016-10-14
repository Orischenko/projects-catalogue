/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class ProjectViewer{
    constructor(options) {
        let template = document.getElementById('project-viewer-template').innerHTML;

        this._compiledTemplate = _.template(template);

        this._el = options.element;
    }

    _show() {
        this._el.classList.remove('js-hidden');
    }

    _hide() {
        this._el.classList.add('js-hidden');
    }

    _render(project) {
        this._el.innerHTML = this._compiledTemplate({
            project: project
        });
    }

    getElement() {
        return this._el;
    }
}