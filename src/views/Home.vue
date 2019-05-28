<template>
  <div>
    <home-header></home-header>
    <home-welcome></home-welcome>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBottombar from './components/Bottombar'
import HomeWelcome from './home/components/Welcome'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBottombar,
    HomeWelcome
  }
}
</script>
