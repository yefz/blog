---
title: Element-UI 实现树形选择器
abbrlink: 1ab23fc5
date: 2018-09-29 00:45:17
categories: Element UI
tags: 自定义组件
password:
description: 结合 el-popover、el-tree、el-input 实现的下拉树状列表选择器
---

![树形选择器](https://wildye.cn/static/images/blog/1ab23fc5/01.jpg)

## 组件调用

```html
<template>
  <!-- 行模式 -->
  <el-form inline>
    <el-form-item label="inline 默认：">
      <select-tree :options="options" v-model="selected" />
    </el-form-item>
    <el-form-item label="inline 定义宽度：">
      <select-tree width="200" :options="options" v-model="selected" />
    </el-form-item>
  </el-form>
  <!-- 块模式 -->
  <el-form>
    <el-form-item label="自适应：">
      <select-tree v-model="selected" :options="options" :props="defaultProps" />
    </el-form-item>
  </el-form>
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
      // 数据默认字段
      defaultProps: {
        parent: 'parentId',   // 父级唯一标识
        value: 'id',          // 唯一标识
        label: 'label',       // 标签显示
        children: 'children', // 子级
      },
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
    class="select-tree scrollbar"
    @show="onShowPopover"
    @hide="onHidePopover">
    <el-tree
      ref="tree"
      highlight-current
      :style="`min-width: ${treeWidth}`"
      :data="data"
      :props="props"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      :default-expand-all="false"
      @node-click="onClickNode">
    </el-tree>
    <el-input
      slot="reference"
      ref="input"
      v-model="labelModel"
      clearable
      :style="`width: ${width}px`"
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
    // 输入框宽度
    width: String,
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
        parent: 'parentId',
        value: 'rowGuid',
        label: 'areaName',
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
      if (!val) {
        this.valueModel = '';
      }
      this.$refs.tree.filter(val);
    },
    value(val) {
      this.labelModel = this.queryTree(this.data, val);
    },
  },
  data() {
    return {
      // 树状菜单显示状态
      showStatus: false,
      // 菜单宽度
      treeWidth: 'auto',
      // 输入框显示值
      labelModel: '',
      // 实际请求传值
      valueModel: '0',
    };
  },
  created() {
    // 检测输入框原有值并显示对应 label
    if (this.value) {
      this.labelModel = this.queryTree(this.data, this.value);
    }
    // 获取输入框宽度同步至树状菜单宽度
    this.$nextTick(() => {
      this.treeWidth = `${(this.width || this.$refs.input.$refs.input.clientWidth) - 24}px`;
    });
  },
  methods: {
    // 单击节点
    onClickNode(node) {
      this.labelModel = node[this.props.label];
      this.valueModel = node[this.props.value];
      this.onCloseTree();
    },
    // 偏平数组转化为树状层级结构
    switchTree() {
      return this.cleanChildren(this.buildTree(this.options, '0'));
    },
    // 隐藏树状菜单
    onCloseTree() {
      this.$refs.popover.showPopper = false;
    },
    // 显示时触发
    onShowPopover() {
      this.showStatus = true;
      this.$refs.tree.filter(false);
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
    // 将一维的扁平数组转换为多层级对象
    buildTree(data, id = '0') {
      const fa = (parentId) => {
        const temp = [];
        for (let i = 0; i < data.length; i++) {
          const n = data[i];
          if (n[this.props.parent] === parentId) {
            n.children = fa(n.rowGuid);
            temp.push(n);
          }
        }
        return temp;
      };
      return fa(id);
    },
    // 清除空 children项
    cleanChildren(data) {
      const fa = (list) => {
        list.map((e) => {
          if (e.children.length) {
            fa(e.children);
          } else {
            delete e.children;
          }
          return e;
        });
        return list;
      };
      return fa(data);
    },
  },
};
</script>

<style lang="scss">
  .scrollbar {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      z-index: 11;
      width: 6px;
    }
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-corner {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      // border-radius: 5px;
      width: 6px;
      background-color: #eee;
      &:hover {
        background-color: #ccc;
      }
    }
    &::-webkit-scrollbar-track-piece {
      background: #fff;
      width: 6px;
    }
  }
  .select-tree .el-tree {
    max-height: 350px;
    .scrollbar;
  }
  .select-tree .el-input.el-input--suffix {
    cursor: pointer;
  }
  .select-tree .el-input.el-input--suffix.rotate .el-input__suffix {
    transform: rotate(180deg);
  }
</style>
```
