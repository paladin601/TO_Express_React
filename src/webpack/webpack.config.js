const path = require('path');

module.exports = {
    entry: {
        main: './src/client/jsx/index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./src/client', 'build/js'),
    },
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
            }
        ]
    }
}; 