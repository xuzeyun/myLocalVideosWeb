<template>
  <div>
    <home-header></home-header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBottombar from './components/Bottombar'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBottombar
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
