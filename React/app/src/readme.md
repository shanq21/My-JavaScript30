# 01 - JavaScript Drum Kit - React

## 组件拆分

- App
  - Key

## Q & A

#### 如何实现全局监听键盘事件？

经测试发现，如果直接为`App`组件添加`onKeyDown`属性，并不能实现监听键盘事件的效果。只有当组件内的输入框（若存在）获取焦点时，组件才能监听键盘按键，但这显然不是我们想要的。

```js
// 无效监听
<div onKeyDown={this.playSound} className="keys">
```

因此，想要实现全局监听键盘事件，仍然得借助原生的`window.addEventListener`方法， 并在相应的生命周期添加/删除。

```js
componentDidMount() {
  window.addEventListener('keydown', this.onKeyPressed);
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.onKeyPressed);
}
```

#### 如何导入本地音频文件？

React中导入本地音频文件需要先`require`，不能直接使用文件路径。

```js
const url = 'xxx.wav';

// 错误
const audio = new Audio(url);

// 正确
const audioUrl = require(url);
const audio = new Audio(audioUrl);
```



