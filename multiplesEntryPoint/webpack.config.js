const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'index.js'),
        precios: path.resolve(__dirname, 'index.js'),
        contacto: path.resolve(__dirname, 'index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}