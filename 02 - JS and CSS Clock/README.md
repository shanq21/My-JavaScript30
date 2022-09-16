# 02 - JS and CSS Clock

[Demo](https://shanq21.github.io/My-JavaScript30/02/index.html)



## 需求描述

实现一个与当前时间相同的时钟，秒针滴答走动，分针和时针匀速走动。



## 实现思路

1. 选中各指针元素
2. 创建一个`setHand`函数，根据当前时间，设置指针旋转的角度值
3. 设置一个`setInterval`，每隔1s调用一次`setHand`



## 实现细节

#### 如何让指针绕着表盘中心旋转？

在CSS中可以设置指针的旋转中心。若不设置，默认绕元素中心旋转。

```css
.hand {
  transform-origin: 100%; /* x, y, z */
}
```



#### 如何让时钟一开始就在正确的位置上？

由于`setInterval`在第一次调用`setHand`前也会等待1s，因此进入和刷新页面时钟会有延迟。

解决延迟的方法是在`setInterval`之前调用一次`setHand`。

```js
setHand();
setInterval(setHand, 1000);
```



#### 如何让秒针滴答走动？

这里直接将秒针的`transition`设为`none`。

```css
.second-hand {
  transition: none;
}
```

