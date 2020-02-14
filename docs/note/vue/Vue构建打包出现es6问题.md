---
title: Vue构建打包出现es6问题from UglifyJs 报错Unexpected token punc
date: 2018-07-18
tags: 
 - webpack
 - vue
categories:
 - Vue
---


1.使用场景

在vue项目中使用 async await处理并行多个异步,是因为项目中没有使用`transform-runtime`将es6+转换成es5

解决方案在上一篇文章：

[https://www.zxdblog.net/views/前端/vueCli/Vue开发中regeneratorRuntime.html](https://www.zxdblog.net/views/前端/vueCli/Vue开发中regeneratorRuntime.html)



但是，但是当你npm run build 构建失败！！！ 

会报 Unexpected token: punc 这样的错 

![ERROR in js/app.sdfsdf.js  from UglifyJs](https://img-blog.csdnimg.cn/20190718172851197.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dhc19zdGF0aW9u,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)


2.解决思路

step1: npm i babel-preset-stage-2 -D
step2: 配置 .babelrc 

.babelrc 如下代码

```
"presets": [
      [
          "env",
          {
              "modules": false
          }
      ],
      "stage-2"
  ],
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

赶紧 npm run build 构建试试吧！
