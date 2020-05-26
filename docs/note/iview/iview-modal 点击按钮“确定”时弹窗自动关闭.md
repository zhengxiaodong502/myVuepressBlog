---
title: iview-modal 点击按钮“确定”时弹窗自动关闭
date:   2018-11-29 
tags:
 - iview
categories:
 - iview
---

1.需求描述：编辑或新增一条数据，弹框modal操作，做表达校验

2.使用场景：新增或编辑角色，弹窗操作

3.问题描述：modal弹窗做from表达校验，点击确定，如果校验不通过，不应该自动关闭弹窗


4.解决思路：

.解决思路1：给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。（本人用此方法）

.解决思路2：使用slot插入自定义的底部按钮组，在doSomething方法里面做条件判定，不满足的时候return就可以阻止数据提交，给出提示，并且不会关闭modal，你可以通过控制绑定的showRejectModal的值来控制其显示和关闭。

.解决方案1:

```javascript
handleSubmit(name) {
      let self = this;
      this.$refs[name].validate((valid) => {
        setTimeout(() => {
          this.loading = false;
          this.$nextTick(() => {
             this.loading = true;
          });
        }, 1000);
      })
    }
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

.解决方案2:

```html
<Modal title="xxx" v-model="showRejectModal">
   <!--重点就是下面的代码了-->
   <div slot="footer">
    <Button type="text" size="large" @click="showRejectModal=false">取消</Button>
    <Button type="primary" size="large" @click="doSomething">确定</Button>
   </div>
</Modal>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

