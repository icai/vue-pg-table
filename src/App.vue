<template>
  <div id="app">
    <div class="imgwrap">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <div class="desc">
      <h1>&lt;PgTable&gt;</h1>
      <p>A paginated table component based element-ui</p>
      <h3>Essential Links</h3>
      <p align="center">
        <a href="http://blog.w3cub.com/vue-pg-table/?x-page=github"
          >Live Demo >></a
        >
        <br />
        <br />
        <a href="https://github.com/icai/vue-pg-table">
          <img
            src="https://img.shields.io/github/stars/icai/vue-pg-table.svg?style=social&label=Star"
            alt
          />
        </a>
        <a href="https://github.com/icai/vue-pg-table">
          <img
            src="https://img.shields.io/github/forks/icai/vue-pg-table.svg?style=social&label=Fork"
            alt
          />
        </a>
        <a href="https://github.com/icai/vue-pg-table">
          <img
            src="https://img.shields.io/github/watchers/icai/vue-pg-table.svg?style=social&label=Watch"
            alt
          />
        </a>
        <br />
        <br />
        <a href="https://github.com/icai/vue-pg-table/issues">
          <img
            src="https://img.shields.io/github/issues/icai/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <a href="https://github.com/icai/vue-pg-table/issues">
          <img
            src="http://isitmaintained.com/badge/resolution/icai/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <a href="https://github.com/icai/vue-pg-table/graphs/contributors">
          <img
            src="https://img.shields.io/github/contributors/icai/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <br />
        <a href="https://www.npmjs.com/package/vue-pg-table">
          <img
            src="https://img.shields.io/npm/l/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <a href="https://www.npmjs.com/package/vue-pg-table">
          <img
            src="https://img.shields.io/npm/v/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <a href="https://www.npmjs.com/package/vue-pg-table">
          <img
            src="https://img.shields.io/npm/dm/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <a href="https://www.npmjs.com/package/vue-pg-table">
          <img
            src="https://img.shields.io/npm/dt/vue-pg-table.svg?style=flat-square"
            alt
          />
        </a>
        <br />
        <br />
      </p>
    </div>
    <div class="container">
      <pg-table
        :data="tableData"
        :columns="tableColumns"
        :pagination.sync="pagination"
        row-key="id"
        style="width: 100%"
        @query="queryData"
      ></pg-table>
    </div>

    <div class="markdown-body container">
      <div>
        <h2 id="install">Install</h2>
      </div>
      <div>
        <pre
          class="prettyprint"
        ><code class="language-sh hljs lasso">npm install vue<span class="hljs-attribute">-pg</span><span class="hljs-attribute">-table</span></code></pre>
      </div>
      <div>
        <h2 id="usage">Usage</h2>
      </div>
      <div>
        <pre
          class="prettyprint"
        ><code class="language-js hljs">import PgTable form <span class="hljs-string">'vue-pg-table'</span>;
export <span class="hljs-keyword">default</span> {
  components: {
    [PgTable.name]: PgTable
  }
}</code></pre>
      </div>
      <div>
        <div>
          <ul>
            <li>common demo.</li>
          </ul>
        </div>
        <div>
          <pre
            class="prettyprint"
          ><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-title">pg-table
</span>  <span class="hljs-attribute">:data</span>=<span class="hljs-value">"tableData"</span>
  <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"tableColumns"</span>
  <span class="hljs-attribute">:pagination.sync</span>=<span class="hljs-value">"pagination"</span>
  <span class="hljs-attribute">row-key</span>=<span class="hljs-value">"id"</span>
  <span class="hljs-attribute">min-height</span>=<span class="hljs-value">"500"</span>
  <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 100%"</span>
  @<span class="hljs-attribute">query</span>=<span class="hljs-value">"queryData"</span>
