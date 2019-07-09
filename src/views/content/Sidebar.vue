<template>
  <div class="sidebar">
    <div class="tab-hd clearfix">
      <ul>
        <li><a @click="showState(1)" href="javascript:;" v-bind:class="{ active: activeIndex === 1 }">文本列表</a></li>
        <li><a @click="showState(2)" href="javascript:;" v-bind:class="{ active: activeIndex === 2 }">缩略图</a></li>
      </ul>
      <div class="info">
        演员数量：
        <b id="info_star_num">{{ asiaList.length }}</b>
        位，影片数量：
        <b id="info_video_num">{{ curTotal }}</b>
        部
      </div>
    </div>
    <div class="tab-bd">
      <div id="star_set" class="set clearfix">
        <template v-for="(item, index) in asiaList">
          <a v-if="sidebarState === 1" :key="index" @click="toStarPage(item.name)" class="v-text-li">
            <em>{{ item.name }}</em>
            <span class="num">{{ item.videos.length }}</span>
          </a>
          <a v-else :key="index" @click="toStarPage(item.name)" class="v-img-li">
            <span class="num">{{ item.videos.length }}</span>
            <div class="img-box">
            <img :src="'./assets/images/pic/' + item.name + '.jpg'" :title="item.name">
            </div>
            <p>{{ item.name }}</p>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    asiaList: Array
  },
  data () {
    return {
      sidebarState: 1,
      activeIndex: 1,
    }
  },
  computed: {
    curTotal () {
      let total = 0;
      for (let item of this.asiaList) {
        total += item.videos.length
      }
      return total;
    }
  },
  mounted () {
    // 获取url，跳转到指定演员页面
    let nameId = this.$route.params.nameId;
    console.log(nameId)
    this.toStarPage(nameId);
  },
  methods: {
    // 跳转到个人电影列表
    toStarPage (name) {
      this.$emit('get-name', name);
      this.$router.push({ name: 'videos', params: { nameId: name }})
    },
    // sidebar显示方式切换
    showState (id) {
      id === 1 ? this.sidebarState = 1 : this.sidebarState = 2
      this.activeIndex = id;
    }
  },
  watch: {
    // 监听路由变化
    '$route' (to, from) {
      let starName = to.params.nameId
      this.toStarPage(starName)
    }
  }
}
</script>

<style scoped>
/*==================sidebar==================*/
.sidebar{width: 320px; background:#1e293a; position: fixed; top: 70px; bottom: 20px; left: 20px; border-right: #181a26 1px solid;}
/* .sidebar-picbg{ background:#1e293a url(../images/sidebar_bg.jpg) no-repeat; } */
/*tab*/
.sidebar .tab-hd{ position: absolute; left: 0; top: 0px; height: 60px; background: #1e293a; border-bottom: #181a26 1px solid; width: 320px; z-index: 1;}
.sidebar .tab-hd ul{ height: 35px; }
.sidebar .tab-hd ul li{ width: 50%; float: left; text-align: center; padding-top: 5px; }
.sidebar .tab-hd ul li a{ display:block; height: 26px; line-height: 26px; color: #487098; margin: 0 10px; border-radius: 13px; cursor: pointer;}
.sidebar .tab-hd ul li a.active{ background: #f61a93; color: #fff;
background: -webkit-linear-gradient(#fe8c5c, #f61a93); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fe8c5c, #f61a93); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fe8c5c, #f61a93); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fe8c5c, #f61a93); /* 标准的语法 */
}
/*-------------------------------------------------------------*/
.sidebar .info{ line-height: 24px; border-top: #181a26 1px solid; text-align: center; color: #487098;}
.sidebar .info b{ color: #0094f7; margin: 0 5px; }
/*-------------------------------------------------------------*/
.sidebar .tab-bd{ overflow: auto; height: 100%;}
.sidebar .tab-bd .set{ padding: 75px 0px 20px 10px; }
.sidebar .tab-bd .set a.v-text-li{ display: inline-block; height: 20px; line-height: 20px; padding: 0 6px; color: #487098; background: #122036; border-radius: 10px; margin: 0 5px 5px 0; cursor: pointer;}
.sidebar .tab-bd .set a.active{ color: #1e293a; background: #00d4d7; }
.sidebar .tab-bd .set a.v-text-li span{ margin-left: 5px;}
.sidebar .tab-bd .set a.v-img-li{ display: block; width: 60px; position: relative; float: left; margin: 0 10px 16px 0px; z-index: 0; border-radius: 6px;}
.sidebar .tab-bd .set a.v-img-li .img-box{overflow: hidden; width: 60px; height: 60px; border-radius: 50%; background-color: #122036;}
.sidebar .tab-bd .set a.v-img-li img{ width: 100%;}
.sidebar .tab-bd .set a.v-img-li p{ line-height: 20px; height: 20px; font-size: 12px; text-align: center; overflow: hidden;}
.sidebar .tab-bd .set a.v-img-li span{display: block; height: 16px; width: 18px; line-height: 18px; text-align: center; vertical-align: top; position: absolute; right: -6px; top: -2px; background: #191c28;  border-radius: 3px; color: #0094f7;}
</style>
