# vue-pg-table

> A paginated table component based element-ui

<p align="center">
  <a href="http://blog.w3cub.com/vue-pg-table/?x-page=github">
    Live Demo >>
  </a>
  <br>
  <br>
  <a href="https://github.com/icai/vue-pg-table">
    <img src="https://img.shields.io/github/stars/icai/vue-pg-table.svg?style=social&label=Star" alt="">
  </a>
  <a href="https://github.com/icai/vue-pg-table">
    <img src="https://img.shields.io/github/forks/icai/vue-pg-table.svg?style=social&label=Fork" alt="">
  </a>
  <a href="https://github.com/icai/vue-pg-table">
    <img src="https://img.shields.io/github/watchers/icai/vue-pg-table.svg?style=social&label=Watch" alt="">
  </a>
  <br>
  <br>
  <a href="https://github.com/icai/vue-pg-table/issues">
    <img src="https://img.shields.io/github/issues/icai/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/icai/vue-pg-table/issues">
    <img src="http://isitmaintained.com/badge/resolution/icai/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/icai/vue-pg-table/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/icai/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vue-pg-table">
    <img src="https://img.shields.io/npm/l/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue-pg-table">
    <img src="https://img.shields.io/npm/v/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue-pg-table">
    <img src="https://img.shields.io/npm/dm/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue-pg-table">
    <img src="https://img.shields.io/npm/dt/vue-pg-table.svg?style=flat-square" alt="">
  </a>
  <br>
  <br>
</p>

## Install

```sh
npm install vue-pg-table
```


## Usage

```js
import PgTable form 'vue-pg-table';
export default {
  components: {
    [PgTable.name]: PgTable
  }
}
```

- common demo.

```html
<pg-table
  :data="tableData"
  :columns="tableColumns"
  :pagination.sync="pagination"
  row-key="id"
  min-height="500"
  style="width: 100%"
  @query="queryData"
></pg-table>

```

- With slots  `<el-table-column>` and  `columns` props.    
The order is loop the `columns` and then inject the slot to after.  
Also provide the `action` slot after the `deafult` slot.

```html
<pg-table 
  :data="tableData" 
  :columns="tableColumns" 
  :pagination.sync="pagination"
  row-key="id"
  style="width: 100%"
  header-row-class-name="thead-light"
  @sort-change="sortChange"
  @selection-change="selectionChange">
  <el-table-column width="180px" align="center" label="Actions">
    <div slot-scope="{$index, row}" class="p-1">
      <el-button
        v-if="perm('role:edit')"
        @click.native="handleEdit($index, row)"
      >
        编辑菜单权限
      </el-button>
    </div>
  </el-table-column>
</pg-table>

```



## Props


| Name                  | Type       | Default        | Description                                                                                                                 |
| --------------------- | ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| columns                 | `Array`   | []             | table columns                                                                                                      |
| pagination                 | `Object`   | see the follow        | pagination  
| pagination.currentPage |`number`| see the follow|当前页数，支持 .sync 修饰符|
| pagination.pageSize | `number`| see the follow|每页显示条目个数，支持 .sync 修饰符|
| pagination.background| `boolen` |true | background |
|...|

inherit All &lt;el-table&gt; props  see the documents

[https://element.eleme.io/#/zh-CN/component/table](https://element.eleme.io/#/zh-CN/component/table)

inherit All &lt;el-pagination&gt; props with default Props

```
    background: true
    pageSizes: [10, 20, 50, 100],
    total: 0,
    pageSize: 10,
    currentPage: 1
```

https://element.eleme.io/#/zh-CN/component/pagination



## Events

| Name     | Description                      |
| -------- | -------------------------------- |
| query |  watch to query the data |

<br>

## Slots

| Name     | Description                      |
| -------- | -------------------------------- |
|  | default slot
| action | action slot |

<br>

## Donate

 <img src="https://raw.githubusercontent.com/icai/vue-pg-table/master/src/assets/donate.png" alt="donate">


## License

Copyright (c) Terry Cai. Licensed under the MIT license.
