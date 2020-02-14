---
title: iview UI 阻止下拉框select选中的值，不让其进行渲染
date:   2019-07-29 
tags:
 - iview
categories:
 - iview
---

1.需求描述

在一个table中，每一行都有排序下拉框，每个排序都是唯一的，不能重复，如图所示：

![img](https://img-blog.csdnimg.cn/20190729194221169.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dhc19zdGF0aW9u,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)


2.问题描述

现在的排序是 1， 2， 3  现在将第三行下拉框的值由 3 改变成 1，因为 1 已经再第一行存在，所以不允许重复，但是

还是渲染成了 1   怎么破？？？


4.解决思路

首先查看API文档并没有回调拦截的事件或方法，所以只能自己重新渲染了，那如何渲染呢？

![img](https://img-blog.csdnimg.cn/20190729201218163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dhc19zdGF0aW9u,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)你会发现没卵用，，，这里提到的两种情况实际改变了数据但是**没有触发视图更新**。

来看终极绝招！！！

![img](https://img-blog.csdnimg.cn/20190729201803861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dhc19zdGF0aW9u,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)



### this.$set(Object, index, obj)

### 记住一句话：不管第一个参数Object是数组还是对象，但最好是data的根参数

