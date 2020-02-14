---
title: iviewUI Checkbox 多选框 多组全选或者全不选的问题
date:   2018-11-29 
sticky: 2
tags:
 - iview
categories:
 - iview
---

1.需求：点击类别，可以全选或者全部取消；选中当全选下面的子选项，父类型要跟着选中

2.应用场景：一般常用于权限列表多层勾选

3.解决思路 ：**单独封装一个多组全选的组件，这样就解决了其他类别同时被选中的问题**

父组件：

```
<Modal
        width="900"
        v-model="modalAuthority"
        title="权限列表"
        @on-ok="handleAuthoritySubmit"
        @on-cancel="closeModal"
      >
        <Form :label-width="100" ref="formValidate2" :model="formValidate2">
          <div v-for="(items,key) in authorityList" :key="key">
            <FormItem>
              <div>
                <span style="font-weight: 600;">{{items.title}}</span>
                <div v-for="(singleList,index) in items.child" :key="index">
                  <authority-list :single-list="singleList" :title="singleList.title" :icon="singleList.name"
                                  @checkedChild="getChildCheck"></authority-list>
                </div>
              </div>
            </FormItem>
          </div>
        </Form>
      </Modal>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)



子组件：创建一个authority-list.vue 子组件

```
<template>
    <div style="margin-left: 10px">
      <CheckboxGroup>
        <Checkbox
          class="checkbox-style"
          :indeterminate="indeterminate"
          :value="checkAll"
          :label="singleList.name"
          @click.prevent.native="handleCheckAll(singleList.child)"><span style="font-weight: 600;">{{title}}</span>
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup v-model="checkAllSingleGroup" @on-change="checkAllSingleGroupChange">
        <Checkbox  class="checkbox-style" style="margin-left: 20px"
                   v-for="single in singleList.child"
                   :key="single.name"
                   :label="single.inp_value">
          <span>{{single.title}}</span>
        </Checkbox>
      </CheckboxGroup>
    </div>
</template>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

OK，收工！如果可以实现记得点赞分享，谢谢老铁～