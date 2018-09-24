---
title: 构建工具 Gulp
abbrlink: 22c087c5
date: 2018-04-28 20:26:07
tags:
---

## 基于流
Gulp是以 Nodejs中的stream(流) 为媒介，不需要像 Grunt 那样频繁的生成临时文件

- 首先获取到需要的 stream，
- 然后通过 stream 的 `.pipe()` 方法把流导入到 Gulp的插件中
- 经过插件处理后的流又可以继续导入到其他插件中，
- 最后通过 `gulp.dest()` 把流写入到文件中。

```javascript
// 导入模块
const gulp = require('gulp');

// 导入 gulp 模块的扩展插件
const less = require('gulp-less');      
const mincss = require('gulp-cssmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// 定义默认任务
gulp.task('default', function(){
  gulp.src('static/less/*.less')   // 读取一个或多个文件，返回文件流
  .pipe(less())                    // 将流导向 less()   编译LESS
  .pipe(mincss())                  // 将流导向 mincss() 压缩CSS
  .pipe(concat('master.css'))      // 将流导向 concat() 合并文件
  .pipe(rename({                   // 将流导向 rename() 重命名-添加文件后缀  
      suffix: ".min"
  }))
  .pipe(gulp.dest('static/css'));  // 将流生成文件
})
```

## 安装
- gulp 安装
```javascript
// 全局安装
npm install -g gulp

// 为了版本的灵活性, 在使用 gulp 的项目中再次安装
npm install gulp

// 如果需要写入 package.json 中, 加上 --save-dev
npm install --save-dev gulp
```

- 扩展插件安装
```
npm install gulp-less --save
```

## 使用
和 bower 类似，需要在项目根目录下新建主文件 `gulpfile.js`

- 目录结构：
```
├── gulpfile.js
├── node_modules
│   └── gulp
└── package.json
```
- 运行 gulp 任务
需切换到 `gulpfile.js` 所在目录
```git
// 执行默认名为 default 的任务
gulp

// 执行指定任务
gulp miniJS
gulp compileLess
```
## API - `gulp.task()`
定义任务
```
var gulp = require('gulp');

// 默认任务
gulp.task('default', function(){

});

// 自定义任务
gulp.task('compileLess', function(){

});
```

## API - `gulp.src()`
- `gulp.src()` 读取文件，返回文件流，后续使用`.pipe()` 进行链式调用
[读取文件匹配规则](#src)
```
gulp.task('compileLess', function(){
  gulp.src('static/less/*.less')
  .pipe(less());
})
```

## API - `gulp.desk()`
将管道中的文件流生成文件
```
gulp.task('compileLess', function(){
  gulp.src('static/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('static/css'));
})
```

## API - `gulp.watch()`
- 监听任务
```
// 执行多个任务
gulp.task('default', ['compileLess', 'miniJS'])

// 监听任务
var watcher = gulp.watch('static/js/*.js', ['miniJS', 'mergeJS'])

// 当文件发生改变时执行
watcher.on('change', function(event) {
  console.log(event.path + 'File complete finish')
})
```

## gulpfile.js
```javascript
// 导入模块
const gulp = require('gulp');
const less = require('gulp-less');
const mincss = require('gulp-cssmin');
const minjs = require('gulp-uglify');
const concat = require('gulp-concat');

// 定义 [编译LESS文件] 任务
gulp.task('compileLess', function(){
  // 选中所有文件
  gulp.src('static/less/*.less')
  .pipe(less()) // 编译 less to CSS
  .pipe(concat()) // 合并文件
  .pipe(mincss()) // 压缩 CSS 文件
  .pipe(gulp.dest('static/css')); // 输出文件夹，若无则创建
})

// 定义 [压缩JS文件] 任务
gulp.task('miniJS', function(){
  // 选中文件
  gulp.src('static/js/main.js')
  .pipe(minjs()) // 压缩 JS 文件
  .pipe(gulp.dest('static/js')); // 输出文件夹，若无则创建
})

// 定义 [合并JS文件] 任务
gulp.task('mergeJS', function(){
  // 选中文件
  gulp.src(['static/js/one.js', 'static/js/two.js'])
  .pipe(concat('main.js')) // 压缩 JS 文件
  .pipe(gulp.dest('static/js')); // 输出文件夹，若无则创建
})

// 执行多个任务
gulp.task('default', ['compileLess', 'miniJS'])

// 监听任务
var watcher = gulp.watch('static/js/*.js', ['miniJS', 'mergeJS'])

// 当文件发生改变时执行
watcher.on('change', function(event) {
  console.log(event.path + 'File complete finish')
})
```

## gulp 常用插件
```javascript
npm install --save gulp-less           // 编译LESS
npm install --save gulp-autoprefixer   // 私有前缀补全
npm install --save gulp-htmlmin        // HTML压缩
npm install --save gulp-cssmin         // CSS压缩
npm install --save gulp-uglify         // JS压缩
npm install --save gulp-imagemin       // 图片压缩
npm install --save gulp-rname          // 重命名
npm install --save gulp-concat         // 合并
npm install --save gulp-rev            // 添加版本号
npm install --save gulp-rev-collector  // 内容替换
npm install --save gulp-livereload     // 实时可视化、自动刷新
npm install --save gulp-load-plugins   // 一次性加载
```
>引用
>https://www.cnblogs.com/2050/p/4198792.html
