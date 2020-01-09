(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{345:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"bdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bdd"}},[t._v("#")]),t._v(" BDD")]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("expect和should是BDD风格的，二者使用相同的链式语言来组织断言")]),t._v(" "),a("p",[t._v("但不同在于他们初始化断言的方式：")]),t._v(" "),a("ul",[a("li",[t._v("expect使用构造函数来创建断言对象实例")]),t._v(" "),a("li",[t._v("should通过为Object.prototype新增方法来实现断言（所以should不支持IE）")]),t._v(" "),a("li",[t._v("expect直接指向chai.expect")]),t._v(" "),a("li",[t._v("should则是chai.should()。")])]),t._v(" "),a("h3",{attrs:{id:"语言链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言链"}},[t._v("#")]),t._v(" 语言链")]),t._v(" "),a("p",[t._v("下面的接口是单纯作为语言链提供以期提高断言的可读性。除非被插件改写否则它们一般不提供测试功能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("to")])]),t._v(" "),a("li",[a("p",[t._v("be")])]),t._v(" "),a("li",[a("p",[t._v("been")])]),t._v(" "),a("li",[a("p",[t._v("is")])]),t._v(" "),a("li",[a("p",[t._v("that")])]),t._v(" "),a("li",[a("p",[t._v("which")])]),t._v(" "),a("li",[a("p",[t._v("and")])]),t._v(" "),a("li",[a("p",[t._v("has")])]),t._v(" "),a("li",[a("p",[t._v("have")])]),t._v(" "),a("li",[a("p",[t._v("with")])]),t._v(" "),a("li",[a("p",[t._v("at")])]),t._v(" "),a("li",[a("p",[t._v("of")])]),t._v(" "),a("li",[a("p",[t._v("same")])])]),t._v(" "),a("h3",{attrs:{id:"断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断言"}},[t._v("#")]),t._v(" 断言")]),t._v(" "),a("ul",[a("li",[a("p",[t._v(".not：对之后的断言取反")])]),t._v(" "),a("li",[a("p",[t._v(".deep")]),t._v(" "),a("ul",[a("li",[t._v("设置deep标记，然后使用equal和property断言。")]),t._v(" "),a("li",[t._v("该标记可以让其后的断言不是比较对象本身，而是递归比较对象的键值对")])])]),t._v(" "),a("li",[a("p",[t._v(".any：在"),a("code",[t._v("keys")]),t._v("断言之前使用"),a("code",[t._v("any")]),t._v("标记（与"),a("code",[t._v("all")]),t._v("相反）")])]),t._v(" "),a("li",[a("p",[t._v(".all：在"),a("code",[t._v("keys")]),t._v("断言之前使用"),a("code",[t._v("all")]),t._v("标记（与"),a("code",[t._v("any")]),t._v("相反）")])]),t._v(" "),a("li",[a("p",[t._v(".a(type) / .an(type)")]),t._v(" "),a("ul",[a("li",[t._v("type为被测试的值的类型")]),t._v(" "),a("li",[a("code",[t._v("a")]),t._v("和"),a("code",[t._v("an")]),t._v("断言即可作为语言链又可作为断言使用")])])]),t._v(" "),a("li",[a("p",[t._v(".include(value)  /  .contains(value)")]),t._v(" "),a("ul",[a("li",[t._v("value: Object | String | Number")]),t._v(" "),a("li",[a("code",[t._v("include()")]),t._v("和"),a("code",[t._v("contains()")]),t._v("即可作为属性类断言前缀语言链又可作为作为判断数组、字符串是否包含某值的断言使用。当作为语言链使用时，常用于"),a("code",[t._v("key()")]),t._v("断言之前")])])]),t._v(" "),a("li",[a("p",[t._v(".ok：断言其目标为"),a("code",[t._v("真值")])])]),t._v(" "),a("li",[a("p",[t._v(".true： 断言目标为"),a("code",[t._v("true")]),t._v("，注意，这里与"),a("code",[t._v("ok")]),t._v("的区别是不进行类型转换，只能为"),a("code",[t._v("true")]),t._v("才能通过断言")])]),t._v(" "),a("li",[a("p",[t._v(".false：断言目标为"),a("code",[t._v("false")])])]),t._v(" "),a("li",[a("p",[t._v(".null：断言目标为"),a("code",[t._v("null")])])]),t._v(" "),a("li",[a("p",[t._v(".undefined：断言目标为"),a("code",[t._v("undefined")])])]),t._v(" "),a("li",[a("p",[t._v(".NaN：断言目标为非数字"),a("code",[t._v("NaN")])])]),t._v(" "),a("li",[a("p",[t._v(".exist：断言目标存在，即非"),a("code",[t._v("null")]),t._v("也非"),a("code",[t._v("undefined")])])]),t._v(" "),a("li",[a("p",[t._v(".empty")]),t._v(" "),a("ul",[a("li",[t._v("断言目标的长度为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[t._v("对于数组和字符串，它检查"),a("code",[t._v("length")]),t._v("属性")]),t._v(" "),a("li",[t._v("对于对象，它检查可枚举属性的数量")])])]),t._v(" "),a("li",[a("p",[t._v(".arguments：断言目标是一个参数对象"),a("code",[t._v("arguments")])])]),t._v(" "),a("li",[a("p",[t._v(".equal(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Mixed")]),t._v(" "),a("li",[t._v("断言目标严格等于("),a("code",[t._v("===")]),t._v(")"),a("code",[t._v("value")]),t._v("。")]),t._v(" "),a("li",[t._v("如果设置了"),a("code",[t._v("deep")]),t._v("标记，则断言目标深度等于"),a("code",[t._v("value")])])])]),t._v(" "),a("li",[a("p",[t._v(".eql(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Mixed")]),t._v(" "),a("li",[t._v("断言目标深度等于"),a("code",[t._v("value")]),t._v("，相当于"),a("code",[t._v("deep.equal(value)")]),t._v("的简写")])])]),t._v(" "),a("li",[a("p",[t._v(".above(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Number")]),t._v(" "),a("li",[t._v("断言目标大于（超过）"),a("code",[t._v("value")])]),t._v(" "),a("li",[t._v("也可接在"),a("code",[t._v("length")]),t._v("后来断言一个最小的长度。相比直接提供长度的好处是提供了更详细的错误消息")])])]),t._v(" "),a("li",[a("p",[t._v(".least(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Number")]),t._v(" "),a("li",[t._v("断言目标不小于（大于或等于）"),a("code",[t._v("value")])]),t._v(" "),a("li",[t._v("也可接在"),a("code",[t._v("length")]),t._v("后来断言一个最小的长度。相比直接提供长度的好处是提供了更详细的错误消息")])])]),t._v(" "),a("li",[a("p",[t._v(".below(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Number")]),t._v(" "),a("li",[t._v("断言目标小于"),a("code",[t._v("value")])]),t._v(" "),a("li",[t._v("也可接在length后来断言一个最大的长度。相比直接提供长度的好处是提供了更详细的错误消息")])])]),t._v(" "),a("li",[a("p",[t._v(".most(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：String")]),t._v(" "),a("li",[t._v("断言目标不大于（小于或等于）"),a("code",[t._v("value")])]),t._v(" "),a("li",[t._v("也可接在length后来断言一个最大的长度。相比直接提供长度的好处是提供了更详细的错误消息")])])]),t._v(" "),a("li",[a("p",[t._v(".within(start, finish)")]),t._v(" "),a("ul",[a("li",[t._v("start：Number，下限")]),t._v(" "),a("li",[t._v("finish：Number，上限")]),t._v(" "),a("li",[t._v("断言目标在某个区间内")]),t._v(" "),a("li",[t._v("也可接在length后来断言一个长度区间。相比直接提供长度的好处是提供了更详细的错误消息")])])]),t._v(" "),a("li",[a("p",[t._v(".instanceof(constructor)")]),t._v(" "),a("ul",[a("li",[t._v("constructor: Constructor构造函数")]),t._v(" "),a("li",[t._v("断言目标是构造函数的一个实例")])])]),t._v(" "),a("li",[a("p",[t._v(".property(name, [value])")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("name：String，属性名")])]),t._v(" "),a("li",[a("p",[t._v("value：Mixed，可选，属性值")])]),t._v(" "),a("li",[a("p",[t._v("断言目标是否拥有某个名为"),a("code",[t._v("name")]),t._v("的属性，可选地如果提供了"),a("code",[t._v("value")]),t._v("则该属性值还需要严格等于（"),a("code",[t._v("===")]),t._v("）"),a("code",[t._v("value")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("如果设置了"),a("code",[t._v("deep")]),t._v("标记，则可以使用点"),a("code",[t._v(".")]),t._v("和中括号"),a("code",[t._v("[]")]),t._v("来指向对象和数组中的深层属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 简单引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pbj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 深层引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deepObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  green"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  teas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green.tea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'teas[1]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'teas[2].tea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("如果目标是一个数组，还可以直接使用一个或多个数组下标作为"),a("code",[t._v("name")]),t._v("来在嵌套数组中断言"),a("code",[t._v("deep.property")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chai'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[0][1]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[1][2].tea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("property")]),t._v("把断言的主语（subject）从原来的对象变为当前属性的值，使得可以在其后进一步衔接其它链式断言（来针对这个属性值进行测试）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("an")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matcha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'teas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("an")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'array'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("with"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[2]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'konacha'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("只有当设置了"),a("code",[t._v("deep")]),t._v("标记的时候，在"),a("code",[t._v("property()")]),t._v(" "),a("code",[t._v("name")]),t._v("中的点（"),a("code",[t._v(".")]),t._v("）和中括号（"),a("code",[t._v("[]")]),t._v("）才必须使用双反斜杠"),a("code",[t._v("\\")]),t._v("进行转义")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 简单指向")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" css "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.link[target]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.link[target]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//深度指向")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deepCss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[target]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deepCss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("have"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\.link\\\\.[target]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v(".ownProperty(name)")]),t._v(" "),a("ul",[a("li",[t._v("name：String，属性名")]),t._v(" "),a("li",[t._v("断言目标拥有名为"),a("code",[t._v("name")]),t._v("的自有属性")])])]),t._v(" "),a("li",[a("p",[t._v(".ownPropertyDescription(name, [descriptor])")]),t._v(" "),a("ul",[a("li",[t._v("name：String，属性名")]),t._v(" "),a("li",[t._v("descriptor：Object，描述对象，可选")]),t._v(" "),a("li",[t._v("断言目标的某个自有属性存在描述符对象，如果给定了"),a("code",[t._v("descroptor")]),t._v("描述符对象，则该属性的描述符对象必须与其相匹配")])])]),t._v(" "),a("li",[a("p",[t._v(".length：设置"),a("code",[t._v(".have.length")]),t._v("标记作为比较"),a("code",[t._v("length")]),t._v("属性值的前缀")])]),t._v(" "),a("li",[a("p",[t._v(".lengthOf(value)")]),t._v(" "),a("ul",[a("li",[t._v("value：Number")]),t._v(" "),a("li",[t._v("断言目标的"),a("code",[t._v("length")]),t._v("属性为期望的值")])])]),t._v(" "),a("li",[a("p",[t._v(".match(regexp)")]),t._v(" "),a("ul",[a("li",[t._v("regexp：RegExp，正则表达式")]),t._v(" "),a("li",[t._v("断言目标匹配到一个正则表达式")])])]),t._v(" "),a("li",[a("p",[t._v(".string(string)")]),t._v(" "),a("ul",[a("li",[t._v("string：String，字符串")]),t._v(" "),a("li",[t._v("断言目标字符串包含另一个字符串")])])]),t._v(" "),a("li",[a("p",[t._v(".keys(key1, [key2], [...])")]),t._v(" "),a("ul",[a("li",[t._v("key：String | Array | Object 属性名")]),t._v(" "),a("li",[t._v("断言目标包含传入的属性名")]),t._v(" "),a("li",[t._v("与"),a("code",[t._v("any")]),t._v("，"),a("code",[t._v("all")]),t._v("，"),a("code",[t._v("contains")]),t._v("或者"),a("code",[t._v("have")]),t._v("前缀结合使用会影响测试结果：\n"),a("ul",[a("li",[t._v("当与"),a("code",[t._v("any")]),t._v("结合使用时，无论是使用"),a("code",[t._v("have")]),t._v("还是使用"),a("code",[t._v("contains")]),t._v("前缀，目标必须至少存在一个传入的属性名才能通过测试。注意，"),a("code",[t._v("any")]),t._v("或者"),a("code",[t._v("all")]),t._v("应当至少使用一个，否则默认为"),a("code",[t._v("all")])]),t._v(" "),a("li",[t._v("当结合"),a("code",[t._v("all")]),t._v("和"),a("code",[t._v("contains")]),t._v("使用时，目标对象必须至少拥有全部传入的属性名，但是它也可以拥有其它属性名")]),t._v(" "),a("li",[t._v("当结合"),a("code",[t._v("all")]),t._v("和"),a("code",[t._v("have")]),t._v("使用时，目标对象必须且仅能拥有全部传入的属性名")])])])])]),t._v(" "),a("li",[a("p",[t._v(".throw(constructor)")]),t._v(" "),a("ul",[a("li",[t._v("constructor：ErrorConstructor | String | RegExp")]),t._v(" "),a("li",[t._v("断言目标函数会抛出一个指定错误或错误类型（使用"),a("code",[t._v("instanceOf")]),t._v("计算），也可使用正则表达式或者字符串来检测错误消息")]),t._v(" "),a("li",[t._v("注意，当一个抛错断言被否定了（前面有"),a("code",[t._v(".not")]),t._v("），那么它会从Error构造函数开始依次检查各个可能传入的参数。检查一个只是消息类型不匹配但是已知的错误，合理的方式是先断言该错误存在，然后使用"),a("code",[t._v(".and")]),t._v("后断言错误消息不匹配")])])]),t._v(" "),a("li",[a("p",[t._v(".respondTo(method)")]),t._v(" "),a("ul",[a("li",[t._v("method：String")]),t._v(" "),a("li",[t._v("断言目标类或对象会响应一个方法（存在这个方法）")])])]),t._v(" "),a("li",[a("p",[t._v(".itself")]),t._v(" "),a("ul",[a("li",[t._v("设置"),a("code",[t._v("itself")]),t._v("标记，然后使用"),a("code",[t._v("respondTo")]),t._v("断言")]),t._v(" "),a("li",[t._v("用于检查一个构造函数是否会响应一个静态方法（挂载在构造函数本身的方法）")])])]),t._v(" "),a("li",[a("p",[t._v(".satisfy(method)")]),t._v(" "),a("ul",[a("li",[t._v("method：Function，测试器，接受一个参数表示目标值，返回一个布尔值")]),t._v(" "),a("li",[t._v("断言目标值能够让给定的测试器返回真值")])])]),t._v(" "),a("li",[a("p",[t._v(".closeTo(expected, delta)")]),t._v(" "),a("ul",[a("li",[t._v("expect：Numbre，期望值")]),t._v(" "),a("li",[t._v("delta：Numbre，范围半径")]),t._v(" "),a("li",[t._v("断言目标数字等于"),a("code",[t._v("expected")]),t._v("，或在期望值的+/-"),a("code",[t._v("delta")]),t._v("范围内")])])]),t._v(" "),a("li",[a("p",[t._v(".members(set)")]),t._v(" "),a("ul",[a("li",[t._v("set：Array")]),t._v(" "),a("li",[t._v("断言目标是"),a("code",[t._v("set")]),t._v("的超集，或前者有后者所有严格相等（"),a("code",[t._v("===")]),t._v("）的成员。另外，如果设置了"),a("code",[t._v("deep")]),t._v("标记，则成员进行深度比较（include/contains只能接受单个值，但它们的主语除了是数组，还可以判断字符串；members则将它们的能力扩展为能够接受一个数组，但主语只能是数组）")])])]),t._v(" "),a("li",[a("p",[t._v(".oneOf(list)")]),t._v(" "),a("ul",[a("li",[t._v("list：Array")]),t._v(" "),a("li",[t._v("断言目标值出现在"),a("code",[t._v("list")]),t._v("数组的某个顶层位置（直接子元素，严格相等）")])])]),t._v(" "),a("li",[a("p",[t._v(".change(object, property)")]),t._v(" "),a("ul",[a("li",[t._v("object：Object，对象")]),t._v(" "),a("li",[t._v("property：String，属性名")]),t._v(" "),a("li",[t._v("断言目标方法会改变指定对象的指定属性")])])]),t._v(" "),a("li",[a("p",[t._v(".increase(object, property)")]),t._v(" "),a("ul",[a("li",[t._v("object：Object，对象")]),t._v(" "),a("li",[t._v("property：String，属性名")]),t._v(" "),a("li",[t._v("断言目标方法会增加指定对象的属性")])])]),t._v(" "),a("li",[a("p",[t._v(".decrease(object, property)")]),t._v(" "),a("ul",[a("li",[t._v("object：Object，对象")]),t._v(" "),a("li",[t._v("property：String，属性名")]),t._v(" "),a("li",[t._v("断言目标方法会减少指定对象的属性")])])]),t._v(" "),a("li",[a("p",[t._v(".extensible：断言目标对象是可扩展的（可以添加新的属性）")])]),t._v(" "),a("li",[a("p",[t._v(".sealed：断言目标对象是封闭的（无法添加新的属性并且存在的属性不能被删除但可以被修改）")])]),t._v(" "),a("li",[a("p",[t._v(".frozen：断言目标对象是冻结的（无法添加新的属性并且存在的属性不能被删除和修改）")])])]),t._v(" "),a("h2",{attrs:{id:"tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.chaijs.com/api/assert/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDD"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);