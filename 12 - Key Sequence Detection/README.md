# 12 - Key Sequence Detection



## 需求描述

每当用户敲下一串秘密代码时，屏幕上会出现惊喜！（注：调用`cornify_add()`）

秘密代码可多次输入，每次都有新惊喜哟～



## 实现思路

1. 设置秘密代码`secretCode`
2. 设置一个数组`pressed`，用以表示已经按下的键
3. 为全局添加`keyup`事件
   1. 每当用户敲下一个按键，向`pressed`添加`e.key`
   2. 如果`pressed.length > secretCode.length`，执行`pressed.shift`
   3. 判断秘密代码和`pressed`是否相等，如果相等则调用`cornify_add()`
      1. 调用完`cornify_add()`后，清空`pressed`（`pressed.length = 0`）



