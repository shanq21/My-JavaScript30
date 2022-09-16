# 27 - Click and Drag

[Demo](https://shanq21.github.io/My-JavaScript30/27/index.html)



## 需求描述

现有一个可横向滚动的页面，要求实现鼠标拖拽滚动。



## 实现思路

1. 通过监听`mousedown`、`mousemove`、`mouseup`事件，来实现对拖拽动作的响应
2. 设置用于记录的变量
   1. `isActive`，表示是否正处于拖拽中
   2. `startX`，表示拖拽的起点
   3. `scrollLeft`，表示页面已滚动的距离
3. 当`mousedown`时，设`isActive = true`，记录`startX`和`scrollLeft`
4. 当`mousemove`时，计算鼠标当前位置与`startX`的水平距离，得到新的`items.scrollLeft`
5. 当`mouseup`或`mouseleave`时，拖拽结束，设`isActive = false`

