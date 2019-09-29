---
title: JavaScript 数组
abbrlink: f62c9be1
date: 2018-04-20 22:18:50
categories:
  - 03_JS
  - 原生JS
tags: 原生JS
description: 'JavaScript基础 - 数组篇回顾笔记'
---

## 创建
```javascript
// 构造方式，可指定长度
var arrObj = new Array([length])

// 字面量方式创建并赋值
var arrObj = ['A', 'B', 1, 2]
```

## 元素添加 `.unshift()` & `.push()`
```javascript
// 从开始位置插入新元素，返回新长度值
arrObj.unshift([item1[, item2[, ...[, itemN]]]])

// 从末尾位置插入新元素
arrObj.push([item1[, item2[, ...[, itemN]]]])
```

## 元素删除 `.shift()` & `.pop()`
```javascript
// 移除首位元素并返回该元素
arrObj.shift()

// 移除末尾元素并返回该元素
arrObj.pop()

// 移除元素，并插入新元素，返回操作的元素 start：移除位置、deleteCount移除个数
arrObj.splice(start, deleteCount[, item1[, item2[, ...[, itemN]]]])
```

## 截取 `slice()`
```javascript
// 返回数组截取的部分，若end省略则复制start之后的所有元素
arrObj.slice(start[, end])
```

## 合并 `.concat()`
```javascript
// 返回一个或多个数组或元素合并后的心数组
arrObj.concat([item1[, ...[, itemN]]])
```

## 复制
```javascript
// 返回一个新数组，非同一指向
arrObj.slice(0)
// 或者
arrObj.concat()
```

## 反转 `.reverse()`
```javascript
// 最前排最后，最后排最前，会改变原数组
arrObj.reverse()
```

## 排序 `.sort()`
```javascript
// 默认按ASCII排序，会改变原数组
arrObj.sort([softFunction])
```

## 转字符串 `.join()`
```javascript
// 返回以 separator (默认为逗号)分隔元素的字符串
arrObj.join([separator])
```

## 去重
```javascript
Array.prototype.uniq = function(){
  var arr = [], me = this, len = me.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (me[i] === me[j]) j = ++i;
    }
    arr.push(me[i]);
  }
  return arr;
  }
arrObj.uniq()

// ES6
new Set(arrObj)
```

## 检测是否含有元素
```javascript
Array.prototype.isHas= function(elem){
  for (var i = 0; i < this.length; i++) {
    if (this[i] == elem) return true;
  }
  return false;
}
arrObj.isHas(elem)

// ES6
arrObj.includes(elem)
```

## 遍历
```javascript
// 按索引/键遍历
for (let key in arr){
  console.log(arr[key]);
}
// 按值遍历
for (let value of arr){
  console.log(value);
}
// ES6 按键值对进行遍历
for (let [key, value] of arr.entries()) {
  console.log(key,value);
}
```
## 迭代
语法：`map(callback)`
```javascript
var arr = [1, 2, 3, 4, 5];

// 将每个数值元素 x 2
var arr2x = arr.map(function(val) {
  return val * 2;
})

console.log(arr2x) // => [2, 4, 6, 8, 10]
```
## 累计
语法：`reduce(callback[, initVal])`
- `callback(oldVal, newVal, index, args){}`：回调
  - `oldVal`：旧值、累加值
  - `newVal`：新值
  - `index`：新值索引
  - `args`：数组
- `initVal`：初始值
```javascript
// 数组前5个元素求和
var arr = [1, 2, 3, 4, 5];

var sum = arr.reduce(function(val, newVal) {
  return val + newVal;
}, 0);

console.log(sum); // => 15
```
## 过滤 
语法：`filter(callback)`
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 过滤出小于 6 的元素
var newArr = arr.filter(function(val){
  return val < 6;
});

console.log(newArr); // => [1, 2, 3, 4, 5]
```

## 数组元素条件判断 `.every()`
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 判断数组元素是否都小于10
console.log(arr.every(function(item){
  return item < 10
})); // => true
```