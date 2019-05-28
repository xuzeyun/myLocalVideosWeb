<template>
  <div class="bottom-bar">
    <ul>
      <li v-for="(item, index) of bottomItem" :key="index">
        <router-link :to="item.url">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeBottombar',
  data () {
    return {
      bottomItem: [
        { name: '摘要', url: '/' },
        { name: '技能', url: '/skill' },
        { name: '工作经历', url: '/' },
        { name: '学历项目', url: '/' },
        { name: '小功能', url: '/' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .bottom-bar
    background $headerBgColor
    position absolute
    left 0
    bottom 0
    right 0
    height: $bottomHeight
    ul
      display flex
      li
        flex 1
        color $textColor
        text-align center
        line-height 60px
</style>
