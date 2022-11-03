const baseConfig = require("./webpack.base");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
module.exports = (env) => {
  if (env && env.prod) {
    return {
      ...baseConfig,
      ...prodConfig,
    };
  }
  return {
    ...baseConfig,
    ...devConfig,
  };
};
