# 05 - Flex Panel Gallery

[Demo](https://shanq21.github.io/My-JavaScript30/05/index.html)



## 需求描述

将图片和文字调整为居中布局。实现点击图片后，图片向左右两端展开，同时上下端的文字弹入；再次点击展开的图片后，图片收起，上下两端的文字弹出。

CSS动画的transition已经写好。



## 实现思路

1. CSS
   1. 向整个`panels`添加flex布局，令`panel`的flex值为1，使纵向排列的图片变为均匀的横向排列
   2. 向`panel`添加flex布局，并将主轴改为纵向，调整图片文字
   3. 添加文字弹入/弹出的样式
2. JS
   1. 为每个panel添加`click`事件，点击后使用`classList.toggle`来添加/去除样式，实现动画效果



## 实现细节

#### 如何让文字在图片展开/收起之后再弹入/弹出？

如果只是用`click`事件控制所有的动画，那么无法实现这样有层次的效果。

一个解决方案是向`panel`添加`transitionend`事件，当flex的动画完成之后再触发文字的样式变化。我们可以通过`event.propertyName`来查看当前触发`transitionend`的动画事件。

```js
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
```

