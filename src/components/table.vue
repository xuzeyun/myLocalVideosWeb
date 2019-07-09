
<template>
  <div>
<!-- <el-table-column label="序号" width="60">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
    </el-table-column> -->
    <!-- v-infinite-scroll="load" -->
    <!-- v-tableLoadmore="tableLoadMore" 自定义指令 -->
    <el-table
      id="table-id"
      v-loading="loading"
      :data="tableData"
      v-tableLoadmore="tableLoadMore"
      style="width: 100%"
      max-height="500"
      :span-method="objectSpanMethod"
      >
      <el-table-column label="序号" width="120">
          <template slot-scope="scope">
              {{scope.$index+1}}
          </template>
      </el-table-column>
      <!-- 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex -->
      <el-table-column
        prop="date"
        label="日期"
        width="">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          prop="name"
          label="姓名"
          width="">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="省份"
            width="">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-button @click="exportExcel" size="medium" type="success">导出</el-button>
  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  export default {
    data() {
      return {
        loading: false,
        spanArr: [],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '许泽云',
          province: '北京',
          city: '海淀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '许泽云',
          province: '北京',
          city: '海淀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '韩冰冰',
          province: '长治',
          city: '派出所',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '韩冰冰',
          province: '长治',
          city: '派出所',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '韩冰冰',
          province: '长治',
          city: '派出所',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, ]
      }
    },
    mounted (){
      // 合并规则
      this.mergeSpanMethod()
    },
    watch: {
      tableData (val) {
        console.log("数组最新长度：" + val.length);
        console.log(val);
      }
    },
    methods: {
      tableLoadMore () {
        console.log('表格加载');
        this.loading = true;
        setTimeout(() => {
          this.tableData.push({
            date: '2016-05-02',
            name: 'xx',
            province: 'xx',
            city: 'xx',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          })
          this.mergeSpanMethod();
          this.loading = false;
        }, 500)
      },
      mergeSpanMethod() {
        // 每次执行时首先清空数据
        this.spanArr = [];
        let contactDot = 0;
        this.tableData.forEach((item, index) => {
          // 这里遍历的是数组，无需考虑表格列是否显示
          // 如果下标是1
          if (index === 0) {
              this.spanArr.push(1)
          } else {
            if(item.name === this.tableData[index-1].name){
              this.spanArr[contactDot] += 1;
              this.spanArr.push(0)
            }else{
              contactDot = index
              this.spanArr.push(1)
            }
          }
        })
      },
      // 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
      objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
        // console.log(column.property === '')
        if (column.property === 'name' || column.property === 'province' || column.property === 'city') {
        // 如果是第三列
        // if (columnIndex === 2 || columnIndex === 3) {
          if (this.spanArr[rowIndex]) {
            return {
              rowspan: this.spanArr[rowIndex],
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      exportExcel () {
         /* generate workbook object from table */
         var wb = XLSX.utils.table_to_book(document.querySelector('#table-id'))
         /* get binary string as output */
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout
      }
    },
    directives: {
      tableLoadmore: {
        bind (el, binding) {
          // 获取element-ui定义好的scroll盒子
          const SELECTWRAP_DOM = el.querySelector('.el-table__body-wrapper')
          SELECTWRAP_DOM.addEventListener('scroll', function () {
          /*
            * scrollHeight 获取元素内容高度(只读)
            * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
            * clientHeight 读取元素的可见高度(只读)
            * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
            * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
            */
            let sign = 80 // 定义默认的向上滚于乡下滚的边界
            const CONDITION = ((this.scrollHeight - this.scrollTop === this.clientHeight) && this.scrollTop > sign)// 注意: && this.scrollTop
            if (this.scrollTop > sign) {
              sign = this.scrollTop
              console.log('向下')
            }
            if (this.scrollTop < sign) {
              sign = this.scrollTop
              console.log('向上')
            }
            if (CONDITION) {
              binding.value()
            }
          })
        }
      }
    }
  }
</script>
