const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]-[chunkhash:5].js",
    publicPath: "/",
  },
  stats: {
    modules: false,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?modules"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[hash:5].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:5].css" }),
  ],
  devServer: {
    open: true,
  },
  devtool: "source-map",
};
