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
          <el-menu-item index="1-1" @click="strToJson(1)">亚洲港台电影</el-menu-item>
          <el-menu-item index="1-2" @click="strToJson(2)">亚洲大陆电影</el-menu-item>
          <el-menu-item index="1-3" @click="strToJson(3)">北美大片</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <VideoTable 
      :videoList="videoList"
      :pageSize="pageSize"
      :pageSizes="pageSizes"
      :currentPage="currentPage"
      :total="total"
    >
    </VideoTable>
  </el-container>
</template>

<script>
import VideoTable from "./VideoTable"
import asiaYesStr from '../../../data/getAsiaYes'
import asiaNoStr from '../../../data/getAsiaNo'
import usaStr from '../../../data/getUsa'
import { getArray } from '../../service/getDate'
export default {
  name: 'AddVideo',
  components: {
    VideoTable
  },
  data () {
    return {
      videoList: [],
      pageSize: 10,
      pageSizes: [1,2,3,4],
      currentPage: 1,
      total: 0,
    }
  },
  mounted () {
    this.strToJson(1)
  },
  methods: {
    strToJson (no) {
      let arr
      if (no === 1) {
        arr = getArray(asiaYesStr)
      }else if (no === 2){
        arr = getArray(asiaNoStr)
      }else if (no === 3){
        arr = getArray(usaStr)
      }
      this.videoList = arr
      this.total = arr.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-menu
    width 300px
    height 100vh
</style>
