# 13 - Slide in on Scroll

[Demo](https://shanq21.github.io/My-JavaScript30/13/index.html)



## 需求描述

现有一篇长文章，可以滚动浏览。

文章中有若干图片，要求当图片占位露出一半时，图片从两侧滑入；当图片完全离开屏幕时，图片从两侧滑出。



## 实现思路

1. 向全局添加`scroll`事件
   1. 遍历每一张图片，计算图片在viewport中的位置
   2. 为图片添加/去除`active`样式



## 实现细节

#### 如何判断当前viewport与图片位置的关系？

一个页面包括

- 已经滚动过去的区域，其高度为`window.pageYOffset`，会随着滚动不断变化；
- 当前可视区域，即viewport，其高度为`document.documentElement.clientHeight`，一般不变；
- 尚未滚动至的区域，在这里不用考虑。

因此，对于一个位置，当它离页面顶部的距离在区间`[已滚动高度, 已滚动高度+当前可视高度]`中时，表示它还在当前可视区域范围内。

而图片距离页面顶部的距离为`img.offsetTop`，图片自身的高度为`img.offsetHeight`。

故有代码如下：

```js
const windowHeight = document.documentElement.clientHeight;

imgs.forEach(img => {
  // imgHalf: 图片一半相对于页面顶部的距离
  // 当页面已滚动距离+窗口高度大于imgHalf时，表示相应图片已经露出超过一半
  const imgHalf = img.offsetTop + img.offsetHeight / 2;
  const isHalfShown = window.pageYOffset + windowHeight > imgHalf;

  // imgBottom: 图片底部相对于页面顶部的距离
  // 当页面已滚动距离小于imgBottom时，表示相应图片尚未离开屏幕
  const imgBottom = img.offsetTop + img.offsetHeight;
  const isNotScrolledPast = window.pageYOffset < imgBottom;

  if (isHalfShown && isNotScrolledPast) {
    img.classList.add('active');
  }
  else {
    img.classList.remove('active');
  }
})
```

