# 01 - JavaScript Drum Kit

[Demo](https://shanq21.github.io/My-JavaScript30/01/index.html)



## 需求描述

实现一个电子鼓。当按下键盘上的按键时，页面上对应的字母区域亮一下，同时响起相应的鼓声。



## 实现思路

#### 按下按键响起鼓声

添加一个`keydown`监听事件，当按下按键时播放相应的`audio`。

#### 字母区域亮一下

添加和移除`playing`样式。



## 实现细节

#### 如何将键盘按键与对应的字母区域和鼓声绑定？

在字母区域和鼓声的html标签中，都设置了`data-key`属性。

```js
<div data-key="65" class="key">...</div>
<audio data-key="65" src="..."></audio>
```

`data-key`与按键的`e.keyCode`对应，使用选择器选中相应的标签即可。

```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```

#### 如何保证快速按键时，每一次按键都能响起鼓声？

在播放`audio`前，将`audio.currentTime`设为`0`。

```js
audio.currentTime = 0;
audio.play();
```

#### 如何让字母区域在亮起后又马上恢复原状？

向每一个字母区域添加`transitionend`监听事件，这个事件会在`transition`完成后执行。

我们可以在该事件中移除`playing`样式，这样就使得亮起动画的`transition`结束后，亮起效果马上被移除，字母区域恢复原状。

```js
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  e.target.classList.remove('playing');
}
```

这里用到了`forEach`，语法如下，它将对`array`的每一个元素调用`function`。

```js
array.forEach(function);
```

