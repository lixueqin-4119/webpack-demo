const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,//把base之前的抄过来
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: { //直接覆盖
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }
};