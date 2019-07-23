<template>
  <el-table
    :data="tableData"
    style="width: 100%; margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="id"
      sortable
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180"
      :filters="[{text: '许泽云', value: '许泽云'}, {text: '韩冰冰', value: '韩冰冰'}, {text: '王小虎', value: '王小虎'}, {text: '刘洋', value: '刘洋'}]"
      :filter-method="filterHandler">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TreeTable',
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '许泽云',
          address: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          id: 2,
          date: '2016-05-04',
          name: '韩冰冰',
          address: '上海市普陀区金沙江路 1517 弄'
        }, 
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
                id: 34,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 35,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 32,
              date: '2016-05-01',
              name: '刘洋',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, 
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
    }
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
