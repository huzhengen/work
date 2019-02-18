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
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
        }
    }
}