const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
};
