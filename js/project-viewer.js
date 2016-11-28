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

        this._el.addEventListener('click', this._onBackButtonClick.bind(this));
    }

    _render(project) {
        this._el.innerHTML = compiledTemplate({
            project: project
        });
    }

    _defaultsCarouselData() {
        let defaults = {
            slides: this._el.querySelector('[data-element="slides"]'),
            carousel: this._el.querySelector('[data-element="carousel"]'),
            itemWidth: this._el.querySelector('[data-element="slides"]').clientWidth,
            items: Array.prototype.slice.call(this._el.querySelectorAll('li')),
            navigation: this._el.querySelector('[data-element="navigations"]')
        };

        return defaults;
    }

    _setCarouselItemWidth() {
        this._defaultsCarouselData().items.forEach((item) => {
            item.style.width = this._defaultsCarouselData().slides.clientWidth + 'px';
        });

        this._defaultsCarouselData().carousel.style.width = this._defaultsCarouselData().items.length * this._defaultsCarouselData().itemWidth + 'px';
    }

    _setNavigation() {
        let positionX = 0;

        this._defaultsCarouselData().navigation.addEventListener('click', (event) => {
            if(event.target.closest('[data-element="navNext"]')) {
                positionX = Math.max(positionX - ((this._defaultsCarouselData().itemWidth) * 1), -(this._defaultsCarouselData().itemWidth) * (this._defaultsCarouselData().items.length - 1));

                this._defaultsCarouselData().carousel.style.marginLeft = positionX + 'px';

            } else if(event.target.closest('[data-element="navPrev"]')) {
                positionX = Math.min(positionX + (this._defaultsCarouselData().itemWidth + 0) * 1, 0);

                this._defaultsCarouselData().carousel.style.marginLeft = positionX + 'px';
            }
        });
    }

    _loadCarousel() {
        this._setCarouselItemWidth();

        this._setNavigation();
    }

    _onBackButtonClick(event) {
        if(!event.target.closest('[data-element="backButton"]')) return;

        let customEvent = new CustomEvent('back');

        this._el.dispatchEvent(customEvent);
    }
}

module.exports = ProjectViewer;