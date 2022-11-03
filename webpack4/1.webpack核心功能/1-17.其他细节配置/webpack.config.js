const path = require("path");
module.exports = {
  // context: path.resolve(__dirname, "app"),
  output: {
    library: "abc",
    libraryTarget: "global",
  },
  target: "web",
  module: {
    noParse: /jquery/,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      _: __dirname,
    },
  },
  externals: {
    jquery: "$",
  },
  stats: {
    colors: true,
    hash: true,
    modules: true,
  },
};
