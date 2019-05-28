<template>
  <div>
    <home-header></home-header>
    <skill-content></skill-content>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeBottombar from '../components/Bottombar'
import SkillContent from './components/Content'
export default {
  name: 'Skill',
  components: {
    HomeHeader,
    HomeBottombar,
    SkillContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
