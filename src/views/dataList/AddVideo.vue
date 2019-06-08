<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">亚洲港台电影</el-menu-item>
          <el-menu-item index="1-2">亚洲大陆电影</el-menu-item>
          <el-menu-item index="1-3">北美大片</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <VideoTable 
      :asiaList="asiaList"
      :pageSize="pageSize"
      :total="total"
      :cur="cur"
      :pages="pages"
    >
    </VideoTable>
  </el-container>
</template>

<script>
import VideoTable from "./VideoTable"
import asiaYesStr from '../../../data/getAsiaYes'
import { getArray } from '../../service/getDate'
export default {
  name: 'AddVideo',
  components: {
    VideoTable
  },
  data () {
    return {
      asiaList: [],
      // 每页数量 总条数 当前页 总页数
      pageSize: 10,
      total: 0,
      cur: 1,
      pages: 0
    }
  },
  mounted () {
    this.strToJson(asiaYesStr)
  },
  methods: {
    strToJson (asiaYesStr) {
      let arr = getArray(asiaYesStr)
      this.asiaList = arr
      this.total = arr.length
      this.pages = Math.ceil(this.asiaList / this.pageSize)
      console.log(this.asiaList)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-menu
    width 300px
    height 100vh
</style>
