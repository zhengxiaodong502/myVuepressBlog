(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{356:function(e,t,a){"use strict";a.r(t);var r=a(0),A=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("1.需求描述")]),e._v(" "),a("p",[e._v('编辑页面需要做日期控件类型type="datetimerange"的表单校验')]),e._v(" "),a("p",[e._v("2.使用场景")]),e._v(" "),a("p",[e._v("规则管理--》编辑弹窗表单校验")]),e._v(" "),a("p",[e._v("3.问题描述")]),e._v(" "),a("p",[e._v('日期控件类型type="datetimerange"或者 type="daterange" 的表单校验不提示错误信息')]),e._v(" "),a("p",[e._v("4.解决思路")]),e._v(" "),a("p",[e._v("修改规则，代码如方案")]),e._v(" "),a("p",[e._v("5.解决方案 (已解决加入)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Form-item label="全天/时间范围" prop="run_time">\n            <DatePicker :value="formValidate.run_time" @on-change="selectTime" @on-clear="clearTime" type="datetimerange" placement="bottom-end" placeholder="开始时间-结束时间" style="width: 500px"></DatePicker>\n </Form-item>\n')])])]),a("p",[a("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==",alt:"点击并拖拽以移动"}})]),e._v(" "),a("p",[e._v("⚠️注意：这里使用 :value  不要使用v-model")]),e._v(" "),a("p",[e._v("data () {")]),e._v(" "),a("p",[e._v("return {")]),e._v(" "),a("p",[e._v("formValidate: {")]),e._v(" "),a("p",[e._v("​    run_time: []")]),e._v(" "),a("p",[e._v("}")]),e._v(" "),a("p",[e._v("规则校验如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ruleValidate: {\n         run_time: [{\n          type: 'array',\n          required: true,\n          fields: {\n            0: { required: true, message: '请选择全天/时间范围', trigger: 'change' },\n            1: { required: true, message: '请选择全天/时间范围', trigger: 'change' }\n          }\n}]\n")])])]),a("p",[a("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==",alt:"点击并拖拽以移动"}})]),e._v(" "),a("p",[e._v("OK，收工！如果可以实现记得点赞分享，谢谢老铁～")])])}),[],!1,null,null,null);t.default=A.exports}}]);