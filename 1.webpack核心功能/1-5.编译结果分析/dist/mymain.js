(function (modules) {
  const cacheModule = {};
  function require(moduleId) {
    if (cacheModule[moduleId]) {
      return cacheModule[moduleId];
    }
    var module = {
      exports: {},
    };
    var func = modules[moduleId];
    func(module, module.exports, require);
    cacheModule[moduleId] = module.exports;
    return module.exports;
  }
  return require("./src/index.js");
})({
  "./src/index.js": function (module, exports, require) {
    // console.log("index module");
    // var a = require("./src/a.js");
    // a.d();
    // console.log(a);
    eval(
      'console.log("index module");\nvar a = require("./src/a.js");\na.d();\nconsole.log(a); //# sourceURL=webpack:///./src/index.js'
    );
  },
  "./src/a.js": function (module, exports) {
    console.log("module a");
    module.exports = "a";
  },
});
