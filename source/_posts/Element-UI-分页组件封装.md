---
title: Element-UI 分页组件封装
abbrlink: c0ec785e
date: 2018-09-28 20:03:05
categories:
tags:
password:
description: 分页组件二次封装，当前页无数据会自动触发查询上一页数据
---

## 组件调用
```html
<template>
  <paging-query :pager="pager" @query="getItemList()" />
</template>

<script>
import PagingQuery from '@/components/widgets/PagingQuery';

export default {
  components: {
    PagingQuery,
  },
  data() {
    pager: {
      total: 0,  // 总记录条数
      page: 1,   // 第几页
      rows: 15,  // 每页显示记录数
    },
  },
  methods: {
    // 查询记录请求
    getItemList() {
      const { page, rows } = this.pager
      this.$http.get('url', { params: { page, rows } })
        .then((response) => {
          this.pager.total = response.data.total;
        });
    }
  },
</script>
```

## PagingQuery.vue
```html
<!-- 分页查询 -->
<template>
  <div class="clearfix" style="margin-top: 10px">
    <el-pagination
      class="float-right"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pager.total"
      :current-page.sync="pager.page"
      :page-size="pager.rows"
      :page-sizes="[5, 15, 30, 50]"
      @size-change="onChangeSize"
      @current-change="onChangePage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'PagingQuery',
  props: ['pager'],
  computed: {
    total() {
      return this.pager.total;
    },
    // 检测获取到的数据是否为空
    isEmptyList() {
      return this.pager.total / this.pager.rows < this.pager.page;
    },
  },
  watch: {
    total() {
      // 存在记录但未获取到数据时, 重新请求
      if (this.pager.page > 1 && this.isEmptyList) {
        this.pager.page -= 1;
        this.$emit('query');
      }
    },
  },
  methods: {
    // 每页条数
    onChangeSize(rows) {
      this.pager.rows = rows;
      // 触发父组件查询请求
      this.$emit('query');
    },
    // 翻页
    onChangePage(page) {
      this.pager.page = page;
      this.$emit('query');
    },
  },
};
</script>
```

