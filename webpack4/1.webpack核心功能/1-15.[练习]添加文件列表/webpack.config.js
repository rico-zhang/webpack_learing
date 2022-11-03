const FileList = require("./plugins/fileList");
module.exports = {
  plugins: [new FileList("fileList.txt")],
  devtool: "source-map",
};
