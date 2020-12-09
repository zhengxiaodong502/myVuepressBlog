(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{606:function(t,e,_){"use strict";_.r(e);var v=_(4),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[_("code",[t._v("Network")]),t._v(" 作为我们经常调试的 "),_("code",[t._v("Chrome")]),t._v(" 面板，你知道它有哪些使用技巧吗？")]),t._v(" "),_("h2",{attrs:{id:"_1-隐藏-network-overview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-隐藏-network-overview"}},[t._v("#")]),t._v(" 1. 隐藏 network overview")]),t._v(" "),_("p",[t._v("你经常查看 "),_("code",[t._v("Network")]),t._v(" 面板是为了:")]),t._v(" "),_("ul",[_("li",[t._v("我想看看请求的时间轴信息")]),t._v(" "),_("li",[t._v("我就想看看请求列表- 确认下请求状态，资源大小和响应结果呢")])]),t._v(" "),_("p",[t._v("我赌你是后者，如果是这样，那么 "),_("code",[t._v("Overview")]),t._v(" 的部分就没有任何理由占用 "),_("code",[t._v("Network")]),t._v(" 接近一半的空间。隐藏它！")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_timeline.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_2-request-initiator-显示了调用堆栈信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-request-initiator-显示了调用堆栈信息"}},[t._v("#")]),t._v(" 2. Request initiator 显示了调用堆栈信息")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("initiator")]),t._v(" 可以翻译为 启动器，但是太过生硬，大家理解意思就好。")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("Network` 面板中的 `initiator` 这一列显明了是哪个脚本的哪一行触发了请求。它显示了在调用堆栈中触发请求的最后一步。但如果你用的是，例如：一个本地化的 `fetch` API， 那它将会指向一些低层级的类库的代码 - 例如 当我们在 `Angular` 配合使用 `Axios` 或者 `zone.js` 的时候，这时指向的是 `xhr.js\n")])])]),_("p",[t._v("除了这些外部库之外，如果你希望查看代码的哪一部分触发了请求。 将鼠标悬停在显示的 "),_("code",[t._v("initiator")]),t._v("（例如 外部库）上，你将看到完整的调用堆栈，包括你的文件：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/newwork_initiator.gif",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_3-请求过滤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-请求过滤"}},[t._v("#")]),t._v(" 3. 请求过滤")]),t._v(" "),_("p",[_("code",[t._v("Network")]),t._v(" 面板中的过滤器输入框接受字符串或正则表达式，对应显示匹配的请求。 但是你也可以使用它来过滤很多属性。")]),t._v(" "),_("p",[t._v("只需输入 例如 "),_("code",[t._v("method")]),t._v(" 或者 "),_("code",[t._v("mime-type")]),t._v(" :")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_filter.gif",alt:"img"}})]),t._v(" "),_("p",[t._v("如果想要显示所有可能的关键字，在空白的输入框按下 "),_("code",[t._v("[ctrl] + [space]")])]),t._v(" "),_("h2",{attrs:{id:"_4-自定义请求表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义请求表"}},[t._v("#")]),t._v(" 4. 自定义请求表")]),t._v(" "),_("p",[t._v("在请求表中，你可以看到有关每个请求的几条信息，例如："),_("code",[t._v("Status")]),t._v("， "),_("code",[t._v("Type")]),t._v("， "),_("code",[t._v("Initiator")]),t._v("， "),_("code",[t._v("Size")]),t._v(" 和 "),_("code",[t._v("Time")]),t._v("。但是你同样可以添加更多(例如 我经常添加 "),_("code",[t._v("Method")]),t._v(")。更多：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_defind.png",alt:"img"}})]),t._v(" "),_("blockquote",[_("p",[t._v("你可以添加所有 "),_("code",[t._v("Network")]),t._v(" 面板里展示出来的信息。")])]),t._v(" "),_("p",[t._v("要自定义显示哪些列，右键单击请求表标题上的任意位置。")]),t._v(" "),_("blockquote",[_("p",[t._v("请注意，"),_("code",[t._v("Response Headers")]),t._v(" 是一个有更多选项的完整的子菜单，甚至可以定义你自己的选项。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_headers.gif",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_5-重新发送-xhr-的请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-重新发送-xhr-的请求"}},[t._v("#")]),t._v(" 5. 重新发送 "),_("code",[t._v("XHR")]),t._v(" 的请求")]),t._v(" "),_("p",[t._v("如何重新发送 "),_("code",[t._v("XHR")]),t._v(" 的请求？刷新页面？太老套了，试试这么做：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_xhr.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_6-xhr-fetch-断点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-xhr-fetch-断点"}},[t._v("#")]),t._v(" 6. XHR/fetch 断点")]),t._v(" "),_("p",[t._v("在某一特定时刻，你想要对已发送的 "),_("code",[t._v("“ajax”")]),t._v(" 请求进行捕获怎么做呢？ 可以使用 "),_("code",[t._v("XHR/fetch breakpoint")]),t._v(" 。")]),t._v(" "),_("blockquote",[_("p",[t._v("这些只能在 "),_("code",[t._v("Source")]),t._v(" 面板中设置。（我也同样希望可以直接在 "),_("code",[t._v("Network")]),t._v(" 面板中设置，但事实并非如此）")])]),t._v(" "),_("p",[t._v("你可以添加部分 "),_("code",[t._v("URL")]),t._v(" 作为触发器或监听任何请求：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/debug/network_fetch.png",alt:"img"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);