<template>
  <div>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import Content from '../views/content/Content'
// import VideoList from '../videoView/VideoList'
export default {
  name: 'Home',
  components: {
    Header,
    Content
  }
}
</script>

<style lang="stylus" scoped>
  .slide-fade-enter-active
    transition all .3s ease
  .slide-fade-leave-active
    transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  .slide-fade-enter, .slide-fade-leave-to
    transform translateX(10px)
    opacity 0
</style>
