const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: 9000,
        open: true,
    }
}