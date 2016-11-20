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
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};