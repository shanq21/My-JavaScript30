# 06 - Type Ahead - React

## 组件拆分

- App
  - Search
  - List
    - Item
  

## Q & A

#### 如何实时获取`<input>`中的输入？

使用`ref`方法，将`<input>`对象绑定到组件属性上，便可随时访问。

```jsx
<input ref={(obj) => { this.input = obj }} type="text"
	onChange={console.log(this.input.value)}
/>
```

#### 如何高亮关键词？

在原生JS中，可以通过正则匹配直接修改`innerHTML`，但是React并不建议直接修改`innerHTML`，详见[此处](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)。

这里我用了一个可能比较笨的方法（暂时想不到更好的）：

1. 首先通过正则匹配，将文本中的关键词`keyword`替换为`@keyword@`；
2. 接着用`split('@')`方法，将文本拆分为数组对象
3. 对数组应用`map()`方法，根据`index`的奇偶性判断是否返回`className='hl'`的`<span>`对象

```jsx
const { place, input } = this.props;

const hl = new RegExp(input, 'gi');
const city = place.city.replace(hl, '@$&@').split('@');

return (
  {city.map((str, idx) => 
  	<span key={nanoid()} className={idx % 2 === 1 ? "hl" : ''}>{str}</span>
	)}
);
```

