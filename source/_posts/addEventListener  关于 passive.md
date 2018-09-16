---
title: addEventListener  关于 passive
---

语法： `el.addEventListener(type, listener[, useCapture])`

- `el`：事件对象
- `type`：事件类型，click、mouseover 等
- `listener`：事件处理函数，也就是事件触发后的回调
- `useCapture`：布尔值，规定是否是捕获型，默认为 `false`（冒泡）

2015年底，为了扩展新的选项，从而自定义更多的行为

- DOM 规范做了修订：`addEventListener()` 的第三个参数可为 `{}` **对象**
``` javascript
el.addEventListener(type, listener, {
  capture: false, // === useCapture
  once: false,    // 是否设置单次监听
  passive: false  // 是否让 阻止默认行为(preventDefault()) 失效
})
```
如何移除 `{ passive: true }` 的监听事件
``` javascript
// 直接省略第三个参数
el.removeEventListener(type, listener)

// 如果添加了 capture: true 的事件，则加上
el.removeEventListener(type, listener, true)
el.removeEventListener(type, listener, {capture: true})
```