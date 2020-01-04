# Typora

Typora是一款轻便简洁的Markdown编辑器，支持即时渲染技术，这也是与其他Markdown编辑器最显著的区别。即时渲染使得你写Markdown就想是写Word文档一样流畅自如，不像其他编辑器的有编辑栏和显示栏。

### 对文字的特殊标注

标题
```
# 一阶标题  或者快捷键Ctrl+1
## 二阶标题 或者快捷键Ctrl+2
### 三阶标题    或者快捷键Ctrl+3
#### 四阶标题   或者快捷键Ctrl+4
##### 五阶标题     或者快捷键  Ctrl+5
###### 六阶标题   或者快捷键  Ctrl+6
```
<u>下划线</u>

```
<u>下划线的内容</u> 或按快捷键Ctrl+U
```
**字体加粗**

```
**加粗内容**    或按快捷键Ctrl+B
```
*斜体*

```
*倾斜内容*  或按快捷键Ctrl+I
```
~~删除线~~
```
~~删除线的内容~~  或按快捷键Alt+Shift+5
```
文字高亮
```
==我是最重要的==

```
角标

```
x^2^    H~2~O
x^2^ 上角标前后一个“^”

H~2~O 下角标前后一个“~”
```

<center>文本居中</center>

```
<center>这是要居中的文本内容</center>
```
1. 有序列表一
    1. 有序一
    2. 有序二
2. 有序列表二
```
1. 有序列表一
    1. 有序一
    2. 有序二
2. 有序列表二

（1） 数字+英文小数点(.)+空格   （2）嵌套有序列表：有序列表 + 内容 + enter + tab
```

- 无序列表一
  - 嵌套一
  - 嵌套二
+ 无序列表二
* 无序列表三
```
- 无序列表一
  - 嵌套一
  - 嵌套二
+ 无序列表二
* 无序列表三
（1） + 、- 、* 创建无序列， （2）嵌套无序列表：无序列表 + 内容 + enter + tab
```
事物清单
- [ ] 参加会议
- [x] 中超足球赛
```
-[] 参加会议
-[x] 中超足球赛
-[x] 数学
-[ ] 英语

- + [ + space + ]
```
支持内嵌CSS样式
<p style="color: #AD5D0F;font-size: 30px; font-family: '宋体';">内联样式</p>

```
<p style="color: #AD5D0F;font-size: 30px; font-family: '宋体';">内联样式</p>
```

自动邮箱链接

<xxx@outlook.com>

```
<xxx@outlook.com>
```
表格

| 姓名 | 性别 |
| ---- | ---- |
| xys  | 男   |
| cxy  | 女   |

```
快捷键window:Ctrl+T  mac:command + option + T 弹出对话框
左对齐 :---
居中 :---:
右对齐 ---:
```
分割线
***


```
***+回车  
---+回车  
```
### 插入
图片
![励志男孩](https://profile.csdnimg.cn/8/1/A/1_gas_station)

```
![图片内容](https://profile.csdnimg.cn/8/1/A/1_gas_station)
 也可使用快捷键 mac: ^ + command + i
PS：也可将图片直接拖拽进来，自动生成链接
```
链接
内行式

[百度一下](https://www.baidu.com/)

```
[百度一下，你就知道](https://www.baidu.com/)
插入链接：ctrl + K
```


快速链接
<http://www.baidu.com>
```
<http://www.baidu.com>
PS：按住Ctrl点击链接可直接打开。
```

数学公式（简）

$$
x^2 + y^2+2xy = (x + y)^2
$$

Typora支持加入用LaTeX写成的数学公式，并且在软件界面下用MathJax直接渲染。
```
*1.行内公式(inline math)，可以在偏好设置中单独打开，由一个美元符号将公式围起来；name=\prod \frac{1}{i^2}$
*2.行外公式，直接按Ctrl+Shift+M；(双$+回车也可做到)
```
**注：上标和下标可以使用数学表达式来获取**

### 其余

引用
> 引用文本
```
>+空格    或按快捷键Ctrl+Shift+Q
```
注释
[^1]:标号的含义

```
这是我们的标号[^1]
[^1]:标号的含义
```
表情
🐎 😊

:happy开心:

```
:happy:（两个冒号中间加上描述语，比如这个就是happy）
```
搜索

```
选中某句话：Ctrl+L
选中某个单词：Ctrl+D
搜索：Ctrl+F
搜索并替换：Ctrl+H
```

目录生成：
```
目录生成： + enter [TOC]
```
公式块
```
Ctrl+Shift+M或者开头“$$”
```

Typora快捷键整合
```
Ctrl+1  一阶标题    Ctrl+B  字体加粗
Ctrl+2  二阶标题    Ctrl+I  字体倾斜
Ctrl+3  三阶标题    Ctrl+U  下划线
Ctrl+4  四阶标题    Ctrl+Home   返回Typora顶部
Ctrl+5  五阶标题    Ctrl+End    返回Typora底部
Ctrl+6  六阶标题    Ctrl+T  创建表格
Ctrl+L  选中某句话   Ctrl+K  创建超链接
Ctrl+D  选中某个单词  Ctrl+F  搜索
Ctrl+E  选中相同格式的文字   Ctrl+H  搜索并替换
Alt+Shift+5 删除线 Ctrl+Shift+I    插入图片
Ctrl+Shift+M    公式块 Ctrl+Shift+Q    引用

注：一些实体符号需要在实体符号之前加”\”才能够显示
```