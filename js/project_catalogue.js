/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let BaseComponent = require('./baseComponent'),
    compiledTemplate = require('./../templates/project-catalogue-template.hbs');

class ProjectCatalogue extends BaseComponent{
    constructor(options) {
        super(options.element);

        this._el.addEventListener('click', this._onProjectSelected.bind(this));

        this._el.addEventListener('click', this._onBackButtonClick.bind(this));
    }

    _onProjectSelected(event) {
        if(!event.target.closest('[data-element="projectlink"]')) return;

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

    _render(projects) {
        this._el.innerHTML = compiledTemplate({
            projects: projects
        });
    }

    _onBackButtonClick(event) {
        if(!event.target.closest('[data-element="backButton"]')) return;

        let customEvent = new CustomEvent('back');

        this._el.dispatchEvent(customEvent);
    }
}
module.exports = ProjectCatalogue;