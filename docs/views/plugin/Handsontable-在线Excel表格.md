---
title: Handsontable-在线Excel表格
date: 2019-12-09 10:30:00
publish: true
categories:
  - Plugin
tags:
  - Excel
---

## 参数配置
``` javascript
{
	// 声明语言包
	language: 'zh-CN',

	// 表格宽度
	width: '100%',

	// 表格高度，指定高度后显示滚动条
	// 刚好10行高度
	width: 415,

	// 列标题
	colHeaders: [],

	// 列宽
	colWidths: [],

	// 显示行标题（序号列）
	// 自定义第一列: index => `${index} NB`,
	rowHeaders: true,

	// 行高
	rowHeights: 36,

	// 单元格边框
	customBorders: true,

	// 指定行数上限
	maxRows: 10,

	// 指定列数上限
	maxCols: 300,

	// 不允许为空
	allowEmpty: false,

	// 指定每一列的数据类型、默认值、表单验证配置
	// type: 类型, data: 对应列的数据字段
	// 见 [columns 配置]
	columns: [],

	// 表格自定义类名
	tableClassName: '',

	// 当前行自定义类名
	currentRowClassName: '',

	// 当前列className
	currentColClassName: '',

	// 合并单元格
	mergeCells: true,

	// 固定行，顶部多少行
	fixedRowsTop: 1,

	// 固定列，左侧多少列
	fixedColumnsLeft: 1,

	// 固定列（手动）
	manualColumnFreeze: true,

	// 列延申
	// last：延伸最后一列，all：延伸所有列，none默认不延伸。
	stretchH: 'all',

	// 拖动行
	manualRowMove: true,

	// 拖动列
	manualColumnMove: true,

	// 手动调整行距
	manualRowResize: true,

	// 手动调整列距
	manualColumnResize: true,

	// 启用批注
	comments: true,

	// 允许观察数据源变化，单向数据绑定更改应用到数据
	observeChanges: true,

	// 不允许插入列
	allowInsertColumn: false,

	// 不允许移除列
	allowRemoveColumn: false,

	// 验证失败单元格样式
	invalidCellClassName: '',
}
```

## columns 配置
``` javascript
{
	// 指定输入控件类型 
	// checkbox 勾选框&多选
	// text		本输入
	// numeric	数值输入
	// date		日期选择
	// time		时间选择
	// select	选择器
	// dropdown		下拉选择
	// autocomplet下拉选择（自动填充）
	type: 'text', 
	data: 'data',
}
```
