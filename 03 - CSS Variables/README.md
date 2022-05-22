# 03 - CSS Variables



## 需求描述

通过调节页面上的控件，能够改变图片的属性。



## 实现思路

1. 设置全局的CSS变量
2. 为图片元素的相应属性赋值
3. 为控件添加`change`和`mousemove`监听事件，修改相应的CSS变量



## 实现细节

### CSS变量

这是CSS3的新特性，允许设置变量，并在其他地方引用。

```css
:root {
  --spacing: 10px;
  --blur: 10px;
  --base: #ffc600;
}
```

`:root`表示全局属性，它属于`document.documentElement`，修改其中的属性可以使用`setProperty`。

```js
document.documentElement.style.setProperty('--spacing', newValue);
```

想要引用变量，需使用`var()`把变量括起来。

```css
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```



### 监听事件

#### 如何在拖动滑动条时就能实时看到属性的改变，而不是松开鼠标后属性才改变？

`change`事件：当`input`元素的`value`被更改时，该事件触发。

`mouseover`事件：当鼠标移动时，该事件触发。

因此，同时为控件元素添加这两个监听事件，就能够实现一边拖动滑动条一边观察属性变化。

```js
inputs.forEach(input => input.addEventListener('change', setStyle));
inputs.forEach(input => input.addEventListener('mousemove', setStyle));
```

