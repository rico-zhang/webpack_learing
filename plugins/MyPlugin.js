module.exports = class {
    apply(compiler) {
        compiler.hooks.emit.tap("myplugin", function (compilation) {
            compilation.assets["fileList.txt"] = {
                source() {
                    return "123456"
                },
                size() {
                    return 6
                }
    }
})
    }
}