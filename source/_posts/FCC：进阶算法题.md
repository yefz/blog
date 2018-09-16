---
title: FFC：进阶算法题
categories: JavaScript
tags:
  - FCC
---

#1. Sum All Numbers in a Range
求指定范围内所有数组之和

思路：

1. 先区分传入的两个参数大小关系
2. 使用变量 sum 来保存结果
3. 以 min 为底数，max为上限，循环累加
``` javascript
function sumAll(arr) {
	var max = Math.max(...arr);
	var min = Math.min(...arr);
	
	var sum = 0;
	
	for (var i = min; i <= max; i++){
	    sum += i;
	}
	
	return sum;
}

console.log(sumAll(5, 1)); // => 15
```
#2. Diff Two Arrays
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。

思路：

1. 使用 `.indexOf()` 为 `-1` 检测是否不包含元素，即独立的数组元素
2. 结合 `.filter()` 方法对 arr1、arr2 过滤出独立元素

``` javascript
function diff(arr1, arr2) {

	var to1 = arr1.filter(function(item){
		return arr2.indexOf(item) == -1;  // 返回第一个数组在第二个数组中不同的项
	}
	
	var to2 = arr2.filter(function(item){
		return arr1.indexOf(item) == -1;  // 返回第二个数组在第一个数组中不同的项
	}
	
	return to1.concat(to2);
}

// 简写
function diff(arr1, arr2) {

	return arr1.filter(function(item){
		return arr2.indexOf(item) == -1;
	}).concat(arr2.filter(function(item){
		return arr1.indexOf(item) == -1;
	}));

}
```
#3. Roman Numeral Converter
将给定的数字转换成罗马数字
``` javascript
function convert(num) {

	if (num <= 0) return ""; // 不转换 0 和 负值
	
	var numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	var strArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
	
	var result = "";

	var i = numArr.length;
	while (i >= 0) {
		if (num >= numArr[i]) {
			result += strArr[i];
			num -= numArr[i];
		} else {
			i--;
		}
	}

	return result;
}
convert(100);
```
#4. Where art thou

``` javascript

```
#5. Search and Replace

``` javascript

```
#6. Pig Latin

``` javascript

```
#7. DNA Pairing

``` javascript

```
#8. Missing letters

``` javascript

```
#9. Boo who

``` javascript

```
#10. Sorted Union

``` javascript

```
#11. Convert HTML Entities

``` javascript

```
#12. Spinal Tap Case

``` javascript

```
#13. Sum All Odd Fibonacci Numbers

``` javascript

```
#14. Sum All Primes

``` javascript

```
#15. Smallest Common Multiple

``` javascript

```
#16. Finders Keepers

``` javascript

```
#17. Drop it

``` javascript

```
#18. Steamroller

``` javascript

```
#19. Binary Agents

``` javascript

```
#20. Everything Be True

``` javascript

```
#21. Arguments Optional

``` javascript

```