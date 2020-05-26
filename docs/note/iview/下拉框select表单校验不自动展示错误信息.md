---
title: iview UI 下拉框select表单校验不自动展示错误信息
date:   2018-11-29 
tags:
 - iview
categories:
 - iview
---
1.需求描述

弹窗添加时，对下拉框进行选择，点击确定进行非空校验

2.使用场景

规则管理中添加规则


3.问题描述

下拉框select表单校验不自动展示错误信息


4.解决思路

表单校验中 下拉框控件感觉很奇怪，自带失去焦点事件


5.解决方案 (已解决加入)

校验中把 trigger: 'blur'去掉即可
代码如下：
```javascript
ruleValidate: {
        str: [
          { required: true, message: '请选择分类' }
        ]
 }
```

