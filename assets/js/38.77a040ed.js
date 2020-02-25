(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{367:function(e,a,v){"use strict";v.r(a);var _=v(0),r=Object(_.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"为什么要总结webpack相关的面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要总结webpack相关的面试题"}},[e._v("#")]),e._v(" 为什么要总结webpack相关的面试题")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[e._v("随着现代前端开发的复杂度和规模越来越庞大，已经不能抛开工程化来独立开发了，如react的jsx代码必须编译后才能在浏览器中使用；又如sass和less的代码浏览器也是不支持的。 而如果摒弃了这些开发框架，那么开发的效率将大幅下降。在众多前端工程化工具中，"),v("code",[e._v("webpack")]),e._v("脱颖而出成为了当今最流行的前端构建工具。 然而大多数的使用者都只是单纯的会"),v("code",[e._v("使用")]),e._v("，而并不知道其深层的原理。希望通过以下的面试题总结可以帮助大家温故知新、查缺补漏，知其然而又知其所以然。")])]),e._v(" "),v("h2",{attrs:{id:"_1-webpack与grunt、gulp的不同？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack与grunt、gulp的不同？"}},[e._v("#")]),e._v(" 1. webpack与grunt、gulp的不同？")]),e._v(" "),v("p",[e._v("三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.gruntjs.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("grunt"),v("OutboundLink")],1),e._v("和"),v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.gulpjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gulp"),v("OutboundLink")],1),e._v("是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。")]),e._v(" "),v("p",[e._v("webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。")]),e._v(" "),v("p",[e._v("所以总结一下：")]),e._v(" "),v("ul",[v("li",[e._v("从构建思路来说")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系\nwebpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工复制代码\n")])])]),v("ul",[v("li",[e._v("对于知识背景来说\ngulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路")])]),e._v(" "),v("h2",{attrs:{id:"_2-与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？"}},[e._v("#")]),e._v(" 2. 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？")]),e._v(" "),v("p",[e._v("同样是基于入口的打包工具还有以下几个主流的：")]),e._v(" "),v("ul",[v("li",[e._v("webpack")]),e._v(" "),v("li",[v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//parceljs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("parcel"),v("OutboundLink")],1)])]),e._v(" "),v("p",[v("strong",[e._v("从应用场景上来看：")])]),e._v(" "),v("ul",[v("li",[e._v("webpack适用于大型复杂的前端站点构建")]),e._v(" "),v("li",[e._v("rollup适用于基础库的打包，如vue、react")]),e._v(" "),v("li",[e._v("parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果")])]),e._v(" "),v("blockquote",[v("p",[e._v("由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel")])]),e._v(" "),v("h2",{attrs:{id:"_3-有哪些常见的loader？他们是解决什么问题的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-有哪些常见的loader？他们是解决什么问题的？"}},[e._v("#")]),e._v(" 3.有哪些常见的Loader？他们是解决什么问题的？")]),e._v(" "),v("ul",[v("li",[e._v("file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件")]),e._v(" "),v("li",[e._v("url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去")]),e._v(" "),v("li",[e._v("source-map-loader：加载额外的 Source Map 文件，以方便断点调试")]),e._v(" "),v("li",[e._v("image-loader：加载并且压缩图片文件")]),e._v(" "),v("li",[e._v("babel-loader：把 ES6 转换成 ES5")]),e._v(" "),v("li",[e._v("css-loader：加载 CSS，支持模块化、压缩、文件导入等特性")]),e._v(" "),v("li",[e._v("style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。")]),e._v(" "),v("li",[e._v("eslint-loader：通过 ESLint 检查 JavaScript 代码")])]),e._v(" "),v("h2",{attrs:{id:"_4-有哪些常见的plugin？他们是解决什么问题的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-有哪些常见的plugin？他们是解决什么问题的？"}},[e._v("#")]),e._v(" 4.有哪些常见的Plugin？他们是解决什么问题的？")]),e._v(" "),v("ul",[v("li",[e._v("define-plugin：定义环境变量")]),e._v(" "),v("li",[e._v("commons-chunk-plugin：提取公共代码")]),e._v(" "),v("li",[e._v("uglifyjs-webpack-plugin：通过"),v("code",[e._v("UglifyES")]),e._v("压缩"),v("code",[e._v("ES6")]),e._v("代码")])]),e._v(" "),v("h2",{attrs:{id:"_5-loader和plugin的不同？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-loader和plugin的不同？"}},[e._v("#")]),e._v(" 5.Loader和Plugin的不同？")]),e._v(" "),v("p",[v("strong",[e._v("不同的作用")])]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Loader")]),e._v('直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到'),v("code",[e._v("loader")]),e._v("。 所以Loader的作用是让webpack拥有了加载和解析"),v("em",[e._v("非JavaScript文件")]),e._v("的能力。")]),e._v(" "),v("li",[v("strong",[e._v("Plugin")]),e._v('直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。')])]),e._v(" "),v("p",[v("strong",[e._v("不同的用法")])]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Loader")]),e._v("在"),v("code",[e._v("module.rules")]),e._v("中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个"),v("code",[e._v("Object")]),e._v("，里面描述了对于什么类型的文件（"),v("code",[e._v("test")]),e._v("），使用什么加载("),v("code",[e._v("loader")]),e._v(")和使用的参数（"),v("code",[e._v("options")]),e._v("）")]),e._v(" "),v("li",[v("strong",[e._v("Plugin")]),e._v("在"),v("code",[e._v("plugins")]),e._v("中单独配置。 类型为数组，每一项是一个"),v("code",[e._v("plugin")]),e._v("的实例，参数都通过构造函数传入。")])]),e._v(" "),v("h2",{attrs:{id:"_6-webpack的构建流程是什么-从读取配置到输出文件这个过程尽量说全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack的构建流程是什么-从读取配置到输出文件这个过程尽量说全"}},[e._v("#")]),e._v(" 6.webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全")]),e._v(" "),v("p",[e._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),e._v(" "),v("ol",[v("li",[e._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；")]),e._v(" "),v("li",[e._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；")]),e._v(" "),v("li",[e._v("确定入口：根据配置中的 entry 找出所有的入口文件；")]),e._v(" "),v("li",[e._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),e._v(" "),v("li",[e._v("完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),e._v(" "),v("li",[e._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),e._v(" "),v("li",[e._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),e._v(" "),v("p",[e._v("在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。")]),e._v(" "),v("h2",{attrs:{id:"_7-是否写过loader和plugin？描述一下编写loader或plugin的思路？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-是否写过loader和plugin？描述一下编写loader或plugin的思路？"}},[e._v("#")]),e._v(" 7.是否写过Loader和Plugin？描述一下编写loader或plugin的思路？")]),e._v(" "),v("p",[e._v('Loader像一个"翻译官"把读到的源文件内容转义成新的文件内容，并且每个Loader通过链式操作，将源文件一步步翻译成想要的样子。')]),e._v(" "),v("p",[e._v('编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（'),v("code",[e._v("source")]),e._v("），可以通过返回值的方式将处理后的内容输出，也可以调用"),v("code",[e._v("this.callback()")]),e._v("方法，将内容返回给webpack。 还可以通过 "),v("code",[e._v("this.async()")]),e._v("生成一个"),v("code",[e._v("callback")]),e._v("函数，再用这个callback将处理后的内容输出出去。 此外"),v("code",[e._v("webpack")]),e._v("还为开发者准备了开发loader的工具函数集——"),v("code",[e._v("loader-utils")]),e._v("。")]),e._v(" "),v("p",[e._v("相对于Loader而言，Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),e._v(" "),v("h2",{attrs:{id:"_8-webpack的热更新是如何做到的？说明其原理？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-webpack的热更新是如何做到的？说明其原理？"}},[e._v("#")]),e._v(" 8.webpack的热更新是如何做到的？说明其原理？")]),e._v(" "),v("p",[e._v("webpack的热更新又称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。")]),e._v(" "),v("p",[v("strong",[e._v("原理：")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/1/16bac047a95a36c0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),v("p",[e._v("图片来自饿了么前端@知乎专栏")]),e._v(" "),v("p",[e._v("首先要知道server端和client端都做了处理工作")]),e._v(" "),v("ol",[v("li",[e._v("第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。")]),e._v(" "),v("li",[e._v("第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。")]),e._v(" "),v("li",[e._v("第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。")]),e._v(" "),v("li",[e._v("第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。")]),e._v(" "),v("li",[e._v("webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。")]),e._v(" "),v("li",[e._v("HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。")]),e._v(" "),v("li",[e._v("而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。")]),e._v(" "),v("li",[e._v("最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。")])]),e._v(" "),v("h2",{attrs:{id:"_9-如何利用webpack来优化前端性能？（提高性能和体验）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-如何利用webpack来优化前端性能？（提高性能和体验）"}},[e._v("#")]),e._v(" 9.如何利用webpack来优化前端性能？（提高性能和体验）")]),e._v(" "),v("p",[e._v("用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。")]),e._v(" "),v("ul",[v("li",[e._v("压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的"),v("code",[e._v("UglifyJsPlugin")]),e._v("和"),v("code",[e._v("ParallelUglifyPlugin")]),e._v("来压缩JS文件， 利用"),v("code",[e._v("cssnano")]),e._v("（css-loader?minimize）来压缩css")]),e._v(" "),v("li",[e._v("利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于"),v("code",[e._v("output")]),e._v("参数和各loader的"),v("code",[e._v("publicPath")]),e._v("参数来修改资源路径")]),e._v(" "),v("li",[e._v("删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数"),v("code",[e._v("--optimize-minimize")]),e._v("来实现")]),e._v(" "),v("li",[e._v("提取公共代码。")])]),e._v(" "),v("h2",{attrs:{id:"_10-如何提高webpack的构建速度？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-如何提高webpack的构建速度？"}},[e._v("#")]),e._v(" 10.如何提高webpack的构建速度？")]),e._v(" "),v("ol",[v("li",[e._v("多入口情况下，使用"),v("code",[e._v("CommonsChunkPlugin")]),e._v("来提取公共代码")]),e._v(" "),v("li",[e._v("通过"),v("code",[e._v("externals")]),e._v("配置来提取常用库")]),e._v(" "),v("li",[e._v("利用"),v("code",[e._v("DllPlugin")]),e._v("和"),v("code",[e._v("DllReferencePlugin")]),e._v("预编译资源模块 通过"),v("code",[e._v("DllPlugin")]),e._v("来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过"),v("code",[e._v("DllReferencePlugin")]),e._v("将预编译的模块加载进来。")]),e._v(" "),v("li",[e._v("使用"),v("code",[e._v("Happypack")]),e._v(" 实现多线程加速编译")]),e._v(" "),v("li",[e._v("使用"),v("code",[e._v("webpack-uglify-parallel")]),e._v("来提升"),v("code",[e._v("uglifyPlugin")]),e._v("的压缩速度。 原理上"),v("code",[e._v("webpack-uglify-parallel")]),e._v("采用了多核并行压缩来提升压缩速度")]),e._v(" "),v("li",[e._v("使用"),v("code",[e._v("Tree-shaking")]),e._v("和"),v("code",[e._v("Scope Hoisting")]),e._v("来剔除多余代码")])]),e._v(" "),v("h2",{attrs:{id:"_11-怎么配置单页应用？怎么配置多页应用？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-怎么配置单页应用？怎么配置多页应用？"}},[e._v("#")]),e._v(" 11.怎么配置单页应用？怎么配置多页应用？")]),e._v(" "),v("p",[e._v("单页应用可以理解为webpack的标准模式，直接在"),v("code",[e._v("entry")]),e._v("中指定单页应用的入口即可，这里不再赘述")]),e._v(" "),v("p",[e._v("多页应用的话，可以使用webpack的 "),v("code",[e._v("AutoWebPlugin")]),e._v("来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。 多页应用中要注意的是：")]),e._v(" "),v("ul",[v("li",[e._v("每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套css样式表")]),e._v(" "),v("li",[e._v("随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置")])]),e._v(" "),v("h2",{attrs:{id:"_12-npm打包时需要注意哪些？如何利用webpack来更好的构建？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-npm打包时需要注意哪些？如何利用webpack来更好的构建？"}},[e._v("#")]),e._v(" 12.npm打包时需要注意哪些？如何利用webpack来更好的构建？")]),e._v(" "),v("p",[v("code",[e._v("Npm")]),e._v("是目前最大的 JavaScript 模块仓库，里面有来自全世界开发者上传的可复用模块。你可能只是JS模块的使用者，但是有些情况你也会去选择上传自己开发的模块。 关于NPM模块上传的方法可以去"),v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),v("OutboundLink")],1),e._v("上进行学习，这里只讲解如何利用webpack来构建。")]),e._v(" "),v("p",[e._v("NPM模块需要注意以下问题：")]),e._v(" "),v("ol",[v("li",[e._v("要支持CommonJS模块化规范，所以要求打包后的最后结果也遵守该规则。")]),e._v(" "),v("li",[e._v("Npm模块使用者的环境是不确定的，很有可能并不支持ES6，所以打包的最后结果应该是采用ES5编写的。并且如果ES5是经过转换的，请最好连同SourceMap一同上传。")]),e._v(" "),v("li",[e._v("Npm包大小应该是尽量小（有些仓库会限制包大小）")]),e._v(" "),v("li",[e._v("发布的模块不能将依赖的模块也一同打包，应该让用户选择性的去自行安装。这样可以避免模块应用者再次打包时出现底层模块被重复打包的情况。")]),e._v(" "),v("li",[e._v("UI组件类的模块应该将依赖的其它资源文件，例如"),v("code",[e._v(".css")]),e._v("文件也需要包含在发布的模块里。")])]),e._v(" "),v("p",[e._v("基于以上需要注意的问题，我们可以对于webpack配置做以下扩展和优化：")]),e._v(" "),v("ol",[v("li",[e._v("CommonJS模块化规范的解决方案： 设置"),v("code",[e._v("output.libraryTarget='commonjs2'")]),e._v("使输出的代码符合CommonJS2 模块化规范，以供给其它模块导入使用")]),e._v(" "),v("li",[e._v("输出ES5代码的解决方案：使用"),v("code",[e._v("babel-loader")]),e._v("把 ES6 代码转换成 ES5 的代码。再通过开启"),v("code",[e._v("devtool: 'source-map'")]),e._v("输出SourceMap以发布调试。")]),e._v(" "),v("li",[e._v("Npm包大小尽量小的解决方案：Babel 在把 ES6 代码转换成 ES5 代码时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数的代码，造成了代码的冗余。解决方法是修改"),v("code",[e._v(".babelrc")]),e._v("文件，为其加入"),v("code",[e._v("transform-runtime")]),e._v("插件")]),e._v(" "),v("li",[e._v("不能将依赖模块打包到NPM模块中的解决方案：使用"),v("code",[e._v("externals")]),e._v("配置项来告诉webpack哪些模块不需要打包。")]),e._v(" "),v("li",[e._v("对于依赖的资源文件打包的解决方案：通过"),v("code",[e._v("css-loader")]),e._v("和"),v("code",[e._v("extract-text-webpack-plugin")]),e._v("来实现，配置如下：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("const ExtractTextPlugin = require('extract-text-webpack-plugin');\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        // 增加对 CSS 文件的支持\n        test: /\\.css/,\n        // 提取出 Chunk 中的 CSS 代码到单独的文件中\n        use: ExtractTextPlugin.extract({\n          use: ['css-loader']\n        }),\n      },\n    ]\n  },\n  plugins: [\n    new ExtractTextPlugin({\n      // 输出的 CSS 文件名称\n      filename: 'index.css',\n    }),\n  ],\n};\n复制代码\n")])])]),v("h2",{attrs:{id:"_13-如何在vue项目中实现按需加载？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-如何在vue项目中实现按需加载？"}},[e._v("#")]),e._v(" 13.如何在vue项目中实现按需加载？")]),e._v(" "),v("p",[v("strong",[e._v("Vue UI组件库的按需加载")]),e._v(" 为了快速开发前端项目，经常会引入现成的UI组件库如ElementUI、iView等，但是他们的体积和他们所提供的功能一样，是很庞大的。 而通常情况下，我们仅仅需要少量的几个组件就足够了，但是我们却将庞大的组件库打包到我们的源码中，造成了不必要的开销。")]),e._v(" "),v("p",[e._v("不过很多组件库已经提供了现成的解决方案，如Element出品的"),v("code",[e._v("babel-plugin-component")]),e._v("和AntDesign出品的"),v("code",[e._v("babel-plugin-import")]),e._v(" 安装以上插件后，在"),v("code",[e._v(".babelrc")]),e._v("配置中或"),v("code",[e._v("babel-loader")]),e._v("的参数中进行设置，即可实现组件按需加载了。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "presets": [["es2015", { "modules": false }]],\n  "plugins": [\n    [\n      "component",\n      {\n        "libraryName": "element-ui",\n        "styleLibraryName": "theme-chalk"\n      }\n    ]\n  ]\n}\n复制代码\n')])])]),v("p",[v("strong",[e._v("单页应用的按需加载")]),e._v(" 现在很多前端项目都是通过单页应用的方式开发的，但是随着业务的不断扩展，会面临一个严峻的问题——首次加载的代码量会越来越多，影响用户的体验。")]),e._v(" "),v("p",[e._v("通过"),v("code",[e._v("import(*)")]),e._v("语句来控制加载时机，webpack内置了对于"),v("code",[e._v("import(*)")]),e._v("的解析，会将"),v("code",[e._v("import(*)")]),e._v("中引入的模块作为一个新的入口在生成一个chunk。 当代码执行到"),v("code",[e._v("import(*)")]),e._v("语句时，会去加载Chunk对应生成的文件。"),v("code",[e._v("import()")]),e._v("会返回一个Promise对象，所以为了让浏览器支持，需要事先注入"),v("code",[e._v("Promise polyfill")])]),e._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.zhihu.com/question/266788138/answer/314450633",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于 webpack 的面试题有哪些？"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//segmentfault.com/a/1190000014148611",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端面试之webpack面试常见问题"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);