// // const module = document.getElementById("txt").value;

// // if (Math.random() < 0.5) {
// //   // const a = require("./utils/" + module); // 动态依赖
// //   // console.log(a);
// // }

// // 仅在webpack运行过程中有效
// // 参数1：目录，哪个目录中的模块需要添加到打包结果
// // 参数2：是否递归寻找子目录，如果为true，表示需要寻找子目录
// // 参数3：正则表达式，凡是匹配的才会加入到打包结果
/* const context = require.context("./utils", true, /\.js$/);
//返回是一个函数 具体看打包后的结果
const a = context("./a.js");
console.log(a); //a
//得到所有的路径
console.log(context.keys()); //[ './a.js', './b.js', './c.js', './d.js', './index.js' ]
console.log(context.id); //./src/utils sync recursive \.js$
const a1 = context.resolve("./a.js"); //./src/utils/a.js
console.log(a1); */

// const util = require("./utils");
// console.log(util);
