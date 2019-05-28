<template>
  <header>
    <div class="logo">logo</div>
    <div></div>
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
</style>
