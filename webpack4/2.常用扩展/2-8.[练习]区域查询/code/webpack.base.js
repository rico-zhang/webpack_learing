const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    list: "./src/list",
    detail: "./src/detail",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]-[chunkhash:5].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  stats: {
    modules: false,
    colors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: "public", to: "./" }]),
    new HtmlWebpackPlugin({
      template: "public/list.html",
      filename: "list.html",
      chunks: ["list"],
    }),
    new HtmlWebpackPlugin({
      template: "public/detail.html",
      filename: "detail.html",
      chunks: ["detail"],
    }),
  ],
};
