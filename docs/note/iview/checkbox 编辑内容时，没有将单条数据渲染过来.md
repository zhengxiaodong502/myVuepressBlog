---
title: iview checkbox 编辑内容时，没有将单条数据渲染过来
date:   2018-11-29 
tags:
 - iview
categories:
 - iview
---

1.需求描述

点击“编辑”将列表中的单条数据渲染在编辑弹窗中


2.使用场景

编辑“用户管理”


3.问题描述

编辑内容时，没有将单条数据渲染过来


4.解决思路

因为编辑页是做了表达校验的,在ruleValidate对象中，数组时必须要声明 type:'array'，否则校验不通过，且一定要注意双向绑定的数据类型跟后台返回的数组里面字段的数据类型是否一致，如果不一致，是不可能渲染得上的

```javascript
ruleValidate: {
        checkAllGroup: [
          { required: true, type: 'array', message: '请选择角色', trigger: 'change' }        // 注：数组时必须要声明 type:'array'
        ]
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)



编辑时把数据带过来进行渲染，保证数组内字段的数据类型跟v-model一致。

建议后台统一该字段的数据类型。否则前端做转换 

如下：

**this.formValidate.checkAllGroup = this.userLists[index].role.map(Number)**
 // 注意：该数组中的数字要Number类型