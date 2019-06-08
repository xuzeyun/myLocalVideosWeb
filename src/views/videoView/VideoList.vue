<template>
  <div class="vidio-list">
    <ul>
      <li v-for="(item, index) in asiaList" :key="index">
        <!-- <div class="v-cover">
          <img src="#">
        </div>
        <div class="v-info clearfix">
          <div class="tool">
            <a class="show-img" data-imgurl="" href="javascript:;">封面</a>
            <a class="show-video" data-videourl="" href="javascript:;">播放</a>
            <a class="show-file" href="javascript:;">文件夹</a>
          </div>
          <strong>0001</strong>
          <span style="color:#f83885;"><br>star-name</span>
        </div> -->
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    asiaList: Array
  },
  mounted () {
    // console.log(asiaList[0].videos)
  }
}
</script>

<style lang="stylus" scoped>
  .vidio-list
    li
      width: 280px
      margin: 0 10px 20px 10px
      // float: left
      .v-cover
        width: 280px
        height: 188px
        background: #242a3b
        position: relative
        overflow: hidden
        box-shadow: 2px 2px 5px #000
        border-radius: 5px
      
</style>
