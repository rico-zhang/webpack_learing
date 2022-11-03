(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    module.l = true;

    return module.exports;
  }

  return __webpack_require__("./src/index.js");
})({
  "./src/a.js": function (module, exports) {
    eval(
      'console.log("module a");\r\nmodule.exports = "a";\r\n\n\n//# sourceURL=webpack:///./src/a.js?'
    );
  },

  "./src/index.js": function (module, exports, __webpack_require__) {
    eval(
      'console.log("index module");\r\nvar a = __webpack_require__(/*! ./a */ "./src/a.js");\r\nconsole.log(a);\r\n\n\n//# sourceURL=webpack:///./src/index.js?'
    );
  },
});
