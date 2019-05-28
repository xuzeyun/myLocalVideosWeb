<template>
  <div class="content" ref="wrapper">
    <div class="wrapper">
      <div class="welcome">
        <div class="banner">
          <h3>你好，欢迎您</h3>
          <p>我叫许泽云，是一名前端开发工程师。<br />从事前端开发工作多年，现于北京就职。<br />我喜欢听音乐、看电影、弹奏乐器。<br />生活中我是一个靠谱的朋友<br />工作中我是一位靠谱的合作伙伴。</p>
        </div>
        <article>
          <h4><strong>{</strong> 个人简介 <strong>}</strong></h4>
          <p>2010年开始进入大学，信息管理工程系、计算机网络技术专业。</p>
          <p>一次偶然的机会，我喜欢上了PS，喜欢用PS做一些小设计，比如亲自设计自己的QQ头像。当时做了很多，尝试了很多设计，刚设计完自己会觉得很好看，看几天就觉得好差。</p>
          <p>后来兴趣衍生到了网页制作，喜欢照猫画虎的设计一个网页，然后实现它。有时候索性直接实现网页，让后给它设计自己喜欢的配色。</p>
          <p>2013年临近毕业，我在老家找了一份工作开始实习，工作内容涵盖平面设计、网页设计、网页制作。看似工作内容丰富，其实每一样都做不好，也没有人带，每天都很迷茫。自己做了好几个月的页面，最终也没有能看到它上线。或许是出于兴趣，也或许是出于无奈，最终决定到北京找工作。</p>
          <p>2010年开始进入大学，信息管理工程系、计算机网络技术专业。</p>
          <p>一次偶然的机会，我喜欢上了PS，喜欢用PS做一些小设计，比如亲自设计自己的QQ头像。当时做了很多，尝试了很多设计，刚设计完自己会觉得很好看，看几天就觉得好差。</p>
          <p>后来兴趣衍生到了网页制作，喜欢照猫画虎的设计一个网页，然后实现它。有时候索性直接实现网页，让后给它设计自己喜欢的配色。</p>
          <p>2013年临近毕业，我在老家找了一份工作开始实习，工作内容涵盖平面设计、网页设计、网页制作。看似工作内容丰富，其实每一样都做不好，也没有人带，每天都很迷茫。自己做了好几个月的页面，最终也没有能看到它上线。或许是出于兴趣，也或许是出于无奈，最终决定到北京找工作。</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ContentWelcome',
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
          margin-bottom 5px
          z-index 1
      article
        box-sizing border-box
        padding 20px
        line-height 20px;
        p
          padding 0 10px
          margin-bottom 5px
        h4
          font-size 16px
          color #deaf27
          margin-bottom 10px
          strong
            color #398ec8
</style>
