const path = require('path');

module.exports = {
    // Compiles main Javascript file
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        poll: 1000
    },
};