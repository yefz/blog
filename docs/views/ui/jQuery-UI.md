---
title: jQuery UI
abbrlink: 3505c7d5
date: 2018-03-19 20:48:33
categories:
  - UI
tags: jquery-ui
password:
description:
---

jQuery UI包含了许多维持状态的小部件（Widget），因此，它与典型的 jQuery 插件使用模式略有不同。所有的 jQuery UI 小部件（Widget）使用相同的模式。

# 交互

## 缩放
```javascript
$().resizable() //默认样式
$().resizable({
  animate: true, //开启动画效果
  containment: "#content", //限制在指定元素区域内
  delay: 1000, //时间延迟（ms）
  distance: 40, //距离延迟（px）
  helper: "class" //助手样式，一般用border预览轮廓
  maxHeight: 200, //限制缩放大小
  maxWidth: 200,
  minHeight: 50,
  minWidth: 50,
  aspectRatio: 16/9, //保持纵横比
  grid: 50, //对其到网格大小
  alsoResize: "#sync", //与指定元素同步缩放
  handles: "se", //可输入的文本框
  ghost: true //开启视觉反馈，半透明的预览
})
```

## 拖动 `droggable`
```javascript
$().droggable({
  scroll： true, //启用自动滚动
  scrollSensitivity： 100, //滚动灵敏度
  scrollSpeed: 100, //滚动速度
  axis: "y", //约束为 X 或 Y 轴拖动
  cursor: "move", //定义鼠标光标样式
  cursorAt: {top:50,left:50}, //定义元素相对于光标位置
  distance: 20, //延迟，按距离px计
  delay: 1000, //延迟，按时间ms计
  start: function(){} //拖拽开始时触发事件
  drap: function(){} //拖拽期间触发事件
  stop: function(){} //拖拽停止时触发事件
  handle: "#to", //指定用于拖拽对象的元素jQery选择器
  cancel: "#not", //指定取消拖拽功能的jQery选择器
  revert: true, //还原位置
  snap: true, //调用对齐
  snapMode: "outer", //对齐到外部（outer）、内部（inner）、两侧（both）
  grip: [20,20], //对齐到网格
  opacity: 0.7, //透明度 0~1
  helper: "clone", //克隆（clone）、原始的（original）、方法function（）{}
  stack: "#top" //堆栈同组元素的顶部	
})
```

## 放置 `drappable`
```javascript
.drappable({
  drop: function(){}, //拖拽松开时触发事件
  accept: "#div", //指定放置目标元素
  hoverClass: "class", //悬停样式
  activeClass: "class", //激活样式
  greedy: true, //防止传播，阻止冒泡
  revert: "valid", //true,还原位置
  revert: "invalid", //false,还原位置
  appendTo: "body", //添加到元素
  containment: "document" //设置包含的容器元素	
})
```

## 选择 `selectable`
```javascript
.selectable({
  stop: function(){} //单击选择时事件
})
.disableSelection() //禁用选择
```
- 排序 `sortable` <span id = "Sortable "></span>
```javascript
.sortable({
  connectWith: "#list2", //列表中的元素传递到另一个列表中
  delay: 1000, //时间延迟（ms）
    distance: 40, //距离延迟（px）
    placeholder: "", //设置占位符
    dropOnEmpty: false, //阻止放置到空列表中
    items: "li:not(.notlist)", //选项传递哪些项目可排序
    cancel: ".notlist", //防止特定的条目排序
    axis: "y", //固定方向排序
    handle: "h3" //可控制标题元素
})
```

# 部件

## 折叠面板 `accordion`
```javascript
.accordion({
  collapsible: true, //所有部分都是可折叠的
  icon: icon, //自定义标题图标，接受标题默认和激活状态
})
var icon = {
  header: "class", //默认状态图标
  activeHeader: "class" //激活状态图标
}
$().accordion("option","icons"); //返回布尔值，作为判断
$().accordion("option","icons",null); //取消设置图标
$().accordion("refresh"); //刷新
.accordion({
  heightStyle: "fill", //垂直样式，"fill" 充满、"content" 保持初始高度
  event: "click hoverintent", //悬停事件
})
```
- 自动完成 `autocomplete` <span id = "Autocomplete"></span>
```javascript
var data = [
  { label: "anders", category: "" },
  { label: "andreas", category: "" }
}
.autocomplete({
  source: data, //索引遍历的数据源
  delay: 0 //延迟
  minLength: 0 //最小长度
  focus: function(){} //焦点
  search: true //搜索开启
})
```

