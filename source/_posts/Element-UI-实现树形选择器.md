---
title: Element-UI 实现树形选择器
abbrlink: 1ab23fc5
date: 2018-09-29 00:45:17
categories:
tags:
password:
description:
---

![事件驱动模型](https://wildye.cn/static/images/blog/1ab23fc5/01.jpg)

## 组件调用

```html
<template>
  <select-tree :options="options" v-model="selected" />
</template>

<script>
import SelectTree from '@/components/widget/SelectTree.vue';

export default {
  name: 'about',
  components: {
    SelectTree,
  },
  data() {
    return {
      // 默认选中值
      selected: 'A',
      // 数据列表
      options: [
        {
          parentId: '0',
          id: 'A',
          label: 'label-A',
          children: [
            {
              parentId: 'A',
              id: 'A-1',
              label: 'label-A-1',
            },
          ],
        },
        {
          parentId: '0',
          value: 'B',
          label: 'label-B',
          children: [],
        },
      ],
    };
  },
};
</script>
```

## SelectTree.vue

```html
<!-- 树状选择器 -->
<template>
  <el-popover
    ref="popover"
    placement="bottom-start"
    trigger="click"
    @show="onShowPopover"
    @hide="onHidePopover">
    <el-tree
      ref="tree"
      :data="data"
      :props="props"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      @node-click="onClickNode">
    </el-tree>
    <el-input
      slot="reference"
      v-model="labelModel"
      style="width:170px"
      clearable
      :class="{ 'rotate': showStatus }"
      suffix-icon="el-icon-arrow-down"
      :placeholder="placeholder">
    </el-input>
  </el-popover>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 接收绑定参数
    value: String,
    // 选项数据
    options: {
      type: Array,
      required: true,
    },
    // 输入框占位符
    placeholder: {
      type: String,
      required: false,
      default: '请选择',
    },
    // 树节点配置选项
    props: {
      type: Object,
      required: false,
      default: () => ({
        value: 'parentId',
        label: 'label',
        children: 'children',
      }),
    },
  },
  // 设置绑定参数
  model: {
    prop: 'value',
    event: 'selected',
  },
  computed: {
    // 是否为树状结构数据
    dataType() {
      const jsonStr = JSON.stringify(this.options);
      return jsonStr.indexOf(this.props.children) !== -1;
    },
    // 若非树状结构，则转化为树状结构数据
    data() {
      return this.dataType ? this.options : this.switchTree();
    },
  },
  watch: {
    labelModel(val) {
      this.$refs.tree.filter(val);
    },
  },
  data() {
    return {
      // 树状菜单显示状态
      showStatus: false,
      // 输入框显示值
      labelModel: '',
      // 实际请求传值
      valueModel: '0',
    };
  },
  created() {
    if (this.value) {
      this.labelModel = this.queryTree(this.data, this.value);
    }
  },
  methods: {
    // 单击节点
    onClickNode(node) {
      this.labelModel = node[this.props.label];
      this.valueModel = node[this.props.value];
      this.onCloseTree();
    },
    // 偏平数组转化为树状层级结构
    switchTree() {},
    // 隐藏树状菜单
    onCloseTree() {
      this.$refs.popover.showPopper = false;
    },
    // 显示时触发
    onShowPopover() {
      this.showStatus = true;
      this.$refs.tree.filter('');
    },
    // 隐藏时触发
    onHidePopover() {
      this.showStatus = false;
      this.$emit('selected', this.valueModel);
    },
    // 树节点过滤方法
    filterNode(query, data) {
      if (!query) return true;
      return data[this.props.label].indexOf(query) !== -1;
    },
    // 搜索树状数据中的 ID
    queryTree(tree, id) {
      let stark = [];
      stark = stark.concat(tree);
      while (stark.length) {
        const temp = stark.shift();
        if (temp[this.props.children]) {
          stark = stark.concat(temp[this.props.children]);
        }
        if (temp[this.props.value] === id) {
          return temp[this.props.label];
        }
      }
      return '';
    },
  },
};
</script>

<style>
  .el-input.el-input--suffix.rotate .el-input__suffix {
    transform: rotate(180deg);
  }
</style>
```