&gt;</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-title">pg-table</span>&gt;</span>
</code></pre>
          <ul>
            <li>
              With slots
              <code>&lt;el-table-column&gt;</code> and
              <code>columns</code> props. <br />The order is loop the
              <code>columns</code> and then inject the slot to after. <br />Also
              provide the <code>action</code> slot after the
              <code>deafult</code> slot.
            </li>
          </ul>
        </div>
        <div>
          <pre
            class="prettyprint"
          ><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-title">pg-table</span> 
  <span class="hljs-attribute">:data</span>=<span class="hljs-value">"tableData"</span> 
  <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"tableColumns"</span> 
  <span class="hljs-attribute">:pagination.sync</span>=<span class="hljs-value">"pagination"</span>
  <span class="hljs-attribute">row-key</span>=<span class="hljs-value">"id"</span>
  <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 100%"</span>
  <span class="hljs-attribute">header-row-class-name</span>=<span class="hljs-value">"thead-light"</span>
  @<span class="hljs-attribute">sort-change</span>=<span class="hljs-value">"sortChange"</span>
  @<span class="hljs-attribute">selection-change</span>=<span class="hljs-value">"selectionChange"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">el-table-column</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"180px"</span> <span class="hljs-attribute">align</span>=<span class="hljs-value">"center"</span> <span class="hljs-attribute">label</span>=<span class="hljs-value">"Actions"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">slot-scope</span>=<span class="hljs-value">"{$index, row}"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"p-1"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">el-button
</span>        <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"perm('role:edit')"</span>
        @<span class="hljs-attribute">click.native</span>=<span class="hljs-value">"handleEdit($index, row)"</span>
      &gt;</span>
        编辑菜单权限
      <span class="hljs-tag">&lt;/<span class="hljs-title">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-title">el-table-column</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">pg-table</span>&gt;</span>
</code></pre>
        </div>
      </div>
      <div>
        <h2 id="props">Props</h2>
        <table class="mce-item-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>columns</td>
              <td>
                <code>Array</code>
              </td>
              <td>[]</td>
              <td>table columns</td>
            </tr>
            <tr>
              <td>pagination</td>
              <td>
                <code>Object</code>
              </td>
              <td>see the follow</td>
              <td>pagination</td>
            </tr>
            <tr>
              <td>pagination.currentPage</td>
              <td>
                <code>number</code>
              </td>
              <td>see the follow</td>
              <td>当前页数，支持 .sync 修饰符</td>
            </tr>
            <tr>
              <td>pagination.pageSize</td>
              <td>
                <code>number</code>
              </td>
              <td>see the follow</td>
              <td>每页显示条目个数，支持 .sync 修饰符</td>
            </tr>
            <tr>
              <td>pagination.background</td>
              <td>
                <code>boolen</code>
              </td>
              <td>true</td>
              <td>background</td>
            </tr>
            <tr>
              <td>…</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p>inherit All &lt;el-table&gt; props see the documents</p>
        <p>
          <a
            href="https://element.eleme.io/#/zh-CN/component/table"
            data-mce-href="https://element.eleme.io/#/zh-CN/component/table"
            >https://element.eleme.io/#/zh-CN/component/table</a
          >
        </p>
        <p>inherit All &lt;el-pagination&gt; props with default Props</p>
      </div>
      <div>
        <pre
          class="prettyprint"
        ><code class="hljs http">    <span class="hljs-attribute">background</span>: <span class="hljs-string">true</span>
    <span class="hljs-attribute">pageSizes</span>: <span class="hljs-string">[10, 20, 50, 100],</span>
    <span class="hljs-attribute">total</span>: <span class="hljs-string">0,</span>
    <span class="hljs-attribute">pageSize</span>: <span class="hljs-string">10,</span>
    <span class="hljs-attribute">currentPage</span>: <span class="hljs-string">1</span></code></pre>
        <p>
          <a
            href="https://element.eleme.io/#/zh-CN/component/pagination"
            data-mce-href="https://element.eleme.io/#/zh-CN/component/pagination"
            >https://element.eleme.io/#/zh-CN/component/pagination</a
          >
        </p>
      </div>
      <div>
        <h2 id="events">Events</h2>
        <table class="mce-item-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>query</td>
              <td>watch to query the data</td>
            </tr>
          </tbody>
        </table>

        <h2 id="slots">Slots</h2>
        <table class="mce-item-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>default slot</td>
            </tr>
            <tr>
              <td>action</td>
              <td>action slot</td>
            </tr>
          </tbody>
        </table>

        <h2>Donate</h2>
        <img alt="Vue logo" src="./assets/donate.png" />

        <h2>License</h2>
        <p>Copyright (c) Terry Cai. Licensed under the MIT license.</p>
      </div>
    </div>
    <div class="footer">
      <p>
        ad:
        <a href="https://docs.w3cub.com/">https://docs.w3cub.com</a>, 三岁抬头
      </p>
    </div>
  </div>
