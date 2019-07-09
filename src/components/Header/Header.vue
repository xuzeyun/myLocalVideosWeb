<template>
  <header>
    <div class="header clearfix">
      <h1 class="logo"></h1>
      <div class="nav">
        <ul class="clearfix">
          <router-link :to="item.url" v-for="item in navList" :key="item.id">
            <li>
              <a href="javascript:;">{{item.name}}</a>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="search">
        <input type="text" placeholder="电影编号/演员名字">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        {
          id: 1,
          name: '首页',
          url: '/'
        },
        {
          id: 2,
          name: '亚洲港台电影',
          url: '/asia_yes'
        },
        {
          id: 3,
          name: '亚洲大陆电影',
          url: 'asia_no'
        },
        {
          id: 4,
          name: '北美大片',
          url: 'usa'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  header
    background #1e293a
    height 49px
    position fixed
    top 0px
    left 0
    right 0
    border-bottom #151721 1px solid
    z-index 9
    .logo
      width 220px
      height 49px
      text-indent 56px
      font-size 20px
      line-height 50px
      color #8c96a9
      background url(../../assets/images/logo.png) no-repeat 20px 10px
      float left
    .search
      float right
      padding-right 30px
      padding-top 12px
      input
        width 200px
        border none
        line-height 26px
        border-radius 13px
        padding0 15px
    .nav
      padding-right 50px
      li
        float left
        line-height 49px
        a
          display block
          padding 0 15px
          font-size 14px
          color #487098
        .active
          background #0094f7
          color #fff
          background linear-gradient(#fe8c5c, #f61a93)
</style>
