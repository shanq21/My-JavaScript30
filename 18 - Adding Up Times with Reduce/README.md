# 18 - Adding Up Times with Reduce



## 需求描述

给定一个写有视频时长的列表，要求使用`reduce`计算视频总时长，并以`时 分 秒`的形式给出。



## 实现思路

1. 选取`videos`
2. 通过`reduce`计算总秒数
   1. 使用`video.dataset.time`访问时长属性
   2. 使用`parseFloat`将字符串转化为数字
3. 将总秒数转化为`时 分 秒`的形式