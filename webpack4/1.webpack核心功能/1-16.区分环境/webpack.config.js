module.exports = (env) => {
  console.log(env);
  if (env && env.prod) {
    return {
      mode: "production",
      devtool: "none",
    };
  } else {
    return {
      mode: "development",
      devtool: "source-map",
    };
  }
};
