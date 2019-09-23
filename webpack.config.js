const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8000,
        hot: true,
    },
}