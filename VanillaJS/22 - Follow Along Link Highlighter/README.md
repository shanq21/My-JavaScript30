# 22 - Follow Along Link Highlighter

[Demo](https://shanq21.github.io/My-JavaScript30/22/index.html)



## 需求描述

网页上有许多链接，要求鼠标移动到链接上时，链接出现高亮块。

注意，高亮块不是凭空出现，而是从上一个高亮的地方跟随过来。



## 实现思路

1. 创建一个高亮块
2. 为每个链接添加`mouseover`事件
   1. 每当事件发生时，获取`this`的坐标和宽高
   2. 将相应的属性赋给高亮块

