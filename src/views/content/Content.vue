<template>
  <div class="content">
    <VideoList :asiaList='asiaList'></VideoList>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import asiaYesStr from '../../../data/getAsiaYes'
import { getArray } from '../../service/getDate'
import VideoList from '../videoView/VideoList'
export default {
  name: 'Content',
  data () {
    return {
      asiaList: []
    }
  },
  components: {
    VideoList
  },
  mounted () {
    this.strToJson(asiaYesStr)
  },
  methods: {
    strToJson (asiaYesStr) {
      this.asiaList = getArray(asiaYesStr)
      console.log(this.asiaList)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    padding 80px 30px 30px
</style>
