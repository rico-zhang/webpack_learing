const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  devtool: "source-map",
  output: {
    filename: "js/[name][chunkhash:5].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name][hash:5].[ext]",
              // publicPath: "/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "html/index.html",
    }),
  ],
  devServer: {
    open: true,
    openPage: "html/index.html",
    stats: {
      modules: false,
    },
  },
};
