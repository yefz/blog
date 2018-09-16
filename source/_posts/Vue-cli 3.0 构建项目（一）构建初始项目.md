---
title: Vue-cli 3.0 构建项目（一）构建初始项目
categories: Vue
tags:
  - Vue-cli 3.0
---

官方文档 https://cli.vuejs.org/
#1. 环境配置
- 安装 Vue-cli `3.0` 脚手架工具
- 终端输入运行
```
npm install -g @vue/cli
```
- 安装完成后，输入 `vue -V` 查看是否安装成功
![vue版本](https://img-blog.csdn.net/20180630211604504)
- 新的命令语句
![这里写图片描述](https://img-blog.csdn.net/20180630223641230)

#2. 初始化项目
- 终端输入运行
```
vue create <projectName>
```
与 `2.0` 不同的是这里不再是选择模板，而是预设 `presets`
![这里写图片描述](https://img-blog.csdn.net/20180630212309396)
##默认配置
- 选择 [默认] 将直接开始安装
![这里写图片描述](https://img-blog.csdn.net/20180630212512527)
##自定义配置
- 选择 [自定义]
方向键上下移动，空格选中，Enter确定
![这里写图片描述](https://img-blog.csdn.net/20180630214533983)
![这里写图片描述](https://img-blog.csdn.net/20180630215139224)
##自定义细节配置
1. 是否使用class风格的组件语法
![这里写图片描述](https://img-blog.csdn.net/20180630215412727)
2. 是否使用babel做转义
![这里写图片描述](https://img-blog.csdn.net/20180630215514100)
3. 选择CSS预处理类型
![这里写图片描述](https://img-blog.csdn.net/20180630215712368)
4. 选择语法检测规范
![这里写图片描述](https://img-blog.csdn.net/20180630215831621)
5. 选择 保存时检查 / 提交时检查
![这里写图片描述](https://img-blog.csdn.net/20180630220144146)
6. 选择配置信息存放位置，单独存放或者并入package.json
![这里写图片描述](https://img-blog.csdn.net/20180630220342169)
7. 是否保存当前预设，下次构建无需再次配置
![这里写图片描述](https://img-blog.csdn.net/20180630220444266)

完成安装
![这里写图片描述](https://img-blog.csdn.net/20180630222616446)
基本目录结构相对 2.0 精简了不少
![这里写图片描述](https://img-blog.csdn.net/2018063022281268)