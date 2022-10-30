const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"],
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name].manifest.json"), //资源清单的保存位置
      name: "[name]", //资源清单中，暴露的变量名
    }),
  ],
};
