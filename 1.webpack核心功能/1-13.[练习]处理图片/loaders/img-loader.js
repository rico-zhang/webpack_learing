const loaderUtils = require("loader-utils");
console.log(loaderUtils);
function loader(buffer) {
  console.log(this.query);
  let { limit = 5000, filename } = this.query;
  if (buffer.byteLength >= limit) {
    if (!filename) {
      filename = "image/[contenthash:5].[ext]";
    }
    var content = getFileName.call(this, buffer, filename);
  } else {
    var content = getBase64(buffer);
  }
  return `module.exports=\`${content}\``;
}
loader.raw = true;

function getBase64(buffer) {
  return "data:image/png;base64," + buffer.toString("base64");
}

function getFileName(buffer, name) {
  const filename = loaderUtils.interpolateName(this, name, {
    content: buffer,
  });
  this.emitFile(filename, buffer);
  return "dist/" + filename;
}

module.exports = loader;
