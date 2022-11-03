# 模块联邦

在大型项目中，往往会把项目中的某个区域或功能模块作为单独的项目开发，最终形成「微前端」架构

在微前端架构中，不同的工程可能出现下面的场景

![image-20210122172549530](README.assets/20210122172549.png)

这涉及到很多非常棘手的问题：

- 如何避免公共模块重复打包
- 如何将某个项目中一部分模块分享出去，同时还要避免重复打包
- 如何管理依赖的不同版本
- 如何更新模块
- `......`

`webpack5`尝试着通过`模块联邦`来解决此类问题

## 示例

现有两个微前端工程，它们各自独立开发、测试、部署，但它们有一些相同的公共模块，并有一些自己的模块需要分享给其他工程使用，同时又要引入其他工程的模块。

<img src="README.assets/20220208150521.png" alt="image-20220208150515731" style="zoom:50%;" />

### 初始化工程

#### home项目

安装

```shell
# 初始化 package.json
npm init -y 

# 安装依赖
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i jquery
```

修改`package.json`

```json
"scripts": {
   "build": "webpack",
   "dev": "webpack serve"
 }
```

配置`webpack.config.js`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8080,
  },
  output: {
    clean: true,
  },
  plugins: [ new HtmlWebpackPlugin() ]
};
```

代码

```js
// src/now.js

import $ from 'jquery';

export default function (container) {
  const p = $('<p>').appendTo(container).text(new Date().toLocaleString());
  setInterval(function () {
    p.text(new Date().toLocaleString());
  }, 1000);
}

// src/bootstrap.js
import $ from 'jquery';
import now from './now';

// 生成首页标题
$('<h1>').text('首页').appendTo(document.body);

// 首页中有一个显示当前时间的区域
now($('<div>').appendTo(document.body));

// src/index.js
import('./bootstrap')
```

#### active项目

安装

```shell
# 初始化 package.json
npm init -y 

# 安装依赖
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i jquery
```

修改`package.json`

```json
"scripts": {
   "build": "webpack",
   "dev": "webpack serve"
 }
```

配置`webpack.config.js`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
  },
  output: {
    clean: true,
  },
  plugins: [ new HtmlWebpackPlugin() ]
};
```

代码

```js
// src/news.js

import $ from 'jquery';

export default function (container) {
  const ul = $('<ul>').appendTo(container);
  let html = '';
  for (var i = 1; i <= 20; i++) {
    html += `<li>新闻${i}</li>`;
  }
  ul.html(html);
}


// src/bootstrap.js
import $ from 'jquery';
import news from './news';

// 生成活动页标题
$('<h1>').text('活动页').appendTo(document.body);

// 活动页中有一个新闻列表
news($('<div>').appendTo(document.body));

// src/index.js
import('./bootstrap')
```

### 暴露和引用模块

#### active项目需要使用home项目的now模块

home项目暴露now模块

```js
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // 模块联邦的名称
      // 该名称将成为一个全部变量，通过该变量将可获取当前联邦的所有暴露模块
      name: 'home',
      // 模块联邦生成的文件名，全部变量将置入到该文件中
      filename: 'home-entry.js',
      // 模块联邦暴露的所有模块
      exposes: {
        // key：相对于模块联邦的路径
        // 这里的 ./now 将决定该模块的访问路径为 home/now
        // value: 模块的具体路径
        './now': './src/now.js',
      },
    }),
  ],
};
```

active项目引入now模块

```js
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // 远程使用其他项目暴露的模块
      remotes: {
        // key: 自定义远程暴露的联邦名
        // 比如为 abc， 则之后引用该联邦的模块则使用 import "abc/模块名"
        // value: 模块联邦名@模块联邦访问地址
        // 远程访问时，将从下面的地址加载
        home: 'home@http://localhost:8080/home-entry.js',
      },
    }),
  ],
};

// src/bootstrap.js
// 远程引入时间模块
import now from 'home/now'
now($('<div>').appendTo(document.body));
```

#### home项目需要使用active项目的news模块

active项目暴露news模块

```js
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // 模块联邦的名称
      // 该名称将成为一个全部变量，通过该变量将可获取当前联邦的所有暴露模块
      name: 'active',
      // 模块联邦生成的文件名，全部变量将置入到该文件中
      filename: 'active-entry.js',
      // 模块联邦暴露的所有模块
      exposes: {
        // key：相对于模块联邦的路径
        // 这里的 ./news 将决定该模块的访问路径为 active/news
        // value: 模块的具体路径
        './news': './src/news.js',
      },
    }),
  ],
};
```

home项目引入news模块

```js
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // 远程使用其他项目暴露的模块
      remotes: {
        // key: 自定义远程暴露的联邦名
        // 比如为 abc， 则之后引用该联邦的模块则使用 import "abc/模块名"
        // value: 模块联邦名@模块联邦访问地址
        // 远程访问时，将从下面的地址加载
        active: 'active@http://localhost:3000/active-entry.js',
      }
    }),
  ],
};

// src/bootstrap.js
// 远程引入新闻模块
import news from 'active/news'
news($('<div>').appendTo(document.body));
```

### 处理共享模块

两个项目均使用了jquery，为了避免重复，可以同时为双方使用`shared`配置共享模块

```js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // 配置共享模块
      shared: {
        // jquery为共享模块
        jquery: {
          singleton: true, // 全局唯一
        },
      },
    }),
  ],
};
```



