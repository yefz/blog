---
title: ES6 新增数组操作方法
date: 2018-10-12 22:28:26
publish: true
categories:
  - JavaScript
tags:
  - ECMAScript 2015
description: EC6新增的数据方法
---

:::tip
ECMA Script 2015 新增数组 api
:::

## find()
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索

``` javascript
const arr = [1, "2", 3, 3, "2"];

console.log(arr.find(n => typeof n === "number")); // => 1

// value：每一次迭代查找的数组元素;
// index：每一次迭代查找的数组元素索引;
// arr：被查找的数组。
arr.find(value, index, arr) => typeof n === "number");
```

## findIndex()
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索

``` javascript
const arr = [1, "2", 3, 3, "2"];

console.log(arr.findIndex(n => typeof n === "number")); // => 0
```

## fill()
用新元素替换掉数组内的元素，可以指定替换下标范围

``` javascript
arr.fill(value, start, end);
```

## copyWithin()
选择数组的某个下标，从该位置开始复制数组元素，默认从0开始复制。也可以指定要复制的元素范围

``` javascript
arr.copyWithin(target, start, end)

const arr = [1, 2, 3, 4, 5];
// [1,2,3,1,2] 从下标为3的元素开始，复制数组，所以4, 5被替换成1, 2
console.log(arr.copyWithin(3));

const arr1 = [1, 2, 3, 4, 5];
// [1,2,3,2,3] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，所以4, 5被替换成2, 3
console.log(arr1.copyWithin(3, 1));

const arr2 = [1, 2, 3, 4, 5];
// [1,2,3,2,5] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，结束位置为2，所以4被替换成2
console.log(arr2.copyWithin(3, 1, 2));
```

## from()
将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组

``` javascript
const bar = ["a", "b", "c"];

Array.from(bar);    // => ["a", "b", "c"]
Array.from('foo');  // => ["f", "o", "o"]
```

## of()
用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异

``` javascript
Array();            // => []
Array(3);           // => [, , ,]
Array(3, 11, 8);    // => [3, 11, 8]
Array.of(7);        // => [7]
Array.of(1, 2, 3);  // => [1, 2, 3]
Array(7);           // => [ , , , , , , ]
Array(1, 2, 3);     // => [1, 2, 3]
```

## entries()
返回迭代器：返回键值对

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.entries()) { console.log(v) }  // => [0, 'a'] [1, 'b'] [2, 'c']

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.entries()) { console.log(v) }  // => ['a', 'a'] ['b', 'b'] ['c', 'c']

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.entries()) { console.log(v) }  // => ['a', 'a'] ['b', 'b']
```

## values()
返回迭代器：返回键值对的value

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b' 'c'

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b' 'c'

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b'
```

## keys()
返回迭代器：返回键值对的key

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.keys()) { console.log(v) }  // => 0 1 2

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.keys()) { console.log(v) }  // => 'a' 'b' 'c'

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.keys()) { console.log(v) }  // => 'a' 'b'
```

## includes()
判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误

``` javascript
const arr = [1, 2, 3];

arr.includes(2);  // => true
arr.includes(4);  // => false
```