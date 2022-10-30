const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');

function getEntry() {
  const entry = {};
  const pages = require('./pages.js');
  Object.keys(pages).forEach((key) => {
    entry[key] = pages[key].js;
  });
  return entry;
}

function getHtmlPlugins() {
  const pages = require('./pages.js');
  const htmlPlugins = Object.keys(pages).map((key) => {
    return new HtmlWebpackPlugin({
      template: path.resolve(__dirname, pages[key].html),
      filename: pages[key].out,
      chunks: [key],
    });
  });
  return htmlPlugins;
}
module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:5].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      _: __dirname,
    },
  },
  stats: {
    colors: true,
    modules: false,
    entrypoints: false,
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'static/[name].[hash:5].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(css)|(pcss)$/i,
        use: [MiniCssExtactPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/i,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: './',
        },
      ],
    }),
    ...getHtmlPlugins(),
    new MiniCssExtactPlugin({
      filename: 'css/[name].[chunkhash:5].css',
      chunkFilename: 'css/common.[hash:5].css',
    }),
  ],
};
