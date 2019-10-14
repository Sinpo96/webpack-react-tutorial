const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smp = new speedMeasureWebpackPlugin({ outputFormat: 'humanVerbose' });

const config = smp.wrap({
    devtool: 'eval-source-map',
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
    },
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
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 8000,
        hot: true,
    },
});

module.exports = config;