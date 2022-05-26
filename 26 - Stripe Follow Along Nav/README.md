# 26 - Stripe Follow Along Nav



## 需求描述

现有一个导航栏，要求鼠标移到导航栏项目上时，相应的内容出现，同时背景的白块跟随移动。



## 实现思路

1. 背景白块、导航内容的样式和标签已写好，由于`opacity: 0`（和`display: none`）所以看不到
2. 为导航中的每一项添加`mouseenter`事件
   1. 添加相关样式
   2. 获取`this`坐标和宽高，设置背景白块的坐标和宽高
3. 为导航中的每一项添加`mouseleave`事件
   1. 去除相关样式



## 实现细节

#### 明明为`background`设置了与`dropdown`相同的坐标，为什么它们不对齐？

我们使用`dropdowngetBoundingClientRect()`获取的是`dropdown`相对于**窗口**的坐标，而为`background`设置的是相对于**nav**的坐标。

这是因为`background`的样式为`position: absolute`，而nav是它的第一个`position: relative`父级元素，所以它的坐标是相对于nav的而不是窗口的。

因此，想要为`background`设置正确的坐标，需要再减去`nav.getBoundingClientRect()`的坐标。

```js
const dropdown = this.querySelector('.dropdown');
const dropdownCoords = dropdown.getBoundingClientRect();
const navCoords = nav.getBoundingClientRect();

const coords = {
  top: dropdownCoords.top - navCoords.top,
  left: dropdownCoords.left - navCoords.left,
  width: dropdown.offsetWidth,
  height: dropdown.offsetHeight
};

background.style.width = `${coords.width}px`;
background.style.height = `${coords.height}px`;
background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
```



#### 鼠标移入导航后，`dropdown`的内容会先于背景出现，视觉上不太协调，怎么解决？

这是因为背景完全出现之前有`transition`动画时间，而内容没有。

一个解决方法是，将内容出现设为`setTimeout`，延时100ms左右，这样看上去就比较协调了:)

```js
this.classList.add('trigger-enter');
setTimeout(() => {
  // 这一行的意思是，延时到了之后，如果还处于enter状态，才会激活active使内容出现
  // 如果不判断是否仍处于enter，就可能会出现鼠标已经移开但内容还继续出现
  this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active');
}, 100);
```





