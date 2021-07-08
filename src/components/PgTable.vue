<script>
import { Table, TableColumn, Pagination } from "element-ui";
export default {
  name: "PgTable",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Pagination.name]: Pagination
  },
  props: {
    pagination: {
      type: Object,
      default: () => {
        return {
          total: 0,
          pageSize: 10,
          currentPage: 1
        };
      }
    },
    columns: Array,
    ...Table.props
  },
  data() {
    return {
      pgd: {
        background: true,
        pageSizes: [10, 20, 50, 100],
        pageSize: 10,
        currentPage: 1
      }
    };
  },
  render(h) {
    var self = this;
    const { pagination, data, columns, ...rest } = self._props;
    const {
      total,
      pageSize,
      currentPage,
      pageSizes,
      background,
      layout,
      ...prest
    } = Object.assign(this.pgd, pagination);
    const { ...listeners } = this.$listeners;
    const attrs = this.$attrs;
    return h(
      "div",
      [
        h(
          "el-table",
          {
            staticStyle: {
              width: "100%",
              ...attrs
            },
            attrs: {
              data: data,
              ...rest
            },
            on: {
              ...listeners
            }
          },
          [
            ...(columns && columns.length
              ? columns.map(function(props) {
                  return h("el-table-column", {
                    key: props.label,
                    attrs: {
                      ...props
                    }
                  });
                })
              : []),
            ...(self.$slots.default ? self.$slots.default : []),
            self.$slots.action ? self.$scopedSlots.action() : null
          ],
          3
        ),
        h(
          "div",
          {
            class: "pg-pager"
          },
          [
            h("el-pagination", {
              attrs: {
                background: background,
                total: total,
                "page-size": pageSize,
                "current-page": currentPage,
                "page-sizes": pageSizes,
                layout: layout,
                ...prest
              },
              on: {
                "update:pageSize": function(val) {
                  self.$set(pagination, "pageSize", val);
                  self.getList({ pageSize: val });
                },
                "update:page-size": function(val) {
                  self.$set(pagination, "pageSize", val);
                  self.getList({ pageSize: val });
                },
                "update:currentPage": function(val) {
                  self.$set(pagination, "currentPage", val);
                  self.getList({ currentPage: val });
                },
                "update:current-page": function(val) {
                  self.$set(pagination, "currentPage", val);
                  self.getList({ currentPage: val });
                }
              }
            })
          ]
        )
      ],
      1
    );
  },
  methods: {
    getList(obj) {
      this.$emit("query", obj);
    }
  }
};
</script>

<style></style>
