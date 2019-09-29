---
title: TypeScript 入门
abbrlink: 8eff68f4
date: 2018-07-29 18:04:34
categories:
  - 03_JS
  - 原生JS
tags:
  - TypeScript
password:
description:
---

## 特性简介
TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，
而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript是一个应用程序级的JavaScript开发语言。

- TypeScript 是 JavaScript 的超集，可以编译成纯 JavaScript。
- TypeScript 跨浏览器、跨操作系统、跨主机，开源。
- Starts from JavaScript, Ends with JavaScript
- TypeScript 遵循 JavaScript 的语法和语义，方便了无数的 JavaScript 开发者。
- TypeScript 可以重用现有的 JavaScript 代码，调用流行的 JavaScript 库。
- TypeScript 可以编译成简洁、简单的 JavaScript 代码，在任意浏览器、Node.js 或任何兼容 ES3的 环境上运行。

![这里写图片描述](https://wildye.cn/static/images/blog/8eff68f4/01.jpg)

[在线 compiler 开发](http://www.typescriptlang.org/play/)

本地 compiler 开发
```
// 安装
npm install -g typescript
```
构建你的第一个TypeScript文件

`greeter.ts`：
```typescript
function greeter(person) {
  return "Hello, " + person;
}
let user = "Jane User";
document.body.innerHTML = greeter(user);
```

运行 `tsc greeter.ts` 命令生成 `greeter.js` 文件

## 类型注解
TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式
```typescript
function greeter(person: string) {
  return "Hello, " + person;
}
```

传入非指定类型的参数，重新编译，你会看到产生了一个错误。
```typescript
let user = [0, 1, 2];
document.body.innerHTML = greeter(user);
```
![这里写图片描述](https://wildye.cn/static/images/blog/8eff68f4/02.jpg)

尽管有错误，`greeter.js` 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。  
但在这种情况下，TypeScript会警告你代码可能不会按预期执行。

## 接口
在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。   
这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。
```typescript
// 使用接口来描述一个 指定字段的值类型的的对象
interface Person {
  firstName: string;
  lastName: string;
}
// 实现接口时需要保证包含了接口要求的字段结构
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
```
## 类
最后，让我们使用类来改写这个例子。 TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。

让我们创建一个Student类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，程序员可以自行决定抽象的级别。

还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
```typescript
// 创建 student 类
class Student {
  // 成员变量
  fullName: string;
  // 构造函数的参数上使用public 等同于 创建了同名的成员变量
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
// 实例化类并传入参数
let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```
重新运行tsc greeter.ts，你会看到生成的JavaScript代码和原先的一样。 TypeScript里的类只是JavaScript里常用的基于原型面向对象编程的简写。

## 运行TypeScript Web应用
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>greeter</title>
</head>
<body>
  <!-- 导入生成的 .js 文件 -->
  <script src="greeter.js"></script>
</body>
</html>
```
![这里写图片描述](https://wildye.cn/static/images/blog/8eff68f4/03.jpg)