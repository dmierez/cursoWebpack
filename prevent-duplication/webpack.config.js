const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot: true,
        open: true,
        port: 5009,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jpg|png|gif|woff|ttf|svg|eot|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader 
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader 
                    },
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader 
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader 
                    },
                    'css-loader',
                    'stylus-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new HtmlWebpackPlugin({
            title: 'Plugins',
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', 
            minSize: 0,
            name: 'commons',
        }
    }
}