const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "./loaders/style-loader",
      },
    ],
  },
};
