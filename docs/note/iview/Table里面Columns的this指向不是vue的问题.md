---
title: iviewUI Table里面Columns的this指向不是vue的问题
date: 2018-07-09 
tags:
 - iview
categories:
 - iview
---

1.需求：操作某列中需要调用方法来实现功能

2.应用场景：一般常见于列中是控件（如：selecte下拉框，input输入框）

3.解决思路 ：**使用** Table中 从 3.2.0 版本开始支持 slot-scope 写法。

在 columns 的某列声明 slot 后，就可以在 Table 的 slot 中使用 slot-scope。

slot-scope 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。

举个例子：

```javascript
Columns: [
        { title: '序号', type: 'index' },
        { title: '套餐ID', key: 'package_id', width: 100 },
        { title: '套餐名称', key: 'package_name', width: 150 },
        {
          title: '套餐面值',
          key: 'amount',
          width: 100
        },
        {
          title: '排序',
          slot: 'order_no'
        },
        {
          title: '操作',
          key: 'handle',
          slot: 'operate'
        }
]
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

然后在<Table></Table>里面写template模板 ，在里面进行@on-change="getPackageNum(index, $event)" 方法的调用

如下代码：

```html
<Table
     border
     :columns="packageColumns"
     :data="packageListTab"
     max-height="300">
   <template slot-scope="{ row, index }" slot="order_no">
    <Select transfer 
        :value="Number(row.order_no)" 
        :disabled="paramsObj.status == 1"
        @on-change="getPackageNum(index, $event)"  placeholder="请选择排序">
      <Option v-for="val in 10" :value="val" :key="val">{{val}}</Option>
    </Select>
   </template>
</Table>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

OK，收工！如果可以实现记得点赞分享，谢谢老铁～