/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let ajaxService = require('./ajaxService'),
    ProjectCategories = require('./project-categories'),
    ProjectCatalogue = require('./project_catalogue'),
    ProjectViewer = require('./project-viewer'),
    Filter = require('./filter'),
    Sorter = require('./sorter'),
    ProjectTitle = require('./title');

class ProjectController{
    constructor(option) {
        this._el = option.element;

        this._categories = new ProjectCategories({
            element: this._el.querySelector('[data-component="projectCategories"]')
        });

        this._loadCategories();

        this._catalogue = new ProjectCatalogue({
            element: this._el.querySelector('[data-component="projectCatalogue"]')
        });

        this._viewer = new ProjectViewer({
            element: this._el.querySelector('[data-component="projectViewer"]')
        });

        this._viewer._hide();

        this._filter = new Filter({
            element: this._el.querySelector('[data-component="filter"]')
        });

        this._sorter = new Sorter({
            element: this._el.querySelector('[data-component="sorter"]')
        });

        this._title = new ProjectTitle({
            element: this._el.querySelector('[data-element="project-title"]')
        });

        this._filter._hide();

        this._categories._getElement().addEventListener('categorySelected', this._onProjectCategorySelected.bind(this));

        this._catalogue._getElement().addEventListener('projectSelected', this._onProjectSelected.bind(this));

        this._filter._getElement().addEventListener('filterChanged', this._onFilterChanged.bind(this));
    }

    _onFilterChanged(event) {
        let query = event.detail;

        let categoryId = this._filter._getElement().dataset.categoryId;

        this._getCategoriesById(categoryId, query);
    }

    _onProjectCategorySelected(event) {
        let categoryId = event.detail.id;

        let categoryName = event.detail.name;

        this._getCategoriesById(categoryId);

        this._categories._hide();

        this._title._getElement().innerHTML = `${categoryName}`;

        this._filter._getElement().setAttribute('data-category-id', `${categoryId}`);
    }

    _onProjectSelected(event) {
        let projectId = event.detail.id;

        let projectName = event.detail.name;

        this._getProjectById(projectId);

        this._catalogue._hide();

        this._filter._hide();

        this._title._getElement().innerHTML = `${projectName}`;
    }

    _getCategoriesById(categoryId, query) {
        let url = `data/categories/${categoryId}.json`;

        if(query) {
            url += '?query=' + query;
        }

        ajaxService.ajax(url, {
            method: 'GET',

            success: (projects) => {
                //Todo: server side code
                if(query) {
                    projects = projects.filter((project) => {
                        return project.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
                    });
                }

                this._catalogue._render(projects);

                this._catalogue._show();

                this._filter._show();
            },

            error: (error) => {
                console.error(error);
            }
        });
    }

    _getProjectById(projectId) {
        ajaxService.ajax(`data/single/${projectId}.json`, {
            method: 'GET',

            success: (project) => {
                this._viewer._render(project);

                this._viewer._show();
            },

            error: (error) => {
                console.error(error);
            }
        });
    }

    _loadCategories() {
        ajaxService.ajax('data/categories.json', {
            method: 'GET',

            success: (categories) => {
                this._categories._render(categories);
            },

            error: (error) => {
                console.error(error);
            }
        });
    }
}

module.exports = ProjectController;