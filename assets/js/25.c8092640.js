(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{354:function(e,t,n){"use strict";n.r(t);var l=n(0),i=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("1.需求：点击类别，可以全选或者全部取消；选中当全选下面的子选项，父类型要跟着选中")]),e._v(" "),n("p",[e._v("2.应用场景：一般常用于权限列表多层勾选")]),e._v(" "),n("p",[e._v("3.解决思路 ："),n("strong",[e._v("单独封装一个多组全选的组件，这样就解决了其他类别同时被选中的问题")])]),e._v(" "),n("p",[e._v("父组件：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<Modal\n        width="900"\n        v-model="modalAuthority"\n        title="权限列表"\n        @on-ok="handleAuthoritySubmit"\n        @on-cancel="closeModal"\n      >\n        <Form :label-width="100" ref="formValidate2" :model="formValidate2">\n          <div v-for="(items,key) in authorityList" :key="key">\n            <FormItem>\n              <div>\n                <span style="font-weight: 600;">{{items.title}}</span>\n                <div v-for="(singleList,index) in items.child" :key="index">\n                  <authority-list :single-list="singleList" :title="singleList.title" :icon="singleList.name"\n                                  @checkedChild="getChildCheck"></authority-list>\n                </div>\n              </div>\n            </FormItem>\n          </div>\n        </Form>\n      </Modal>\n')])])]),n("p",[n("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==",alt:"点击并拖拽以移动"}})]),e._v(" "),n("p",[e._v("子组件：创建一个authority-list.vue 子组件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n    <div style="margin-left: 10px">\n      <CheckboxGroup>\n        <Checkbox\n          class="checkbox-style"\n          :indeterminate="indeterminate"\n          :value="checkAll"\n          :label="singleList.name"\n          @click.prevent.native="handleCheckAll(singleList.child)"><span style="font-weight: 600;">{{title}}</span>\n        </Checkbox>\n      </CheckboxGroup>\n      <CheckboxGroup v-model="checkAllSingleGroup" @on-change="checkAllSingleGroupChange">\n        <Checkbox  class="checkbox-style" style="margin-left: 20px"\n                   v-for="single in singleList.child"\n                   :key="single.name"\n                   :label="single.inp_value">\n          <span>{{single.title}}</span>\n        </Checkbox>\n      </CheckboxGroup>\n    </div>\n</template>\n')])])]),n("p",[n("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==",alt:"点击并拖拽以移动"}})]),e._v(" "),n("p",[e._v("OK，收工！如果可以实现记得点赞分享，谢谢老铁～")])])}),[],!1,null,null,null);t.default=i.exports}}]);