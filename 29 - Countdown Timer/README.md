# 29 - Countdown Timer

[Demo](https://shanq21.github.io/My-JavaScript30/29/index.html)



## 需求描述

实现一个倒计时器。当用户点击预设的按钮或输入自定义时间时，计时器开始倒计时，直到00:00。



## 实现思路

1. 声明一个计时器`timer`
2. 向按钮添加`click`事件
   1. 获取预设时间
   2. 调用`setTimer`函数
3. 向表单添加`submit`事件
   1. 清除默认行为
   2. 获取自定义时间
   3. 调用`setTimer`函数
4. `setTimer()`
   1. 清除原先的`timer`
   2. 计算结束时间`then`
      1. 直接使用时间戳`then = Date.now() + seconds * 1000`
   3. 更新倒计时和结束时间
   4. 设置新的`timer`
      1. 使用`setInterval`创建
      2. 每次计算剩余的秒数，当剩余秒数小于0时，停止计时
      3. 更新倒计时和结束时间



## 实现细节

#### 如何快速计算时间？

使用`Date.now()`获取当前时间戳，速度会比`new Date()`更快。时间戳以毫秒为单位，计算时需注意。

```js
const then = Date.now() + seconds * 1000;
// ...
const secondsLeft = Math.round((then - Date.now()) / 1000);
```

需要使用`Date()`方法时，可以通过`new Date(timestamp)`来转化为相应的时间日期。

```js
const endTime = new Date(timestamp);
const hr = endTime.getHours() % 12;
const min = endTime.getMinutes();
```

