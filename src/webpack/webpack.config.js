const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/client/jsx/index.jsx'
    },
    output: {
        path: path.resolve('./src/client', 'build'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/client/template.html',
            //hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
        ]
    }
}; 