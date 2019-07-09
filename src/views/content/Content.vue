<template>
  <div class="content">
    <sidebar
      :asiaList="asiaList"
      @get-name="gotoName">
    </sidebar>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <video-list :curStarInfo="curStarInfo"></video-list>
  </div>
</template>

<script>
import asiaYesStr from '../../../data/getAsiaYes'
import { getArray } from '../../service/getDate'
import Sidebar from './Sidebar'
import VideoList from './VideoList'
export default {
  name: 'Content',
  props: {
    nameId: String
  },
  data () {
    return {
      asiaList: [],
      curStarInfo: {},
    }
  },
  components: {
    Sidebar,
    VideoList
  },
  mounted () {
    this.strToJson(asiaYesStr)
  },
  methods: {
    strToJson (asiaYesStr) {
      this.asiaList = getArray(asiaYesStr)
    },
    gotoName (name) {
      // 获得当前列表
      for (let item of this.asiaList) {
        if (item.name === name){
          this.curStarInfo = item;
          // console.log(item);
        }
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  .content
    // padding 80px 30px 30px
</style>
