class TestPlugin {
  apply(complier) {
    console.log("插件运行了");
    complier.hooks.done.tap("test-done", (compilation) => {
      console.log("done");
    });

    complier.hooks.thisCompilation.tap(
      "test-thisCompilation",
      (compilation) => {
        console.log("test-thisCompilation");
        //在这里添加compilation的钩子
        compilation.hooks.succeedModule.tap(
          "test-buildModule",
          (compilation) => {
            console.log("test-buildModule");
          }
        );
      }
    );
  }
}

module.exports = TestPlugin;
