---
title: Tool Sunny-Ngrok 内网穿透
date: 2018-10-01 10:48:22
publish: true
categories:
  - Tools
tags:
---

在开发钉钉应用或微信小程序时，会用到内外穿透工具来方便外网访问应用

遇到的问题及解决方案

## 打开页面报错Invalid Host header
在`webpack.dev.conf.js`文件中，增加`disableHostCheck: true`
```
devServer: {
  disableHostCheck: true,
  ...
}
```