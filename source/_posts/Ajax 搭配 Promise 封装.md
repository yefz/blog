---
title: Ajax 搭配 Promise 封装
abbrlink: 5a21beee
date: 2018-05-05 18:37:41
categories: JavaScript
tags:
  - 原生JS
  - 异步
---

# 简述

## Ajax（Asynchronous JavaScript And XML）
是一种创建交互式网页应用的开发技术、改善用户体验，实现无刷新效果
优点：

- 无需插件支持
- 页面无刷新，异步通信，具有更快的响应能力，更好的用户体验
- 按需请求数据，减少冗余请求，提高性能

缺陷：

- 使浏览器的回退机制失效
- 对 搜索引擎 ，SEO优化 的支持不足
- 安全问题，暴露了与服务器交互的细节

依赖 `XMLHttpRequest` 对象实现

- 设置请求头 

| type | code |
| :- | :- |
| 表单字符类型 | `application/x-www-form-urlencoded` |
| 表单类型 | `multiline/form-data` |
| json 类型 | `application/json` |
|  | `text/xml` |
``` javascript
xhr = new XMLHttpRequest();
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
```

## Promise
	是es6中的一个异步处理对象，从它可以获取异步操作的消息
	
- Promise对象代表一个异步操作，有三种状态：
	- `pending` 进行中
	- `fulfilled` 已成功
	- `rejected` 已失败
- 对象的状态不受外界影响，一旦状态改变，就不会再变
- Promise对象的状态改变，只有两种可能：
	- `pending` => `fulfilled`
	- `pending` => `rejected`
# JavaScript
- 原生 `ajax` 和 `Promise` 封装
``` javascript
function getAjax(type, url, data) {
	
	return new Promise(function(resolve, reject) {

		var xhr = null
		if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
	
		xhr.open(type, url, true);
	
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(xhr)
			}
		}
	
		if (type == 'GET') {
			xhr.send()
		} else {
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send(formatParams(data));
		}

	})
	
	function formatParams(data) {
    var arr = [];
    for(var name in data){
      arr.push(name + '=' + data[name]);
    }
    return arr.join("&");
	}
}
```
# jQuery
- `$.ajax` 和 `Promise` 封装
``` javascript
function getAjax(type, url, data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
      url: url,
      type: type,
      data: data,
      sussess: function(data) {
        resolve(data)
      },
      error: function(error) {
        reject(error)
      }
    })
	})
}
```
- 调用示例
``` javascript
var taskOne = getAjax('GET', 'http://localhost:8080/Test', {id: 5, sex: 'male'});
var taskTwo = getAjax('POST', 'http://localhost:8080/Test', {id: 5, sex: 'male'});

taskOne.then(function(data){
	console.log(data)
}, function(error){
	console.log(error.status)
})
```
