/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let BaseComponent = require('./baseComponent'),
    compiledTemplate = require('./../templates/project-category-template.hbs');

class ProjectCategories extends BaseComponent{
    constructor(options) {
        super(options.element);

        this._el.addEventListener('click', this._onProjectCategoryLinkClick.bind(this));
    }

    _onProjectCategoryLinkClick(event) {
        if(!event.target.closest('[data-element="projectCategoryLink"]')) return;

        event.preventDefault();

        let projectCategoryContainer = event.target.closest('[data-element="projectCategoryContainer"]');

        let customEvent = new CustomEvent('categorySelected', {
            detail: {
                id: projectCategoryContainer.dataset.projectCategoryId,
                name: projectCategoryContainer.dataset.projectCategoryName
            }
        });

        this._el.dispatchEvent(customEvent);
    }

    _render(category) {
        this._el.innerHTML = compiledTemplate({
            category: category
        });
    }
}

module.exports = ProjectCategories;