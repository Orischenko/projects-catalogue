/**
 * Plugin Name: Projects Catalogue
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

module.exports = {
    ajax(url, options) {
        let xhr = new XMLHttpRequest();

        xhr.open(options.method || 'GET', url, true);

        xhr.onload = () => {
            if (xhr.status != 200) {
                options.error(xhr.status + ': ' + xhr.statusText); // 404: Not Found
            } else {
                let project = JSON.parse(xhr.responseText);

                options.success(project);
            }
        };

        xhr.onerror = () => {
            options.error( xhr.status + ': ' + xhr.statusText ); // 404: Not Found
        };

        xhr.send();
    }
};