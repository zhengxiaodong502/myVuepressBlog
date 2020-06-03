(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{371:function(_,v,o){"use strict";o.r(v);var e=o(0),t=Object(e.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("p",[_._v("一般来说，我们会使用 "),o("code",[_._v("console.log()")]),_._v(" 来打印某个对象，并且，两次打印之间，还会对这个对象进行修改，最后我们查看打印的结果发现，修改前的打印和修改后的打印，竟然是一样的？这样出乎意料的情况，让我们难以继续 "),o("code",[_._v("console.log")]),_._v(" 的调试。")]),_._v(" "),o("p",[_._v("口说无凭，举个例子把：")]),_._v(" "),o("p",[o("img",{attrs:{src:"/imgs/debug/console_bug.gif",alt:"img"}})]),_._v(" "),o("p",[_._v("我们可以看到，一共有两次打印，一次是打印原始信息，一次是打印我们修改后的信息，并且我们把属性 "),o("code",[_._v("a")]),_._v(" 从 "),o("code",[_._v("0")]),_._v(" 改成 "),o("code",[_._v("1")]),_._v(" ，"),o("code",[_._v("name")]),_._v(" 属性从 "),o("code",[_._v("Tomek")]),_._v(" 改成 "),o("code",[_._v("Not Tomek")])]),_._v(" "),o("p",[_._v("但打印的时候，两次都是我们修改之后的值？")]),_._v(" "),o("p",[_._v("那，为什么会出现这一现象？")]),_._v(" "),o("p",[_._v("说明：")]),_._v(" "),o("blockquote",[o("p",[o("code",[_._v("console")]),_._v(" 中打印出的对象，在你打印出他内容之前，是以引用的方式保存的。")])]),_._v(" "),o("p",[_._v("知道了原因，对应的就知道该怎么处理这样的情况了：")]),_._v(" "),o("ul",[o("li",[_._v("打印一个从这个对象复制出来的对象。")]),_._v(" "),o("li",[_._v("使用资源面中的断点来调试")]),_._v(" "),o("li",[_._v("使用 "),o("code",[_._v("JSON.stringify()")]),_._v(" 方法处理打印的结果")]),_._v(" "),o("li",[_._v("更多你可以想到的好方法~")])])])}),[],!1,null,null,null);v.default=t.exports}}]);