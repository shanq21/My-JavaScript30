# 15 - LocalStorage



## 需求描述

用户输入菜名点餐，菜品将出现在记录列表中。点击列表中的菜品，可以切换其状态（已完成/未完成）。

若关闭浏览器后再打开页面，之前的点菜记录依然存在。



## 实现思路

1. 向addItems表单添加submit事件
   1. 阻止`submit`事件的默认行为（刷新页面）
   2. 创建一个新item，将其添加到items中
   3. 更新itemsList的innerHTML
   4. 在`localStorage`中保存新的items
2. 向itemsList添加click事件
   1. 如果`e.target`为`input`，则继续
   2. 获取所点击`input`的`index`，修改items中对应`index`的状态值
   3. 更新itemsList的innerHTML
   4. 在`localStorage`中保存新的items



## 实现细节

#### 为什么给`itemsList`添加`click`事件，只需要判断`e.target`是否为`input`？

因为`label`和`checkbox`绑定后，点击`label`会触发`label`自己的`click`事件，同时会触发关联的`checkbox`的`click`事件（也就是会触发两次`click`事件）。

故无论用户点击`checkbox`还是`label`，都会触发`checkbox`的`click`事件，因此我们只需要判断`e.target`是否为`input`。