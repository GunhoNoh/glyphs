const path = require('path')

module.exports = {
    entry: {
        background: './src/background.js',
        popup: './src/popup.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /src/
            },
            {
                test: /\.less$/,
                include: /src/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}
