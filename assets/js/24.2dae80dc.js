(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{353:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("作为最流行的编程语言和最重要的 Web 开发语言之一，JavaScript 不断演变，每次迭代都会得到一些新的内部更新。\n让我们来看看 ES2019 有哪些新的特性，并加入到我们日常开发中:\n")])]),t._v(" "),e("h2",{attrs:{id:"array-prototype-flat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-flat"}},[t._v("#")]),t._v(" Array.prototype.flat()")]),t._v(" "),e("p",[t._v("Array.prototype.flat() 递归地将嵌套数组拼合到指定深度。默认值为 1，如果要全深度则使用 Infinity 。此方法不会修改原始数组，但会创建一个新数组:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const arr1 = [1, 2, [3, 4]];\narr1.flat(); \n// [1, 2, 3, 4]\n \nconst arr2 = [1, 2, [3, 4, [5, 6]]];\narr2.flat(2); \n// [1, 2, 3, 4, 5, 6]\n \nconst arr3 = [1, 2, [3, 4, [5, 6, [7, 8]]]];\narr3.flat(Infinity); \n// [1, 2, 3, 4, 5, 6, 7, 8]\n")])])]),e("p",[e("code",[t._v("flat()")]),t._v(" 方法会移除数组中的空项:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const arr4 = [1, 2, , 4, 5];\narr4.flat(); // [1, 2, 4, 5]\n")])])]),e("h2",{attrs:{id:"array-prototype-flatmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-flatmap"}},[t._v("#")]),t._v(" Array.prototype.flatMap()")]),t._v(" "),e("p",[e("code",[t._v("flatMap()")]),t._v(" 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 "),e("code",[t._v("Array.prototype.map")]),t._v(" 和 深度值为 1的 "),e("code",[t._v("Array.prototype.flat")]),t._v(" 几乎相同，但 "),e("code",[t._v("flatMap")]),t._v(" 通常在合并成一种方法的效率稍微高一些。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const arr1 = [1, 2, 3];\n \narr1.map(x => [x * 4]); \n// [[4], [8], [12]]\n \narr1.flatMap(x => [x * 4]); \n// [4, 8, 12]\n")])])]),e("p",[t._v("更好的示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const sentence = ["This is a", "regular", "sentence"];\n \nsentence.map(x => x.split(" ")); \n// [["This","is","a"],["regular"],["sentence"]]\n \nsentence.flatMap(x => x.split(" ")); \n// ["This","is","a","regular", "sentence"]\n \n// 可以使用 归纳（reduce） 与 合并（concat）实现相同的功能\nsentence.reduce((acc, x) => acc.concat(x.split(" ")), []);\n')])])]),e("h2",{attrs:{id:"string-prototype-trimstart-和-string-prototype-trimend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-prototype-trimstart-和-string-prototype-trimend"}},[t._v("#")]),t._v(" String.prototype.trimStart() 和 String.prototype.trimEnd()")]),t._v(" "),e("p",[t._v("除了能从字符串两端删除空白字符的 "),e("code",[t._v("String.prototype.trim()")]),t._v(" 之外，现在还有单独的方法，只能从每一端删除空格:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const test = " hello ";\n \ntest.trim(); // "hello";\ntest.trimStart(); // "hello ";\ntest.trimEnd(); // " hello";\n')])])]),e("ul",[e("li",[e("p",[e("code",[t._v("trimStart()")]),t._v(" ：别名 "),e("code",[t._v("trimLeft()")]),t._v("，移除原字符串左端的连续空白符并返回，并不会直接修改原字符串本身。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("trimEnd()")]),t._v(" ：别名 "),e("code",[t._v("trimRight()")]),t._v("，移除原字符串右端的连续空白符并返回，并不会直接修改原字符串本身。")])])]),t._v(" "),e("h2",{attrs:{id:"object-fromentries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-fromentries"}},[t._v("#")]),t._v(" Object.fromEntries")]),t._v(" "),e("p",[t._v("将键值对列表转换为 Object 的新方法。")]),t._v(" "),e("p",[t._v("它与已有 "),e("strong",[t._v("Object.entries()")]),t._v(" 正好相反，"),e("code",[t._v("Object.entries()")]),t._v("方法在将对象转换为数组时使用，它返回一个给定对象自身可枚举属性的键值对数组。")]),t._v(" "),e("p",[t._v("但现在您可以通过 "),e("code",[t._v("Object.fromEntries")]),t._v(" 将操作的数组返回到对象中。")]),t._v(" "),e("p",[t._v("下面是一个示例（将所有对象属性的值平方）:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const obj = { prop1: 2, prop2: 10, prop3: 15 };\n \n// 转化为键值对数组：\nlet array = Object.entries(obj); \n// [["prop1", 2], ["prop2", 10], ["prop3", 15]]\n')])])]),e("p",[t._v("将所有对象属性的值平方:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('array = array.map(([key, value]) => [key, Math.pow(value, 2)]); \n// [["prop1", 4], ["prop2", 100], ["prop3", 225]]\n')])])]),e("h2",{attrs:{id:"可选的-catch-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选的-catch-参数"}},[t._v("#")]),t._v(" 可选的 Catch 参数")]),t._v(" "),e("p",[t._v("新提案允许您完全省略 "),e("code",[t._v("catch()")]),t._v(" 参数，因为在许多情况下，您并不想使用它:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("try {\n  //...\n} catch (er) {\n  //handle error with parameter er\n}\n \ntry {\n  //...\n} catch {\n  //handle error without parameter\n}\n")])])]),e("h2",{attrs:{id:"symbol-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symbol-description"}},[t._v("#")]),t._v(" Symbol.description")]),t._v(" "),e("p",[e("code",[t._v("description")]),t._v(" 是一个只读属性，它会返回 "),e("code",[t._v("Symbol")]),t._v(" 对象的可选描述的字符串，用来代替 "),e("code",[t._v("toString()")]),t._v(" 方法。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const testSymbol = Symbol("Desc");\n \ntestSymbol.description; // "Desc"\n \ntestSymbol.toString(); // "Symbol(Desc)"\n')])])]),e("h2",{attrs:{id:"function-tostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-tostring"}},[t._v("#")]),t._v(" Function.toString()")]),t._v(" "),e("p",[t._v("现在,在函数上调用 "),e("code",[t._v("toString()")]),t._v(" 会返回函数，与它的定义完全一样，包括空格和注释。")]),t._v(" "),e("p",[t._v("之前：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function /* foo comment */ foo() {}\n \nfoo.toString(); // "function foo() {}"\n')])])]),e("p",[t._v("现在：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('foo.toString(); // "function /* foo comment */ foo() {}"\n')])])]),e("h2",{attrs:{id:"json-parse-改进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-parse-改进"}},[t._v("#")]),t._v(" JSON.parse() 改进")]),t._v(" "),e("p",[t._v("行分隔符 "),e("strong",[t._v("(\\u2028)")]),t._v(" 和段落分隔符 "),e("strong",[t._v("(\\u2029)")]),t._v("，现在被正确解析，而不是报一个语法错误。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var str = \'{"name":"Bottle\\uAnGe"}\'\nJSON.parse(str)\n// {name: "BottleAnGe"}\n')])])]),e("p",[t._v("原文链接：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.tildeloop.com/posts/javascript-what%E2%80%99s-new-in-es2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.tildeloop.com/posts/javascript-what's-new-in-es2019"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);