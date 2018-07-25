const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    // Compiles main Javascript file
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'static'}
        ])
    ],
    watchOptions: {
        poll: 1000
    },
};