---
title: JavaScript 常用方法封装
date: 2018-04-20 12:44:12
publish: true
categories:
  - JavaScript
tags: 原生JS
---

## 获取数据类型，返回字符串
>有传参则判断传参类型，没有则判断调用对象类型，返回字符串
```javascript
// 检测是否已存在此方法
Object.prototype.getType = Object.prototype.getType || function() {
  var me = this;
  // 兼容检测 null、undefined 类型
  if (arguments.length == 1) me = arguments[0];
  return Object.prototype.toString.call(me).slice(8, -1).toLowerCase();
};

// 使用示例
console.log(getType(null));          // -> null
console.log(getType(undefined));     // -> undefined
console.log('abc'.getType());        // -> string
console.log(123 .getType());         // -> number
console.log(true.getType());         // -> boolean
console.log([].getType());           // -> array
console.log({}.getType());           // -> object
console.log(new Date().getType());   // -> date
console.log(new Error().getType());  // -> error
console.log(/^[A-Z]/.getType());     // -> regexp
console.log(function(){}.getType()); // -> function
```

## 字符串格式化（仿ES6模板字符串）
```javascript
String.prototype.format = String.prototype.format || function () {
  var e = arguments;
  return this.replace(/\${(\d+)}/g, function(t, n) {
    return typeof e[n] != "undefined" ? e[n] : t;
  })
};

// 使用示例
var template = "世界如此${0}，你却如此${1}！";
console.log(template.format("美妙","暴躁")); // => 世界如此美妙，你却如此暴躁！
```
## 异步加载JS
```javascript
/**
* [loadScript 异步加载JS]
* @param  {[String]}   url    [js文件路径]
* @param  {Function} callback [回调函数]
* @return {[type]}            [element]
*/
function loadScript (url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState){
    // IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}();

// 使用示例
loadScript('one.js', function() {
  // code...
})
```

## DOM事件兼容解决方案
```javascript
var eventHelper = {
  // 绑定事件
  addEvent: function(el, type, handler) {
    if (el.addEventListener) {
      el.addEventListener(type, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, handler);
    } else {
      el['on' + type] = handler;
    }
  },
  // 解绑事件
  removeEvent: function(el, type, handler) {
    if (el.removeEventListener) {
      el.removeEventListener(type, handler, false);
    } else if (el.detachEvent) {
      el.detachEvent('on' + type, handler);
    } else {
      el['on' + type] = null;
    }
  },
  // 获取事件对象
  getEvent: function(e) {
    return e ? event : window.event;
  },
  // 获取事件类型
  getType:function(e){
    return e.type
  },
  // 获取事件元素
  getElement:function(el){
    return el.target || el.srcElement;
  },
  // 阻止事件默认行为
  preventDefault:function(e){
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }
  },
  // 阻止事件冒泡
  stopPropagation:function(e){
    if(e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
  }
}
```
```html
<a href = 'login.html' id = 'btn'>login</a>
```

```javascript
// 使用示例
var login = document.getElementById('btn');
// 绑定事件
eventHelper.addEvent(login, 'click', function(e){
  preventDefault(e);   // 阻止默认行为
  stopPropagation(e);  // 阻止冒泡
  getEvent(e);         // 获取事件对象
  getType(e);          // 获取事件类型
  getElement(e);       // 获取事件元素
})
// 解绑事件
eventHelper.removeEvent(login, 'click', function(){})
```

## 拷贝对象
```javascript    
// 检测是否以已存在
Object.prototype.deepClone = Object.prototype.deepClone || function(obj, proto){
  // 当为空值或不为对象时，直接返回
  if (obj == null || typeof obj !== 'object') return obj;

  var copy;

  // 根据第二个参数决定是否复制原型
  if(proto && typeof(proto) === "boolean") {
    copy = Object.create(Object.getPrototypeOf(obj));
    console.log(copy);
  }

  // Date类型处理
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Object or Array
  if (obj instanceof Array || obj instanceof Object) {
    copy = (obj instanceof Array)?[]:{};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key]);
    }
    return copy;
  }
  throw new Error("Type Error");
}

// 使用示例
var newObj = deepClone(oldObj);
```

## 鼠标滚轮事件处理
```javascript
function MouseWheelHandle (obj,handle){
  var info = navigator.userAgent;  // 获取浏览器信息
  var down = null;                 // 滚轮状态 true 下 false 上

  // Firefox
  if (info.indexOf("Firefox") != -1) {
    obj.addEventListener("DOMMouseScroll", function(event) {
      var e = event || window.event;
      down = e.detail > 0 ? true : false;
      handle.call(obj, down, e);
    }, false);
  // Other
  } else {
    obj.onmousewheel = function(event){
      var e = event || window.event;
      down = e.detail > 0 ? true : false;
      handle.call(obj, down, e);
    }
  }
}
```

## 函数设置执行间隔（针对频繁触发的事件）
```javascript
/**
* [throttle 节流]
* @param  {Function} fn  [执行函数]
* @param  {[object]} obj [调用对象]
* @return {[type]}       [undefined]
*/
function throttle(fn, obj) { 
  clearTimeout(fn.t);
  fn.t = setTimeout(function(){
    fn.call(obj);
  }, 500);
}

// 使用示例
function handler() {
    // code...
}
window.onresize = function(){  
  throttle(handler, window); 
};  
```

## 随机生成
- 颜色
```javascript
function getColor(type) {
  var r = Math.floor(Math.random()*256),
      g = Math.floor(Math.random()*256),
      b = Math.floor(Math.random()*256);
  
  if (type) {
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
```
- 数值
```javascript
function getRandom(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}
```

## 获取IE浏览器版本
```javascript
function IEVersion() {
  // 取得浏览器的userAgent字符串
  var userAgent = navigator.userAgent;
  // 判断是否IE<11浏览器
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  // 判断是否IE的Edge浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if(fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6;//IE版本<=7
    }
  } else if (isEdge) {
    return 'edge';//edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1;//不是ie浏览器
  }
}
```