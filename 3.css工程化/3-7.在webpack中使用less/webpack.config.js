const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]-[chunkhash:5].js",
  },
  stats: {
    modules: false,
    colors: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader?modules", "less-loader"],
      },
      {
        test: /\.png$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    open: true,
  },
  devtool: "source-map",
};