## 按钮 `button`
```javascript
.button()
.buttonset() //复选框
.button({
  icons: {
    primary: "iconClass1",
    secondary: "iconClass2"
  },
  text: false //不显示文本
});
```

## 日期选择器 `datepicker`
```javascript
.datepicker({
  showOtherMonths: true, //显示其他月份
  selectOtherMonths: true, //选择其他月份
  showButtonPanel: true, //显示按钮栏
  changeMonth: true, //显示月份的下拉框
    changeYear: true, //显示年份的下拉框
    numberOfMonths: 3, //显示多个月份
    dateFormat："yy-mm-dd", //设置日期格式
    showOn: "button", //图标触发器
    buttonImage: "images/calendar.gif",
    buttonImageOnly: true,
    altField: "#alternate", //填充另一个输入框
    altFormat: "DD, d MM, yy",
    minDate: -20, //限制日期范围
    maxDate: "+1M +10D",
    showWeek: true, // 显示工作周
    firstDay: 1,
})
```

## 对话框 `dialog`
```javascript
.dialog({
  autoOpen: false, //自动打开
  show: { //显示动画
    effect: "blind",
    duration: 1000
    },
    hide: { //隐藏动画
    effect: "explode",
    duration: 1000
  },
  modal: true, //开启模态
  resizable: //可调整大小
  close: function(){} //关闭事件
  buttons: function(){} //打开按钮事件
})
```

## 菜单 `menu`
```javascript
.menu()
//.ui-menu { width: 150px; } 调整宽度来显示图标
```

## 进度条 progressbar`
```javascript
.progressbar({
  value: 50, //进度值 1~100
  change: function(){
    progressLabel.text( progressbar.progressbar( "value" ) + "%" );
  } //改变状态
  complete: function(){
    progressLabel.text( "完成！" );
  } //完成状态
})
```

## 滑块 `slider`
```javascript
.slider({
  orientation: "horizontal", //设置垂直："vertical"
  range: "min", //范围
  max: 255,
  min: 1,
  value: 127, // 范围值：[ 75, 300 ]
  slide: function(){},
  change: function(){}
  animate: true, //动画
  step: 50, //对齐增量
})
```
## 旋转器 `spinner`
```javascript
.spinner({
  min: 5,
    max: 2500,
    step: 25, //步长
    start: 1000,
    change: function(){}, //状态改变执行事件
    numberFormat: "C" //数字格式
    spin: function(){} //溢出触发事件
});
.timespinner() //时间旋转器
```

## 标签页 `tabs`
```javascript
.tabs({
  collapsible: true, //是否可折叠
  beforeLoad： function(){}, //加载前事件
  event: "mouseover", //当鼠标悬停时打开
})
```

## 工具提示栏 `tooltip`
```javascript
.tooltip({
  show: {
    duration: "fast"
  },
  hide: {
    effect: "hide"
  }
  open: ,
  items: ,
  content: ,
  track: true, //跟踪鼠标位置
  position: {
    my: "center bottom-20",
        at: "center top",
        using: 
  }
})
```

# 效果库

## 显示 `show`
```javascript
.show()
```

## 隐藏 `hide`
```javascript
.hide()
```

## 切换 `toggle`
```javascript
.toggle()
```

## 添加 `addClass`
```javascript
.addClass()
```

## 移除 `removeClass`
```javascript
.removeClass()
```

## 切换 `toggleClass`
```javascript
.toggleClass("newClass", 1000)
```

## 转换 `switchClass`
```javascript
.switchClass("newClass", "NewClass", 1000)
```

## 动画 `animation`
```javascript
.animation({
  backgroundColor: "#fff",
  color: "#000",
  width: 240
}, 1000 )
```