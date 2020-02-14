---
title: Vue开发中regeneratorRuntime is not defined
date: 2018-07-18
tags: 
 - webpack
 - vue
categories:
 - Vue
---

1.需求描述

想先让其他异步接口发送请求响应后，再发送详情接口，以便于正常渲染页面


2.使用场景

在vue项目中使用 async await处理并行多个异步,是因为项目中没有使用`transform-runtime`将es6+转换成es5


3.解决思路

注意：不建议使用`babel-polyfill`，因为这个太大了，现在6.0版本的babel改成了插件的形式，现在推荐的是`transform-runtime`

step1: `npm i babel-plugin-transform-runtime -D  注意babel的版本是6.x.x 最新的版本可能行不通`

`step2: `配置 .babelrc 


.babelrc 如下代码

```
"plugins": [
      [
        "transform-runtime",
        {
          "helpers": false,
          "polyfill": false,
          "regenerator": true,
          "moduleName": "babel-runtime"
        }
      ]
  ]
```

