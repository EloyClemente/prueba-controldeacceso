
const path = require('path')

module.exports = {

    entry: './react/index.js',
    output: {
        // path: path.resolve(__dirname, './public/js'),
        path: '/',
        filename: 'react-bundle.js'
    },

    module: {
        rules: [{ 
                test: /\.js$/, 
                exclude: '/node_modules',
                loader: 'babel-loader', 
                query: { presets: ['env', 'react'] },
            }]
    },

    mode: 'production'
}