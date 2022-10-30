const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    page1: "./src/page1",
    page2: "./src/page2",
  },
  output: {
    filename: "[name].[chunkhash:5].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["page1"],
      filename: "page1.html",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["page2"],
      filename: "page2.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:5].css",
      // chunkFilename是配置来自于分割chunk的文件名
      chunkFilename: "common.[chunkhash:5].css",
    }),
  ],
  devServer: {
    open: true,
  },
  optimization: {
    splitChunks: {
      // 分包策略
      chunks: "all",
      // maxSize: 1024 * 6,
      automaticNameDelimiter: ".",
      // minChunks: 2,
      minSize: 0,
      cacheGroups: {
        styles: {
          test: /\.css$/, // 匹配样式模块
          minSize: 0, // 覆盖默认的最小尺寸，这里仅仅是作为测试
          minChunks: 2, // 覆盖默认的最小chunk引用数
        },
      },
    },
  },
};
