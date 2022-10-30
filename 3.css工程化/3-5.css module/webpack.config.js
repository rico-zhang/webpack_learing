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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]-[local]-[hash:5]",
              },
            },
          },
        ],
        // test: /\.css$/,
        // use: [
        //   "style-loader",
        //   "css-loader?modules",
        // ],
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
