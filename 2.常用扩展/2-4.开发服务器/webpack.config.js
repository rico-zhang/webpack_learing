const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
    new CopyPlugin([{ from: "./public", to: "./" }]),
  ],
  devServer: {
    port: "8000",
    open: true,
    proxy: {
      "/api": {
        target: "http://open.duyiedu.com",
        changeOrigin: true,
      },
    },
    stats: {
      modules: false,
    },
  },
};
