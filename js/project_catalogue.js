/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class ProjectCatalogue {
    constructor(options) {
        let template = document.getElementById('project-catalogue-template').innerHTML;

        this._compiledTemplate = _.template(template);

        this._el = options.element;

        this._el.addEventListener('click', this._onProjectSelected.bind(this));
    }

    _onProjectSelected(event) {
        if(!event.target.closest('[data-element="projectlink"]')) {
            return;
        }

        event.preventDefault();

        let projectContainer = event.target.closest('[data-element="projectContainer"]');

        let customEvent = new CustomEvent('projectSelected', {
            detail: {
                id: projectContainer.dataset.projectId,
                name: projectContainer.dataset.projectName
            }
        });

        this._el.dispatchEvent(customEvent);
    }

    _show() {
        this._el.classList.remove('js-hidden');
    }

    _hide() {
        this._el.classList.add('js-hidden');
    }

    _render(projects) {
        this._el.innerHTML = this._compiledTemplate({
            projects: projects
        });
    }

    getElement() {
        return this._el;
    }
}