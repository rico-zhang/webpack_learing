const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  output: {
    filename: "[name][chunkhash:5].js",
  },
  plugins: [new CleanWebpackPlugin()],
};
