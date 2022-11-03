const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: "./loaders/img-loader",
            options: {
              limit: 1000,
              filename: "img/[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
