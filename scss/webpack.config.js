const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        index: './src/index.js',
        about: './src/about.js'
    },
    output: {
        // filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}