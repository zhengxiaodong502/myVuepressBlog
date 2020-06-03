(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{361:function(_,v,e){"use strict";e.r(v);var r=e(0),t=Object(r.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"从-chrome-说起"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-chrome-说起"}},[_._v("#")]),_._v(" 从 Chrome 说起")]),_._v(" "),e("p",[_._v("谷歌浏览器（通常简称为 "),e("code",[_._v("Chrome")]),_._v(" ）是由谷歌开发的网络浏览器。 它于 2008 年首次针对 "),e("code",[_._v("Microsoft Windows")]),_._v(" 发布，后来移植到 "),e("code",[_._v("Linux")]),_._v(" ，"),e("code",[_._v("macOS")]),_._v(" ，"),e("code",[_._v("iOS")]),_._v(" 和 "),e("code",[_._v("Android")]),_._v(" 。 浏览器也是 "),e("code",[_._v("Chrome OS")]),_._v(" 的主要组件，它可以作为 "),e("code",[_._v("Web")]),_._v(" 应用的平台。"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Google_Chrome",target:"_blank",rel:"noopener noreferrer"}},[_._v("Chrome-wikipedia"),e("OutboundLink")],1)]),_._v(" "),e("p",[_._v("浏览器的市场天下三分，"),e("code",[_._v("Chorme")]),_._v("，"),e("code",[_._v("Safari")]),_._v("和"),e("code",[_._v("FireFox")]),_._v("，从 2008 年 "),e("code",[_._v("Chrome")]),_._v(" 横空出世以来，如今已经一家独大占据了半壁江山：")]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/browser.gif",alt:"img"}})]),_._v(" "),e("p",[_._v("对于大部分人来说，"),e("code",[_._v("Chrome")]),_._v(" 可能只是个浏览器，但是对于开发人员来说，它更是一个强大无比的工具，为了方便开发人员调试代码，主流的浏览器都内置了 "),e("code",[_._v("DevTools")]),_._v("， 所以无论你是前端还是后端，掌握 "),e("code",[_._v("Chrome")]),_._v(" 的调试技巧意味着效率直接的提高。而这本小册要介绍的，就是 "),e("code",[_._v("Chrome-DevTools")]),_._v(" 的使用技巧。")]),_._v(" "),e("h2",{attrs:{id:"devtools-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devtools-简介"}},[_._v("#")]),_._v(" "),e("code",[_._v("DevTools")]),_._v(" 简介")]),_._v(" "),e("blockquote",[e("p",[_._v("本段内容引用于 "),e("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/#_1",target:"_blank",rel:"noopener noreferrer"}},[_._v("Chrome DevTools "),e("OutboundLink")],1),_._v("说明 熟悉的同学可以跳过，也可以选择跳转到原链接访问，这里是为了给没有接触过 "),e("code",[_._v("chrome-devtools")]),_._v(" 的同学一些基础概念。")])]),_._v(" "),e("h3",{attrs:{id:"打开-chrome-开发者工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开-chrome-开发者工具"}},[_._v("#")]),_._v(" 打开 Chrome 开发者工具")]),_._v(" "),e("ul",[e("li",[_._v("在 "),e("code",[_._v("Chrome")]),_._v(" 菜单中选择 "),e("code",[_._v("更多工具")]),_._v(" > "),e("code",[_._v("开发者工具")])]),_._v(" "),e("li",[_._v("在页面元素上右键点击，选择 “"),e("code",[_._v("检查")]),_._v("”")]),_._v(" "),e("li",[_._v("使用 快捷键 "),e("code",[_._v("Ctrl")]),_._v(" + "),e("code",[_._v("Shift")]),_._v(" + "),e("code",[_._v("I")]),_._v(" ("),e("code",[_._v("Windows")]),_._v(") 或 "),e("code",[_._v("Cmd")]),_._v(" + "),e("code",[_._v("Opt")]),_._v(" + "),e("code",[_._v("I")]),_._v(" ("),e("code",[_._v("Mac")]),_._v(")")])]),_._v(" "),e("h3",{attrs:{id:"了解面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解面板"}},[_._v("#")]),_._v(" 了解面板")]),_._v(" "),e("p",[_._v("我将从以下 8 个面板来讲述面板内容：")]),_._v(" "),e("ol",[e("li",[_._v("元素面板")]),_._v(" "),e("li",[_._v("控制台面板")]),_._v(" "),e("li",[_._v("源代码面板")]),_._v(" "),e("li",[_._v("网络面板")]),_._v(" "),e("li",[_._v("性能面板")]),_._v(" "),e("li",[_._v("内存面板")]),_._v(" "),e("li",[_._v("应用面板")]),_._v(" "),e("li",[_._v("安全面板")])]),_._v(" "),e("h2",{attrs:{id:"_1-元素面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-元素面板"}},[_._v("#")]),_._v(" 1. 元素面板")]),_._v(" "),e("p",[_._v("使用元素面板可以自由的操作 "),e("code",[_._v("DOM")]),_._v(" 和 "),e("code",[_._v("CSS")]),_._v(" 来迭代布局和设计页面。")]),_._v(" "),e("ul",[e("li",[_._v("检查和调整页面")]),_._v(" "),e("li",[_._v("编辑样式")]),_._v(" "),e("li",[_._v("编辑 "),e("code",[_._v("DOM")])])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/dom.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_2-控制台面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-控制台面板"}},[_._v("#")]),_._v(" 2.控制台面板")]),_._v(" "),e("p",[_._v("在开发期间，可以使用控制台面板记录诊断信息，或者使用它作为 "),e("code",[_._v("shell")]),_._v(" 在页面上与 "),e("code",[_._v("JavaScript")]),_._v(" 交互。")]),_._v(" "),e("ul",[e("li",[_._v("使用控制台面板")]),_._v(" "),e("li",[_._v("命令行交互")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/console.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_3-源代码面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-源代码面板"}},[_._v("#")]),_._v(" 3.源代码面板")]),_._v(" "),e("p",[_._v("在源代码面板中设置断点来调试 "),e("code",[_._v("JavaScript")]),_._v(" ，或者通过 "),e("code",[_._v("Workspaces")]),_._v("（工作区）连接本地文件来使用开发者工具的实时编辑器")]),_._v(" "),e("ul",[e("li",[_._v("断点调试")]),_._v(" "),e("li",[_._v("调试混淆的代码")]),_._v(" "),e("li",[_._v("使用开发者工具的 "),e("code",[_._v("Workspaces")]),_._v("（工作区）进行持久化保存")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/dom.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_4-网络面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络面板"}},[_._v("#")]),_._v(" 4.网络面板")]),_._v(" "),e("p",[_._v("使用网络面板了解请求和下载的资源文件并优化网页加载性能。")]),_._v(" "),e("ul",[e("li",[_._v("网络面板基础")]),_._v(" "),e("li",[_._v("了解资源时间轴")]),_._v(" "),e("li",[_._v("网络带宽限制")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/network.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_5-性能面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-性能面板"}},[_._v("#")]),_._v(" 5.性能面板")]),_._v(" "),e("p",[_._v("使用时间轴面板可以通过记录和查看网站生命周期内发生的各种事件来提高页面的运行时性能。")]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/performance.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_6-内存面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-内存面板"}},[_._v("#")]),_._v(" 6.内存面板")]),_._v(" "),e("p",[_._v("如果需要比时间轴面板提供的更多信息，可以使用“配置”面板，例如跟踪内存泄漏。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("JavaScript")]),_._v(" CPU 分析器")]),_._v(" "),e("li",[_._v("内存堆区分析器")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/memory.png",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_7-应用面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-应用面板"}},[_._v("#")]),_._v(" 7.应用面板")]),_._v(" "),e("p",[_._v("使用资源面板检查加载的所有资源，包括 "),e("code",[_._v("IndexedDB")]),_._v(" 与 "),e("code",[_._v("Web SQL")]),_._v(" 数据库，本地和会话存储，"),e("code",[_._v("cookie")]),_._v(" ，应用程序缓存，图像，字体和样式表。")]),_._v(" "),e("ul",[e("li",[_._v("管理数据")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/serverWork.gif",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_8-安全面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-安全面板"}},[_._v("#")]),_._v(" 8.安全面板")]),_._v(" "),e("p",[_._v("使用安全面板调试混合内容问题，证书问题等等。")]),_._v(" "),e("ul",[e("li",[_._v("安全")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/overView.gif",alt:"img"}})])])}),[],!1,null,null,null);v.default=t.exports}}]);