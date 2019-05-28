<template>
  <header>
    <div class="logo"></div>
    <div class="title"><strong>XU</strong>ZEYUN</div>
    
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  header
    background $headerBgColor
    height: $headerHeight
    .title
      text-align center
      color #068cfb
      line-height $headerHeight
      font-style italic
      strong
        color #fdc228
        margin-right 10px
        font-style italic
</style>
