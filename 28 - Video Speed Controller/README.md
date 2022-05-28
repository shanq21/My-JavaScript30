# 28 - Video Speed Controller



## 需求描述

当鼠标移到速度条上时，根据鼠标的位置实时调节视频的播放速度。



## 实现思路

1. 视频的播放速度为`videoElem.playbackRate`
2. 向视频条添加`mousemove`事件
   1. 鼠标当前相对于文档的坐标为`e.pageY`，速度条相对于文档的坐标为`speed.offsetTop`。因此，速度滑块的长度`y`为两者之差，相应的百分比`percent`等于`y / speed.offsetHeight`
   2. 最小播放速度为0.4，最大播放速度为4，故当前的播放速度应为`percent * (max - min) + min`
   3. 设置相应播放速度和速度条样式即可

