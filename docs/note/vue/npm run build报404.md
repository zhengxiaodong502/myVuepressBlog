---
title: 打包之后npm run build放到服务器上之后刷新会报404怎么解决
date: 2018-12-24
tags: 
 - npm
 - vue
categories:
 - Vue
---

方法一：打包之后npm run build放到服务器上之后刷新会报404怎么解决啊
如果你是 iview + vue 的项目 请到src/route/index.js 把
mode: 'history' 注释掉 再重新打包
其他纯 vue-cli 项目的 直接找到 mode: 'history' 对应的文件，一样 注释掉 再重新打包

方法二：当然，如果不想要很丑的 hash，我们可以用路由的 **history 模式**，这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。需要后台配置支持 详细见vue官网(链接如下)

[https://router.vuejs.org/zh-cn/essentials/history-mode.html](https://router.vuejs.org/zh-cn/essentials/history-mode.html)

