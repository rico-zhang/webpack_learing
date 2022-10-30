module.exports = {
  //babel-preset-vue过时了 用@vue/babel-preset-jsx 代替
  // presets: ['@vue/babel-preset-jsx'],

  //官方配置
  //https://www.jianshu.com/p/7b863a169fc3
  presets: ['@vue/cli-plugin-babel/preset'],
  //以下三种写法等价，都指向 @vue/babel-preset-app：
  // @vue/babel-preset-app
  // @vue/app
  // @vue/cli-plugin-babel/preset
  //安装 @vue/cli-plugin-babel 的时候会自动安装 @vue/babel-preset-app。
  //@vue/babel-preset-app 是一个 babel 的 preset，它包含了 babel-preset-env，用来转换 ES6 的语法。
  //@vue/babel-preset-app 默认把 useBuiltIns: 'usage' 传递给 @babel/preset-env，来按需引入 API。
};
