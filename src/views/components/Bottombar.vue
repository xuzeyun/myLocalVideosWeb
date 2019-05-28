<template>
  <div class="bottom-bar border-top">
    <ul>
      <router-link :to="item.url" v-for="(item, index) of bottomItem" :key="index">
        <li>
          {{item.name}}
        </li>
      </router-link>
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
        { name: '工作经历', url: '/xxx' },
        { name: '学历项目', url: '/xxx' },
        { name: '小功能', url: '/xxx' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-top
    &:before
      border-color $borderColor
  .bottom-bar
    background $headerBgColor
    position absolute
    left 0
    bottom 0
    right 0
    height: $bottomHeight
    ul
      display flex
      a
        display block
        flex 1
        color: #8d94a5
        text-align center
        line-height 60px
        li
          &:last-child
            border none
      .router-link-exact-active
        color #deaf27
</style>
