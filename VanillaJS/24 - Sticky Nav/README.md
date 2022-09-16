# 24 - Sticky Nav

[Demo](https://shanq21.github.io/My-JavaScript30/24/index.html)



## 需求描述

当页面向下滚动至header消失时，导航栏固定在页面最顶部，其左侧弹出LOGO，同时下方的文档内容稍微向上移动和放大。

当页面向上滚动至应该露出header的位置时，页面恢复原先的状态。



## 实现思路

1. 为全局添加`scroll`事件，用一个变量`topOfNav`记录nav的`offsetTop`（因为导航栏固定后会改变）
   1. 当`window.pageYOffset >= topOfNav `时，固定导航栏
   2. 否则，取消固定导航栏



## 实现细节

#### 当导航栏固定时，需要修改样式的元素太多了，如何精简代码？

我们可以只往`body`上添加`fixed-nav`样式（然后在CSS中设置相应的选择器），而不是给每一个元素都添加。



#### 为什么导航栏固定后，下方的文档内容会向上跳动一大段距离？如何解决？

将`nav`设置为`position: fixed`后，`nav`就脱离了标准流布局。因此，标准流布局中会缺失等同于`nav`高度的距离，导致下方的文档内容上移。

一个解决方法是，将`body`的`paddingTop`改为`nav.offsetHeight`，这样就可以把下方的内容“顶”回原先的位置。

```js
document.body.style.paddingTop = nav.offsetHeight + 'px';
```

