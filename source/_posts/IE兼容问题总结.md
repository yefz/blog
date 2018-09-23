---
title: IE兼容问题总结
abbrlink: 8bd15521
date: 2018-03-22 17:19:39
tags:
---

## 获取滚动条位置
- `window.pageXOffset` 和 `window.pageYOffset` 在`IE8`及以下是不兼容的
- 当 `document.body.scrollLeft` 起作用时 `document.documentElement.scrollLeft` 失效，反之亦然
- `document.body.scrollTop` 正常调用失效，需封装
```javascript
// 兼容解决方案：
function getScrolloffset(){
  if(window.pageXOffset){
    return{
      x : window.pageXOffset,
      y : window.pageYOffset
    }
  }else{
    return{
      x : document.body.scrollLeft + document.documentElement.scrollLeft,
      y : document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}
```

## 获取视口（viewport）尺寸
`document.compatMode`：查看浏览器解析模式
```javascript
// CSS1Compat 标准模式
document.documentElement.clientWidth
document.documentElement.clientHeight

// BackCompat 混杂模式
document.body.clientWidth
document.body.clientHeight
```
```javascript
// 兼容解决方案：
function getViewport(){
  if (window.innerWidth) {
    return{
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }else{
    if(document.compatMode == "BackCompat"){
      return{
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    }else{
      return{
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}
```
## 获取元素位置 IE8及以下缺失属性宽/高属性
```javascript
el.getBoundingClientRect())                 // IE8及以下缺失 width 和 height 属性
console.log("Width:" + div.offsetWidth);;   // IE7以下不加边框尺寸
console.log("Height:" + div.offsetHeight);  // IE7以下不加边框尺寸
console.log("Left:" + div.offsetLeft);      // IE7及以上 OK
console.log("Top:" + div.offsetTop);        // IE7及以上 OK
```
`clientWidth`、`clientHeight`、`scrollWidth`、`scrollHeight`

尺寸（有滚动条） = `content + 3px`;

尺寸（无滚动条） = `content + padding * 2`;