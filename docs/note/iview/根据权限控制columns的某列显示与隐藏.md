---
title: vue(iview)根据权限控制columns的某列显示与隐藏
date: 2018-07-14
tags:
 - iview
categories:
 - iview
---

1.需求描述

根据权限控制某列中显示与隐藏


2.使用场景

根据不同用户（普通用户，vip用户），展示对应的列


3.解决思路

将原来的columns copy一份，然后根据权限去让它过滤对应的列，就能返回最新的columns了

举个例子，代码如下

```javascript
created() {
    userType(type) {
      // type: 1 普通用户   2 vip用户  如果是普通用户则不能看到 couponAbleNum 这一列。
      if (type == '1') { //此处判断不用用户类型是否有有对应的列权限
        this.columns = this.columns.filter(col => col.type !== 'couponAbleNum' )
      } else {
        this.columns = this.columnsCopy
      }
    }
  }
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

OK，收工！如果可以实现记得点赞分享，谢谢老铁～