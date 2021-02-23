const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'lulu-卢勤',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
        {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        ],
    },
};






