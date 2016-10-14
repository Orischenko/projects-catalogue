/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let defaultCategories = [
    {
        "age": 0,
        "id": "commercial-projects",
        "imageUrl": "img/projects/yahoo's-data-center.jpg",
        "name": "Commercial Projects"
    },
    {
        "age": 1,
        "id": "educational-projects",
        "imageUrl": "img/projects/chicagoland-recreational-park.jpg",
        "name": "Educational Projects"
    },
    {
        "age": 2,
        "id": "navy-shipyard-norfolk-va",
        "imageUrl": "img/projects/navy-shipyard-norfolk-va.jpg",
        "name": "Navy shipyard, Norfolk, VA"
    },
    {
        "age": 3,
        "id": "government-projects",
        "imageUrl": "img/projects/hunting-mansion-in-kentucky.jpg",
        "name": "Government Projects"
    },
    {
        "age": 4,
        "id": "healthcare-projects",
        "imageUrl": "img/projects/a-beach-house-in-orlando-florida.jpg",
        "name": "Healthcare Projects"
    },
    {
        "age": 5,
        "id": "industrial-projects",
        "imageUrl": "img/projects/2-storey-apartment-in-atlanta.jpg",
        "name": "Industrial Projects"
    }
];
let defaultProjects = [
    {
        "age": 0,
        "id": "yahoo's-data-center",
        "imageUrl": "img/projects/yahoo's-data-center.jpg",
        "name": "Yahoo's Data Center",
        "snippet": "While we’ve had a great deal of experience in building IT related buildings, office and data centers before, this project challenged us to the core.",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "5380",
        "category": "commercial-projects"
    },
    {
        "age": 1,
        "id": "chicagoland-recreational-park",
        "imageUrl": "img/projects/chicagoland-recreational-park.jpg",
        "name": "Chicagoland Recreational Park",
        "snippet": "One big advantage that Chicago has, is the huge size of its metropolitan area, also known as the “Chicagoland”. Having a population close to 12 million people, this area expands rapidly, and needs diligence in managing…",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "8000",
        "category": "educational-projects"
    },
    {
        "age": 2,
        "id": "navy-shipyard-norfolk-va",
        "imageUrl": "img/projects/navy-shipyard-norfolk-va.jpg",
        "name": "Navy shipyard, Norfolk, VA",
        "snippet": "As we initially took this project onboard, we were ready for all kinds of issues to pop up and prevent us from completing it on time",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "7050",
        "category": "navy-shipyard-norfolk-va"
    },
    {
        "age": 3,
        "id": "hunting-mansion-in-kentucky",
        "imageUrl": "img/projects/hunting-mansion-in-kentucky.jpg",
        "name": "Hunting mansion in Kentucky",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "4999",
        "category": "government-projects"
    },
    {
        "age": 4,
        "id": "a-beach-house-in-orlando-florida",
        "imageUrl": "img/projects/a-beach-house-in-orlando-florida.jpg",
        "name": "A beach house in Orlando. Florida",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "6180",
        "category": "healthcare-projects"
    },
    {
        "age": 5,
        "id": "2-storey-apartment-in-atlanta",
        "imageUrl": "img/projects/2-storey-apartment-in-atlanta.jpg",
        "name": "2-storey apartment in Atlanta",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "3400",
        "category": "industrial-projects"
    },
    {
        "age": 6,
        "id": "erie-lakeside-house-mi",
        "imageUrl": "img/projects/erie-lakeside-house-mi.jpg",
        "name": "Erie Lakeside house, MI",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "4550",
        "category": "commercial-projects"
    },
    {
        "age": 7,
        "id": "art-decor-styled-dining-hall",
        "imageUrl": "img/projects/art-decor-styled-dining-hall.jpg",
        "name": "Art decor styled dining hall",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "5650",
        "category": "educational-projects"
    },
    {
        "age": 8,
        "id": "italian-inspired-living-room",
        "imageUrl": "img/projects/italian-inspired-living-room.jpg",
        "name": "Italian inspired living room",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "9785",
        "category": "navy-shipyard-norfolk-va"
    },
    {
        "age": 9,
        "id": "oyster-grey-mediterranean-styled-kitchen",
        "imageUrl": "img/projects/oyster-grey-mediterranean-styled-kitchen.jpg",
        "name": "Oyster-grey Mediterranean styled kitchen",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "3780",
        "category": "government-projects"
    },
    {
        "age": 10,
        "id": "sicily-inspired-sunny-white-bedroom",
        "imageUrl": "img/projects/sicily-inspired-sunny-white-bedroom.jpg",
        "name": "Sicily inspired, sunny white bedroom",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "8750",
        "category": "healthcare-projects"
    },
    {
        "age": 11,
        "id": "white-welsh-style-for-a-living-room",
        "imageUrl": "img/projects/white-welsh-style-for-a-living-room.jpg",
        "name": "White Welsh style for a living room",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "6350",
        "category": "industrial-projects"
    },
    {
        "age": 12,
        "id": "scottish-blue-and-yellow-dining-hall",
        "imageUrl": "img/projects/scottish-blue-and-yellow-dining-hall.jpg",
        "name": "Scottish, blue and yellow dining hall",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "9500",
        "category": "commercial-projects"
    },
    {
        "age": 13,
        "id": "a-new-townhouse-in-the-appalachian-mountains",
        "imageUrl": "img/projects/a-new-townhouse-in-the-appalachian-mountains.jpg",
        "name": "A new townhouse in the Appalachian mountains",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "7640",
        "category": "educational-projects"
    },
    {
        "age": 14,
        "id": "a-beach-house-at-baja-california-peninsula",
        "imageUrl": "img/projects/a-beach-house-at-baja-california-peninsula.jpg",
        "name": "A beach house at Baja California peninsula",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "8700",
        "category": "navy-shipyard-norfolk-va"
    },
    {
        "age": 15,
        "id": "small-cottage-in-upper-new-york",
        "imageUrl": "img/projects/small-cottage-in-upper-new-york.jpg",
        "name": "Small cottage in Upper New York",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "8650",
        "category": "government-projects"
    },
    {
        "age": 16,
        "id": "albuquerque-city-hospital",
        "imageUrl": "img/projects/albuquerque-city-hospital.jpg",
        "name": "Albuquerque City Hospital",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "4900",
        "category": "healthcare-projects"
    },
    {
        "age": 17,
        "id": "new-townhouse-in-st-louis-missouri",
        "imageUrl": "img/projects/new-townhouse-in-st-louis-missouri.jpg",
        "name": "New townhouse in St. Louis, Missouri",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "3950",
        "category": "industrial-projects"
    },
    {
        "age": 18,
        "id": "3-storey-apartment-in-cleveland-ohio",
        "imageUrl": "img/projects/3-storey-apartment-in-cleveland-ohio.jpg",
        "name": "3-storey apartment in Cleveland, Ohio",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "9350",
        "category": "commercial-projects"
    },
    {
        "age": 19,
        "id": "a-modernist-palladian-villa",
        "imageUrl": "img/projects/a-modernist-palladian-villa.jpg",
        "name": "A modernist Palladian villa",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "7890",
        "category": "educational-projects"
    },
    {
        "age": 20,
        "id": "ave-balboa-office",
        "imageUrl": "img/projects/ave-balboa-office.jpg",
        "name": "Ave Balboa Office",
        "snippet": "Enjoy a refreshing time amidst the monumental Appalachian mountains, in a townhouse that will host the most luxurious holiday for you and your family!",
        "description": "This home has been updated and is neat and clean. Open concept floor plan. Large deck perfect for entertaining. Easy to get to. 50 ft of frontage with a concrete seawall to ensure you maintain your property over the years. Large living areas for entertaining year round. If you have wanted to live on the lake, don't let this gem pass you by without taking a look. All measurements are approximate, BATVAI. Bring your offers, and start your summer right. Immediate occupancy so you can move right in. Motivated seller.",
        "price": "4900",
        "category": "navy-shipyard-norfolk-va"
    }
];

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