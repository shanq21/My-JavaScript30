# 30 - Whack A Mole

[Demo](https://shanq21.github.io/My-JavaScript30/30/index.html)



## 需求描述

打地鼠～！

点击开始后，在10秒钟内，地鼠会从随机从洞中冒头又钻回，每打中一只地鼠得一分。



## 实现思路

1. 打中地鼠得分
   1. 为`mole`添加`click`事件
      1. 点中地鼠后，相应的`hole`去除`up`样式，分数加一并更新记分板
2. 游戏开始
   1. 初始化相应的变量和页面
   2. 调用`peep`函数
      1. 获取随机地洞
         1. 如果与`lastHole`相同，则再获取一次
         2. 将新的地洞设为`lastHole`
      2. 为新地洞添加`up`样式
      3. 获取随机时间，使用该时间设置新的`setTimeout`
         1. 为新地洞去除`up`样式
         2. 如果`timeup`还是`false`，则再次调用`peep`
   3. 设置游戏结束的`setTimeout`，时间到了之后将`timeup`设为`true`



## 实现细节

#### 连续多次点击开始后，游戏会整个乱掉，怎么解决？

为`peep()`和游戏结束的`setTimeout`设置相应的`timer`，在点击开始时将它们清除即可。

```js
function peep() {
  // ...
  holeTimer = setTimeout(() => {
    // ...
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  clearTimeout(holeTimer);
  clearTimeout(gameTimer);
  // ...
  gameTimer = setTimeout(() => timeUp = true, 10 * 1000);
}
```

