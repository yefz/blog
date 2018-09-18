---
title: FFC：基础算法题
categories: JavaScript
tags:
  - FCC
---

FCC 练习代码，在线偶尔会丢失，留个记录
# Reverse a String
翻转字符串

思路：

1. 把字符串转化成数组`split()`，
2. 再借助数组的`reverse()`方法翻转数组顺序，
3. 最后把数组转化成字符串`join()`。
``` javascript
function reverseString(str) {

	return str.split("").reverse().join("");
	
}
```

# Factorialize a Number
计算一个整数的阶乘

思路：

- 规律：`n! = n * ( n-1 )!`   ，节点：`0和1的阶乘为1`
```
function factorialize(n){

    if(num <= 1) return 1;
    return num * factorialize(num - 1);
    
}
```

# Check for Palindromes
检查回文字符串

思路：

1. 先转小写，避免对比的时候产出漏洞，`.toLowerCase()`
2. 清除非字母数字的字符，全部替换成空串，`.replact()`
3. 翻转字符串，然后判断是否等于翻转之前的字符，若相等，则判定为回文
``` javascript
function palindrome(str) {

	var str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
	var str2 = str1.split("").reverse().join("");
  
	if (str1 === str2) return true;
	return false;
	
}
```
Codepen：https://codepen.io/wildye/pen/yjmxyz?editors=0012

# Find the Longest Word in a String
找出最长单词

思路：

1. 先将字符串的字母分割为数组元素 `.split(" ")`
2. 使用 `.map()` 方法迭代每个元素，返回其 `.length`，这样我们得到了一个包含每个单词长度的数组
3. 使用 `.sort()` 对数据进行逆排序，然后取第一个子元素
``` javascript
function findLongestWord(str) {
  
	return str.split(" ").map(function(val){
		return val.length;
	}).sort(function(a, b){
	    return b - a;
	})[0];
	
}
```

# Title Case a Sentence
句中单词首字母大写

思路：

1. 转小写 `.toLowerCase()` 并分割 `.split(/\s+/)` ，匹配每个单词
2. 使用 `.map()` 方法将每个元素首字母转大写

``` javascript
function titleCase(str) {

	return str.toLowerCase().split(/\s+/).map(function(val) {  
		return val.slice(0, 1).toUpperCase() + val.slice(1);  
	}).join(" ");
  
}
```

# Return Largest Numbers in Arrays 
找出多个数组中的最大数

思路：

- 使用 `.map()`嵌套来实现

``` javascript
function largestOfFour(arr) {

	return arr.map(function(val) {
		return val.sort(function(a, b){
			return b - a;
		})[0];
	});
}

var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(arr)); // => [5, 27, 39, 1001]
```

# Confirm the Ending
检查字符串结尾

思路：

- 当`str`倒数 `target.length`的字符串等于`target`，条件成立

``` javascript
function confirmEnding(str, target) {

	return str.substr(-target.length) == target;

}

confirmEnding("Bastian", "n");
```

# Repeat a string repeat a string
重复输出字符串

思路：

1. 当传入的 `num` 次数大于 `0` 才执行，否则返回空串 `""`
2. 利用`.repeat()` 生成指定连接次数的字符串

``` javascript
function repeat(str, num) {

	if (num > 0) return str.repeat(num);
	return "";
	
}

repeat("abc", 3);
```

# Truncate a string
截断字符串，如果字符串的长度比指定的参数num长，则把多余的部分用`...`来表示。

思路：

1. 当传入 `num <= 3` 时，直接连接 `...`
当传入 `num >= str` 时，直接返回 `str`
2. 需要考虑到 `...` 也会计入 `length`，故 `num - 3`

``` javascript
function truncate(str, num) {

	var str1="";
	
	// 发现 if else 也能省略大括号
	if (num<=3)  
		str1=str.slice(0,num)+"...";  
	else if (num>=str.length)
		str1=str;  
	else
		str1=str.slice(0,num-3)+"...";

	return str1;
  
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
```

# Chunky Monkey
猴子吃香蕉, 分割数组

思路：

- 每次切割 `.slice()` 后将索引累加，下次切割从累加索引处开始截取
``` javascript
function chunk(arr, size) {

	var newArr = [];
	
	for (var i = 0; i < arr.length; i += size){
	    newArr.push(arr.slice(i, i + size));
	}
	
	return newArr;

}

chunk(["a", "b", "c", "d"], 2); // => [["a", "b"], ["c", "d"]]
```

# Slasher Flick
截断数组

思路：

- 此题 so easy
``` javascript
function slasher(arr, howMany) {
	return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
```

# Mutations
比较字符串，如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

思路：

- 清除大小写差异，将第一个字符串`arr[0]`、第二个字符串`arr[1]`转小写
- 将 `arr[0]`、`arr[1]` 转为数组，切割每个字符
- 在 `arr[0]` 数组中通过 `indexOf()` 遍历每一个`arr[1]`的元素，若返回 `-1`，则表示无此项，返回 `false`
- 反之，没有未匹配到的，则返回 `true`

``` javascript
function mutation(arr) {

	var arr1 = arr[0].toLowerCase();
	var arr2 = arr[1].toLowerCase();
		
	for (var i in arr2) {
		if (arr1.indexOf(arr2.charAt(i)) === -1) return false; 
	}
	return true;

}

mutation(["hello", "hey"]);
```

# Falsy Bouncer
过滤数组假值

思路：

1. 使用`filter()`方法，它返回一个过滤后的新数组, 使用`Boolean`布尔对象包含元素。
2. 如果`Boolean`构造函数的参数不是一个布尔值,则该参数会被转换成一个布尔值

``` javascript
function bouncer(arr) {
	arr.filter(function(item,index,array){
		return Boolean(item);
	})
}

// 简写
function bouncer(arr) {
	return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
```

# Seek and Destroy
摧毁数组

思路：

1. 使用 `arguments` 伪数组接收后续参数
2. 使用 `indexOf()`方法检索元素是否存在，若返回 `-1`，则不存在 
3. 使用 `filter()` 过滤

``` javascript
function destroyer(arr) {

	var args = Array.apply(null, arguments).slice(1);

	return arr.filter(function(item) {
		return args.indexOf(item) < 0;
	});
	
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // => [1, 1]
```

# Where do I belong
数组排序并找出元素索引

思路：

1. 先对数组进行正序排序 `sort()`，并存入新数组 `arrs`
2. 查找 `num` 在 `arrs` 内是否存在，若存在，则返回 `num` 的索引
3. 若不存在，则递归调用自身，并将`num`加入 `arr` 数组
``` javascript
function where(arr, num) {
	var arrs = arr.sort(function(a, b) {
		return a - b;
	});

	return arrs.indexOf(num) != -1 ? arrs.indexOf(num) : where(arr.concat(num), num);
}
```

# Caesars Cipher
凯撒密码

思路：

1. 遍历每一个字符串每一个字符
2. 转化为对应 `ASCII` 编码
3. 仅对字母转化，`[65~77]`、`(77~91)`，注意对边界要做处理

``` javascript
function rot13(str) {

	var  str1 = [];

	for (var i in str) {

		var num = str[i].charCodeAt();

        if (num >= 65 && num <= 77)
            num = num + 13;
        else if (num > 77 && num < 91)
            num = num - 13;

        str1.push(String.fromCharCode(num));
    }

    return str1.join("");

}
```