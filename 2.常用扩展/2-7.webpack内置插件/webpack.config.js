const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, BannerPlugin, ProvidePlugin } = require("webpack");
module.exports = {
  devtool: "source-map",
  output: {
    filename: "js/[name][chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new DefinePlugin({
      PI: "Math.PI",
      VERSION: `"1.0.0"`, // VERSION = "1.0.0"
      DOMAIN: JSON.stringify("rico"),
      TEST: true,
      TEST1: 1,
      TEST2: { a: 1 },
    }),
    new BannerPlugin({
      banner: `
      hash:[hash]
      chunkhash:[chunkhash]
      name:[name]
      author:rico
      corporation:rico
      `,
    }),
    new ProvidePlugin({
      $: "jquery",
    }),
  ],
  devServer: {
    open: true,
    stats: {
      modules: false,
    },
  },
};
