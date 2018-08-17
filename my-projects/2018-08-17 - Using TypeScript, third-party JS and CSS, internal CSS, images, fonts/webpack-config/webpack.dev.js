// Import Helpers library with 'root' function, which let's us go up one level in current directory.
const helpers = require('./helpers');

// Webpack configuration
module.exports = {
    // Entry point for Webpack
    entry: {
        // Reference file, which contains all AngularJS files.
        // ./ because Webpack is executed from the root.
        // We can use array here to include third party libraries.
        'main-app': './app/index.ts'
    },
    
    resolve: {
        // Without this, imports from index.ts like: import "./scripts/calc" won't work.
        // So, when resolving "import ...", look for .ts files.
        extensions: ['.ts']
    },
    
    // Configure output
    output: {
        // Webpack will create "dist" folder at root with "dev" folder in it.
        // All bundles will go there. The path is relative to current config file, therefore we're using helpers.root.
        path: helpers.root('dist/dev'),
        // Name files according to the name of their bundle(specified in 'entry' property).
        filename: '[name].bundle.js',
        // chunkFilename: "[id].chunk.js",
        // Since we're not using Webpack Dev Server, this setting is not very important
        // TODO: Configure Webpack Development Server
        // publicPath: '/',
    },
    
    // Set up Webpack loaders.
    module: {
        rules: [
            {
                // Regex for TypeScript files
                test: /\.ts$/,
                // 'awesome-typescript-loader' - translates TypeScript to JS
                loaders: ['awesome-typescript-loader']
            }
        ]
    },
    
    // Set plugins
    plugins: [
    ]
};