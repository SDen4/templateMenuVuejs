const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: "assets/"
}

module.exports = {

    externals: {
        paths: PATHS
    },

    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
        },
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loader: {
                    scss: "vue-style-loader!css-loader!sass-loader"
                }
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js}`}}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ],
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js}`}}
                }
            ]
        }]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    plugins: [
        new VueLoaderPlugin (),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin ({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/images`, to: `${PATHS.assets}images`},
            {from: `${PATHS.src}/static`, to: ""}

        ])
    ]
}