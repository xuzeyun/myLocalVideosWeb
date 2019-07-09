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
  },
  data () {
    return {
      
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>
