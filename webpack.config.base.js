const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const loader = require('sass-loader');

module.exports = {
    entry: './src/index.js',//你的入口文件
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '前端框架 -webpack',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            {//上传图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ["file-loader"],
            },
            { //.styl
                test: /\.styl$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "stylus-loader", // 把stylus语法转为css语法
                    },
                ],
            },
            { //.less
                test: /\.less$/,
                use: [{
                    loader: "style-loader" //把js字符串变成<style>标签
                }, {
                    loader: "css-loader" //把css语法转为js字符串
                }, {
                    loader: "less-loader" //把less语法转为css语法
                }]
            },
            { //.scss
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    //"sass-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ],
            },
        ],
    },
};