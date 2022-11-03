class FileListPlugin {
  constructor(fileName) {
    this.fileName = fileName;
  }
  apply(complier) {
    complier.hooks.emit.tap("file-list", (compilation) => {
      var fileList = [];
      for (const key in compilation.assets) {
        var content = `【${key}】
        大小：${compilation.assets[key].size() / 1000}KB`;
        fileList.push(content);
      }
      var str = fileList.join("\n\n");
      compilation.assets[this.fileName] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
}

module.exports = FileListPlugin;
