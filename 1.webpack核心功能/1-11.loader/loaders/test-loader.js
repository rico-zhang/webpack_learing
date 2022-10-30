module.exports = function (sourceCode) {
  return sourceCode.replace(/变量/g, "var");
};
