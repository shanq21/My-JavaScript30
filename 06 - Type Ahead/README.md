# 06 - Type Ahead



## 需求描述

现有美国各个城市信息的json链接，要求实现实时的输入建议。

每当用户在搜索框中输入或删除一个字母，系统都会实时提供输入建议，显示所有与当前已输入内容相匹配的城市名/州名，并高亮相匹配的名称片段。

输入建议将显示对应的城市名、州名、人口数量，按人口数量排序，人口数量使用三位分节法表示。



## 实现思路

1. 使用`fetch`获取城市信息，保存在数组`cities`中
2. 向搜索框添加`input`监听事件，每当事件触发：
   1. 获取搜索框当前内容`value`
   2. 在`cities`中筛选城市名或州名包含`value`的项，将筛选结果保存在数组`results`中
      1. 使用正则`match()`判断是否包含
   3. 选中建议列表`suggestions`，把`results`中相应的内容写成HTML，替换`suggestions`的`innerHTML`
      1. 对于城市名和州名，通过正则`replace()`为相匹配的部分添加`<span class="hl">`
      2. 对于人口数量，通过正则`replace()`每隔三位添加一个逗号



## 实现细节

### 异步fetch

由于`await`只能在`async`函数中使用，在这里我们用原始的`promise.then()`的方式来实现异步fetch。

```js
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

// 如果是在async函数中
async fucntion(url) {
  const response = await fetch(url);
  const data = await response.json();
  // ...
}
```



### 监听事件

向搜索框添加`input`监听事件后，每当搜索框中的内容改变，包括用户键盘输入、删除、拷贝等，都会触发该事件。

```js
const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', handleInput);
```



### 正则表达式

当我们想要查找和替换字符串时，都可以考虑使用`str.replace(RegExp, str|func)`。



#### 如何实现在城市名和州名中高亮相匹配的部分？

为了实现高亮效果，我们应在城市名和州名中查找到`value`子字符串，然后使用`<span class="hl">`将这些子串包裹起来。

如果使用正则来实现这个想法，那么关键细节在于：

1. 使用`new RegExp()`的方式来声明正则表达式。因为`value`是一个变量，不能直接用`/.../`的方式声明。
2. 在`replace()`的第二个参数中，`$&`表示正则查找到的子串，把它包裹起来即可。

```js
const hl = new RegExp(value, 'gi');
const city = place.city.replace(hl, '<span class="hl">$&</span>');
const state = place.state.replace(hl, '<span class="hl">$&</span>');
```



#### 如何实现三位分节法？

首先需要明确整体思路：我们使用正则表达式，是想要找到每一个逗号应该插入的位置。

```js
const comma = /(?<=\d)(?=(\d{3})+$)/g;
const population = place.population.replace(comma, ',');
```

现在来拆解正则表达式`comma`：

1. 对于每个逗号，它之后的数字个数（从逗号到结尾）总是3的倍数。所以，使用前瞻断言`(?=(\d{3})+$)`来实现这一点。
2. 同时，每个逗号之前，至少得有一个数字。所以，使用后瞻断言`(?<=\d)`来实现这一点。
3. 把两个断言结合起来即可。



