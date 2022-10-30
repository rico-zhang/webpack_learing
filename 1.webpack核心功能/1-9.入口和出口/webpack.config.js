const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js", //属性名：chunk的名称， 属性值：入口模块（启动模块）
    b: ["./src/b.js", "./src/a.js"], //启动模块有两个
  },
  output: {
    path: path.resolve(__dirname, "target"), //必须配置一个绝对路径，表示资源放置的文件夹，默认是dist
    filename: "./js/[name]-[chunkhash:5].js", //配置的合并的js文件的规则
  },
  devtool: "source-map",
};