</template>

<script>
import PgTable from "./components/PgTable.vue";
const DBLEN = 100;
const db = {
  random: function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  },
  query: async ({ offset, pageSize }) => {
    var _data = dbData.slice(offset, offset + pageSize);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(_data);
      }, 100);
    });
  }
};
let dbData = Array(DBLEN)
  .fill({})
  .map(function(it, index) {
    let item = {};
    item.id = "no" + index + ("" + Math.random()).slice(2);
    item.created_at = [
      "2020-01-03",
      "2020-05-03",
      "2020-12-03",
      "2020-05-05",
      "2020-09-18",
      "2020-06-23"
    ][db.random(0, 5)];
    item.address =
      "广州市天河区长兴街道" +
      [
        "长湴市场",
        "伟伦体校",
        "优托帮",
        "传记潮发牛肉店",
        "长湴公园",
        "华南植物园后门"
      ][db.random(0, 5)];
    item.name = ["Terry Cai", "Peggy", "Sora", "Lino"][db.random(0, 3)];
    item.category = ["金星人", "火星人", "水星人", "人类"][db.random(0, 3)];
    item.status = ["休眠", "清醒"][db.random(0, 1)];
    return item;
  });

export default {
  name: "App",
  components: {
    [PgTable.name]: PgTable
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        pageSizes: [5, 10, 25, 50],
        total: DBLEN
      },
      tableData: [],
      tableColumns: [
        {
          type: "selection"
        },
        {
          prop: "name",
          label: "名称",
          minWidth: 130,
          sortable: true
        },
        {
          prop: "category",
          label: "分类",
          minWidth: 80,
          sortable: true
        },
        {
          prop: "created_at",
          label: "创建时间",
          minWidth: 120,
          sortable: true
        },
        {
          prop: "status",
          label: "状态",
          minWidth: 80,
          sortable: true
        },
        {
          prop: "address",
          label: "地址",
          minWidth: 220,
          sortable: true
        }
      ]
    };
  },
  methods: {
    async queryData() {
      const offset =
        this.pagination.pageSize * (this.pagination.currentPage - 1);
      this.tableData = await db.query({
        offset,
        pageSize: this.pagination.pageSize
      });
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
.imgwrap,
.desc {
  text-align: center;
}
.container {
  width: 960px;
  margin: auto;
}
.pg-pager {
  padding: 10px 2px;
}
.footer {
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}

.markdown-body {
  padding: 45px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.markdown-body h1 {
  padding-bottom: 0.3em;
  font-size: 2.25em;
  line-height: 1.2;
  border-bottom: 1px solid #eee;
}

.markdown-body h2 {
  padding-bottom: 0.3em;
  font-size: 1.75em;
  line-height: 1.225;
  border-bottom: 1px solid #eee;
}

.markdown-body blockquote {
  padding: 0 15px;
  color: #777;
  border-left: 4px solid #ddd;
}

.markdown-body blockquote > :first-child {
  margin-top: 0;
}

.markdown-body blockquote > :last-child {
  margin-bottom: 0;
}

.markdown-body ul {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
  word-break: normal;
  word-break: keep-all;
}
.markdown-body table {
  border-collapse: collapse;
  border-spacing: 0;
}

.markdown-body table th {
  font-weight: 700;
}

.markdown-body table td,
.markdown-body table th {
  padding: 6px 13px;
  border: 1px solid #ddd;
}

.markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

.hljs {
  display: block;
  padding: 1em;
  background: #f5f5f5;
}

.hljs-string,
.hljs-title,
.hljs-constant,
.hljs-parent,
.hljs-tag .hljs-value,
.hljs-rules .hljs-value,
.hljs-rules .hljs-value .hljs-number,
.hljs-preprocessor,
.hljs-pragma,
.hljs-aggregate,
.hljs-template_tag,
.hljs-addition,
.hljs-flow,
.hljs-stream,
.bash .hljs-variable,
.markdown .hljs-header {
  color: #800;
}
</style>
