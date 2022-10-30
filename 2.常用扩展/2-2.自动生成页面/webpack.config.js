const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: {
    home: "./src/index",
    a: "./src/a",
  },
  output: {
    filename: "js/[name][chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "a.html",
      chunks: ["a"],
    }),
  ],
};
