const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  devtool: "source-map",
  output: {
    filename: "js/[name][chunkhash:5].js",
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name][hash:5].[ext]",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
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
    }),
  ],
  devServer: {
    open: true,
    stats: {
      modules: false,
    },
  },
};
