const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CmpressionWebpackPlugin = require('compression-webpack-plugin');

const prodConfig = {
  mode: 'production',
  devtool: 'none',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin(), new CmpressionWebpackPlugin()],
};

module.exports = merge(baseConfig, prodConfig);
