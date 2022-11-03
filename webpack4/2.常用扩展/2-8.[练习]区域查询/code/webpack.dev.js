module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    openPage: "list.html",
    proxy: {
      "/api": {
        target: "http://yuanjin.tech:5100/",
        changeOrigin: true,
      },
    },
  },
};
