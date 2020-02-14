---
title: iview 日期控件类型type="datetimerange" 表单校验规则
date: 2018-11-29
tags:
 - iview
categories:
 - iview
---

1.需求描述

编辑页面需要做日期控件类型type="datetimerange"的表单校验

2.使用场景

规则管理--》编辑弹窗表单校验


3.问题描述

日期控件类型type="datetimerange"或者 type="daterange" 的表单校验不提示错误信息


4.解决思路

修改规则，代码如方案


5.解决方案 (已解决加入)

```
<Form-item label="全天/时间范围" prop="run_time">
            <DatePicker :value="formValidate.run_time" @on-change="selectTime" @on-clear="clearTime" type="datetimerange" placement="bottom-end" placeholder="开始时间-结束时间" style="width: 500px"></DatePicker>
 </Form-item>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

⚠️注意：这里使用 :value  不要使用v-model



data () {

  return {

   formValidate: {

​    run_time: []  

 }

规则校验如下：

```
ruleValidate: {
         run_time: [{
          type: 'array',
          required: true,
          fields: {
            0: { required: true, message: '请选择全天/时间范围', trigger: 'change' },
            1: { required: true, message: '请选择全天/时间范围', trigger: 'change' }
          }
}]
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

OK，收工！如果可以实现记得点赞分享，谢谢老铁～