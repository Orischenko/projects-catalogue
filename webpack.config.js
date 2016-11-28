/**
 * Plugin Name: Projects App
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

module.exports = {
    context: __dirname + "/js",
    entry: __dirname + "/js/app.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    //watch: true,
    devtool: 'source-map',

    module: {
        loaders: [
            //handlebars loader
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },

            //babel loader
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};