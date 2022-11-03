module.exports = {
  module: {
    rules: [
      {
        test: /index\.js/,
        use: [
          {
            loader: "./loaders/test-loader",
            options: {},
          },
          "./loaders/loader1",
          "./loaders/loader2",
        ],
      },
      {
        test: /\.js/, //正则表达式，匹配模块的路径
        use: ["./loaders/loader3", "./loaders/loader4"], //匹配到了之后，使用哪些加载器
      },
    ],
  },
};
