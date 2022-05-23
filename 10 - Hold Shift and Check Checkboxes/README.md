# 10 - Hold Shift and Check Checkboxes



## 需求描述

现有一个check清单，用户可以正常勾选/取消。

如果用户在勾选时按住shift键，还会将这次和上次勾选之间的所有项目也一起勾选。



## 实现思路

1. 声明`lastChecked`变量
2. 为checkbox添加`click`事件
   1. 如果`this.checked`，则继续
   2. 如果`e.shiftKey && lastChecked`
      1. 设置一个`inBetween`变量
      2. 遍历每个checkbox，当checkbox是`lastChecked`或`this`时，令`inBetween`为`true`
      3. 如果`inBetween`为`true`，将`checkbox.cheched`设为`true`
   3. 将`lastChecked`设为`this`



## 实现细节

#### 如何判断用户在勾选时是否正在按下shift键？

checkbox元素没有多余的空白，因此当且仅当用户点击checkbox元素时，该checkbox将被选中/取消选中。

我们为checkbox元素添加`click`事件，那么就可以通过`e.shiftKey`知晓用户在点击时是否按住了shift键。



#### 如何实现这次和上次勾选之间的所有项目也一起勾选？

实现思路中有说明。

```js
let inBetween = false;

checkboxes.forEach(checkbox => {
  if (checkbox === lastChecked || checkbox === this) {
    inBetween = !inBetween;
  }

  if (inBetween) {
    checkbox.checked = true;
  }
})
```

这里很巧妙地使用了一个开关变量。当遇到查找两者之间/之外元素的问题时，都可以尝试采用这个方法。

