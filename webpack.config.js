const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: "sourcemap.js.map"
    },
    devtool: 'eval-source-map'

};