<template>
  <transition name="slide-fade">
    <div class="content" ref="wrapper">
      <div class="wrapper">
        <article>
          <h4><strong>{</strong> 我的技能 <strong>}</strong></h4>
          <ul>
            <li><em></em>熟练使用 Js/Css/Html 开发PC端及移动端页面，并处理页面常见兼容性问题</li>
            <li><em></em>熟悉HTML5/CSS3新特性，及ES6新语法</li>
            <li><em></em>熟悉Sass，Stylus等css预处理器的使用</li>
            <li><em></em>熟练目前较流行的前端开发框架 Vue.js，及周边插件的使用</li>
            <li><em></em>熟练webpack构建工具的使用</li>
            <li><em></em>熟练Bootstrap、ElementUI、jQuery、Zepto等常用前端库的应用</li>
            <li><em></em>熟练git版本管理工具的使用</li>
            <li><em></em>熟练常用atom、sublime、vscode等开发工具，以及常用周边插件的使用</li>
            <li><em></em>熟练Photoshop、Fireworks等图形化处理软件，能精准还原设计稿</li>
            <li><em></em>熟练排序、堆栈、递归等常见数据结构和算法</li>
            <li><em></em>熟悉常见设计模式</li>
            <li><em></em>了解node.js、Java等后端语言</li>
          </ul>
        </article>
      </div>
    </div>
  </transition>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'ContentSkill',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .content
    position absolute
    overflow hidden
    left 0
    right 0
    top $headerHeight
    bottom $bottomHeight
    background $contentBgColor
    color $textColor
    .wrapper
      box-sizing border-box
      padding 0px 0 20px
      .banner
        display flex
        justify-content center
        align-items center
        flex-direction column
        height 190px
        background-color  #000
        background-image url('~@/assets/images/banner.jpg')
        background-size cover
        &:before
          content: "";
          width:100%;
          height:190px;
          position: absolute;
          left:0;
          top:0;
          background: inherit;
          filter: blur(2px);
          z-index 0
        h3
          font-size 24px
          margin-bottom 20px
          z-index 1
        p
          font-size 14px
          padding 0 20px
          line-height 20px
          text-align center
          z-index 1
      article
        box-sizing border-box
        padding 20px
        line-height 20px;
        h4
          font-size 16px
          color #deaf27
          margin-bottom 10px
          strong
            color #398ec8
        ul
          padding 0 0 0 20px
          li
            margin-bottom 5px
            em
              display block
              position relative
              left -10px
              top 11px
              font-size 0
              width 3px
              height 3px
              background #596277
</style>
