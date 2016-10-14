/**
 * Plugin Name: Projects App
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class ProjectCategories{
    constructor(options) {
        let template = document.getElementById('project-category-template').innerHTML;

        this._compiledTemplate = _.template(template);

        this._el = options.element;

        this._render(options.category);

        this._el.addEventListener('click', this._onProjectCategoryLinkClick.bind(this));
    }

    _onProjectCategoryLinkClick(event) {
        if(!event.target.closest('[data-element="projectCategoryLink"]')) {
            return;
        }

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
        this._el.innerHTML = this._compiledTemplate({
            category: category
        });
    }

    _show() {
        this._el.classList.remove('js-hidden');
    }

    _hide() {
        this._el.classList.add('js-hidden');
    }

    getElement() {
        return this._el;
    }
}