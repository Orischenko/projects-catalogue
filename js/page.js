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

        this._sorter._getElement().addEventListener('sorterChanged', this._onSelectChanged.bind(this));

        this._viewer._getElement().addEventListener('back', this._onBackFromViewer.bind(this));

        this._catalogue._getElement().addEventListener('back', this._onBackFromCatalogue.bind(this));
    }

    _onBackFromViewer() {
        this._viewer._hide();
        this._catalogue._show();
        this._filter._show();
    }

    _onBackFromCatalogue() {
        this._catalogue._hide();
        this._filter._hide();
        this._filter._getField().value = '';
        this._categories._show();
        this._title._getElement().innerHTML = 'Our Categories';
    }

    _onSelectChanged(event) {
        let querySort = event.detail;

        let categoryId = this._sorter._getElement().dataset.categoryId;

        this._getCategoriesById(categoryId, null, querySort);
    }
    _onFilterChanged(event) {
        let queryFilter = event.detail;

        let categoryId = this._filter._getElement().dataset.categoryId;

        this._getCategoriesById(categoryId, queryFilter);
    }

    _onProjectCategorySelected(event) {
        let categoryId = event.detail.id;

        let categoryName = event.detail.name;

        this._getCategoriesById(categoryId);

        this._categories._hide();

        this._title._getElement().innerHTML = `${categoryName}`;

        this._filter._getElement().setAttribute('data-category-id', `${categoryId}`);

        this._sorter._getElement().setAttribute('data-category-id', `${categoryId}`);
    }

    _onProjectSelected(event) {
        let projectId = event.detail.id;

        let projectName = event.detail.name;

        this._getProjectById(projectId);

        this._catalogue._hide();

        this._filter._hide();

        this._title._getElement().innerHTML = `${projectName}`;
    }

    _getCategoriesById(categoryId, queryFilter, querySort) {
        let url = `data/categories/${categoryId}.json`;

        if(queryFilter) {
            url += '?queryFilter=' + queryFilter;
        }

        ajaxService.ajax(url, {
            method: 'GET',

            success: (projects) => {
                if(queryFilter) {
                    projects = projects.filter((project) => {
                        return project.name.toLowerCase().indexOf(queryFilter.toLowerCase()) !== -1;
                    });
                }

                if(querySort === 'name') {
                    projects.sort(this._sortByName.bind(this));

                } else if(querySort === 'age') {
                    projects.sort(this._sortByAge.bind(this));

                } else if(querySort === 'priceLow') {
                    projects.sort(this._sortByPriceLow.bind(this));

                } else if(querySort === 'priceHeight') {
                    projects.sort(this._sortByPriceHeight.bind(this));
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

                this._viewer._loadCarousel();
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

    _sortByName(a,b) {
        let elem1 = a.name,
            elem2 = b.name;

        return elem1 > elem2 ? 1 : -1;
    }

    _sortByAge(a,b) {
        let elem1 = a.age,
            elem2 = b.age;

        return elem1 > elem2 ? 1 : -1;
    }

    _sortByPriceLow(a,b) {
        let elem1 = a.price,
            elem2 = b.price;

        return elem1 > elem2 ? 1 : -1;
    }

    _sortByPriceHeight(a,b) {
        let elem1 = a.price,
            elem2 = b.price;

        return elem1 < elem2 ? 1 : -1;
    }
}

module.exports = ProjectController;