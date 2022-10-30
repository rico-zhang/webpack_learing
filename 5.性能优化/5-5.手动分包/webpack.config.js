const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  devtool: "source-map",
  module: {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin({
      // 要清除的文件或目录
      // 排除掉dll目录本身和它里面的文件
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json"),
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json"),
    }),
  ],
  devServer: {
    open: true,
  },
};
