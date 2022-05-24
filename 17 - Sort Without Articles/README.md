# 17 - Sort Without Articles



## 需求描述

给定一个乐队名称的列表，对其进行排序。

排序时需要忽略掉名称前的冠词（a/an/the）。



## 实现思路

1. 创建一个`strip`函数，通过正则表达式将字符串前的冠词去掉，并返回修改后的字符串
2. 利用`strip`函数排序`bands`
3. 将排序好的`bands`添加到`ul`中



## 实现细节

#### 如何通过正则表达式去除字符串前的冠词？

```js
function strip(s) {
  return s.replace(/^(a|an|the)\b/i, '').trim();
}
```



