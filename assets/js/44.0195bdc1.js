(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{369:function(o,_,e){"use strict";e.r(_);var v=e(0),t=Object(v.a)({},(function(){var o=this,_=o.$createElement,e=o._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("有时你设置的断点是不是被执行了太多次？假设有一个包含 "),e("code",[o._v("200")]),o._v(" 个元素的循环，但是你只对第 "),e("code",[o._v("110")]),o._v(" 次循环的结果感兴趣，又或者你只对一些满足某些条件的结果感兴趣，怎么办呢？这就是我们要说的条件断点：")]),o._v(" "),e("h2",{attrs:{id:"_1-conditional-breakpoints-条件断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-conditional-breakpoints-条件断点"}},[o._v("#")]),o._v(" 1. "),e("code",[o._v("Conditional breakpoints")]),o._v(" 条件断点")]),o._v(" "),e("p",[o._v("这样的情况下，你可以设置一个条件断点：")]),o._v(" "),e("ul",[e("li",[o._v("右击行号，选择 "),e("code",[o._v("Add conditional breakpoint...(添加条件断点)")])]),o._v(" "),e("li",[o._v("或者右击一个已经设置的断点并且选择 "),e("code",[o._v("Edit breakpoint(编辑断点)")])]),o._v(" "),e("li",[o._v("然后输入一个执行结果为 "),e("code",[o._v("true")]),o._v(" 或者 "),e("code",[o._v("false")]),o._v(" 的表达式（它的值其实不需要完全为 "),e("code",[o._v("true")]),o._v(" 或者 "),e("code",[o._v("false")]),o._v(" 尽管那个弹出框的描述是这样说的）。")])]),o._v(" "),e("p",[o._v("在这个表达式中你可以使用任何这段代码可以获取到的值（当前行的作用域）。")]),o._v(" "),e("p",[o._v("如果条件成立，这个断点就会暂停代码的执行：")]),o._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/console_breakpoints.gif",alt:"img"}})]),o._v(" "),e("h2",{attrs:{id:"_2-the-ninja（忍者）-console-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-the-ninja（忍者）-console-log"}},[o._v("#")]),o._v(" 2. The ninja（忍者） "),e("code",[o._v("console.log")])]),o._v(" "),e("p",[o._v("得益于条件断点， "),e("code",[o._v("console.log")]),o._v(" 也有了新玩法：")]),o._v(" "),e("ul",[e("li",[o._v("每一个条件都必须经过判断 - 当应用执行到这一行的时候进行判断")]),o._v(" "),e("li",[o._v("并且如果条件返回的是 "),e("code",[o._v("falsy")]),o._v(" 的值(这里的 "),e("code",[o._v("falsy")]),o._v("并非是笔误，"),e("code",[o._v("falsy")]),o._v(" 指的是被判定为 "),e("code",[o._v("false")]),o._v(" 的值，例如 "),e("code",[o._v("undefined")]),o._v(" )，它并不会暂停..")])]),o._v(" "),e("p",[o._v("与其在你的源码的不同地方去添加 "),e("code",[o._v("console.log")]),o._v(" / "),e("code",[o._v("console.table")]),o._v(" / "),e("code",[o._v("console.time")]),o._v(" 等等，不如你直接使用条件判断来将它们“连接”到 "),e("code",[o._v("Source")]),o._v(" 面板中。 这样的话，它们会一直执行，并且当你不再需要它们的时候，在 "),e("code",[o._v("Breakpoints section")]),o._v(" 会清晰的列出它们。点两下鼠标你就可以把所有的都移除，就像一堆忍者一样突然消失！")]),o._v(" "),e("p",[e("img",{attrs:{src:"/imgs/debug/console_section.gif",alt:"img"}})]),o._v(" "),e("blockquote",[e("p",[o._v("这个技术在调试生产环境的问题时同样很有用，因为你通过这样的方式轻松将 "),e("code",[o._v("console logs")]),o._v(" 插入到 "),e("code",[o._v("source")]),o._v(" 里。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);