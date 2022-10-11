# 30 - Whack A Mole - React

## 组件拆分

- App
  - Hole
  

## Q & A

#### 如何利用组件生命周期函数清除Timer？

```jsx
componentWillUnmount() {
  const { holeTimer, gameTimer } = this.state;
  holeTimer && clearTimeout(holeTimer);
  gameTimer && clearTimeout(gameTimer);
}
```



