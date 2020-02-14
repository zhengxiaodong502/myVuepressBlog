---
title: vue iview-admin 如何兼容IE浏览器（通用）
date: 2018-12-29
tags:
 - iview
 - vue
categories:
 - iview
---


1. 安装babel-polyfill
```
yarn add babel-polyfill --save
```

2. src/main.js 引入babel-polyfill
```
import '@babel/polyfill
```

3. 在根目录增加babel.config.js文件
  ```
  module.exports = {
    presets: [
      ['@vue/app', {
        useBuiltIns: 'entry' // src全局es5编译
      }]
    ]
  }
  ```

4. vue.config.js引用babel-polyfill并且加入配置
  ```
  require('babel-polyfill')
  module.exports = {
    ...{ /* 一些别的配置 */ },
    
    // 关键配置：node_modules里面需要用babel-loader进行编译的包（node_modules的包如果没做 es6 => es5 转码则需要自己用babel-polyfill进行手动处理）
    // 如果IE下还跑不起来，控制台发现有其他es6语法的，尝试调试去找到底是哪个包
    transpileDependencies: [
      'iview',
      'axios'
    ],
  }
  ```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

另一种写法如图：

![img](https://img-blog.csdnimg.cn/20181229112431874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dhc19zdGF0aW9u,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

