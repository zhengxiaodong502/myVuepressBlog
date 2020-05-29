(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{367:function(v,_,e){"use strict";e.r(_);var o=e(0),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("一般来说，我们会使用 "),e("code",[v._v("console.log()")]),v._v(" 来打印某个对象，并且，两次打印之间，还会对这个对象进行修改，最后我们查看打印的结果发现，修改前的打印和修改后的打印，竟然是一样的？这样出乎意料的情况，让我们难以继续 "),e("code",[v._v("console.log")]),v._v(" 的调试。")]),v._v(" "),e("p",[v._v("口说无凭，举个例子把：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/11/1679a0d3a708ef3e?imageslim",alt:"img"}})]),v._v(" "),e("p",[v._v("我们可以看到，一共有两次打印，一次是打印原始信息，一次是打印我们修改后的信息，并且我们把属性 "),e("code",[v._v("a")]),v._v(" 从 "),e("code",[v._v("0")]),v._v(" 改成 "),e("code",[v._v("1")]),v._v(" ，"),e("code",[v._v("name")]),v._v(" 属性从 "),e("code",[v._v("Tomek")]),v._v(" 改成 "),e("code",[v._v("Not Tomek")])]),v._v(" "),e("p",[v._v("但打印的时候，两次都是我们修改之后的值？")]),v._v(" "),e("p",[v._v("那，为什么会出现这一现象？")]),v._v(" "),e("p",[v._v("说明：")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("console")]),v._v(" 中打印出的对象，在你打印出他内容之前，是以引用的方式保存的。")])]),v._v(" "),e("p",[v._v("知道了原因，对应的就知道该怎么处理这样的情况了：")]),v._v(" "),e("ul",[e("li",[v._v("打印一个从这个对象复制出来的对象。")]),v._v(" "),e("li",[v._v("使用资源面中的断点来调试")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("JSON.stringify()")]),v._v(" 方法处理打印的结果")]),v._v(" "),e("li",[v._v("更多你可以想到的好方法~")])])])}),[],!1,null,null,null);_.default=t.exports}}]);