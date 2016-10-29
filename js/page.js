/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let ProjectCategories = require('./project-categories.js');
let ProjectCatalogue = require('./project_catalogue.js');
let ProjectViewer = require('./project-viewer.js');
let Filter = require('./filter.js');
let Sorter = require('./sorter.js');
let ProjectTitle = require('./title.js');

let defaultCategories = require('json!./../data/categories.json');
let defaultProjects = require('json!./../data/projects.json');

class ProjectController{
    constructor(option) {
        this._el = option.element;

        this._categories = new ProjectCategories({
            element: this._el.querySelector('[data-component="projectCategories"]'),
            category: defaultCategories
        });

        this._catalogue = new ProjectCatalogue({
            element: this._el.querySelector('[data-component="projectCatalogue"]'),
            project: defaultProjects
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

        this._categories.getElement().addEventListener('categorySelected', this._onProjectCategorySelected.bind(this));

        this._catalogue.getElement().addEventListener('projectSelected', this._onProjectSelected.bind(this));
    }

    _onProjectCategorySelected(event) {
        let categoryId = event.detail.id;

        let categoryName = event.detail.name;

        let projectDetails = this._getCategoriesById(categoryId);

        this._categories._hide();

        this._catalogue._render(projectDetails);

        this._catalogue._show();

        this._filter._show();

        this._title.getElement().innerHTML = `${categoryName}`;
    }

    _onProjectSelected(event) {
        let projectId = event.detail.id;

        let projectName = event.detail.name;

        let projectDetails = this._getProjectById(projectId);

        this._catalogue._hide();

        this._filter._hide();

        this._viewer._render(projectDetails);

        this._viewer._show();

        this._title.getElement().innerHTML = `${projectName}`;
    }

    _getCategoriesById(projectId) {
        return defaultProjects.filter((project) => {
            return project.category === projectId;
        });
    }

    _getProjectById(projectId) {
        return defaultProjects.filter((project) => {
            return project.id === projectId;
        })[0];
    }

    getElement() {
        return this._el;
    }
}

module.exports = ProjectController;