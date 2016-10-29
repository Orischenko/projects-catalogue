/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let ProjectController = require('./page.js');

let page = new ProjectController({
    element: document.getElementById('project-catalogue-page')
});