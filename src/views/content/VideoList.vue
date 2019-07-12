<template>
  <div class="content">
    <div id="av_list" class="v-li vertical-cover">
      <div id="av_namelist" class="av-namelist">
        <div class="pic">
          <img src="" alt="">
        </div>
        <div class="text">
          <h4>{{ curStarInfo.name }}</h4>
          <p>
            <span v-for="(item, index) in curStarInfo.videos" :key="index">{{ item }}</span>
          </p>
        </div>
      </div>
      <ul id="video_list" class="clearfix">
        <li v-for="(item, index) in curStarInfo.videos" :key="index">
          <div class="v-cover">
            <img :src="getImgUrl(fileName, curStarInfo.name, item)">
          </div>
          <div class="v-info clearfix">
              <div class="tool">
                <a class="show-img" href="javascript:;" @click="showCover(fileName, curStarInfo.name, item)">封面</a>
                <a class="show-video" href="javascript:;" @click="playVideo(fileName, curStarInfo.name, item)">播放</a>
                <a class="show-file" href="javascript:;" @click="openFile(fileName, curStarInfo.name, item)">文件</a>
              </div>
              <strong>{{ item }}</strong>
          </div>
        </li>
      </ul>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    fileName: String,
    curStarInfo: Object
  },
  updated () {
    console.log(this.curStarInfo)
  },
  computed: {
    imgUrl (val) {
      return ''+val
    }
  },
  methods: {
    getImgUrl (fileName, name, vId) {
      return './' + fileName +'/'+ name + '/'+ vId + '/'+ vId +'.jpg';
    },
    showCover (fileName, name, vId) {
      let url = './' + fileName +'/'+ name + '/'+ vId + '/'+ vId +'.jpg';
      console.log(url)
    },
    playVideo (fileName, name, vId) {
      let url = './' + fileName +'/'+ name + '/'+ vId + '/'+ vId +'.mp4';
      console.log(url)
    },
    openFile (fileName, name, vId) {
      let url = './' + fileName +'/'+ name + '/'+ vId + '/';
      console.log(url)
    }
  }
}
</script>

<style scoped>
  .v-li{ padding: 70px 30px 70px 370px; }
  /*namelist*/
  .v-li .av-namelist{ background: #1e293a; min-height: 100px; margin: 0 10px 30px;}
  .v-li .av-namelist .pic{ width: 100px; height: 100px; overflow: hidden; position: absolute;}
  .v-li .av-namelist .pic img{ width: 100%; }
  .v-li .av-namelist .text{padding-left: 120px; padding-right: 20px; padding-bottom: 10px;}
  .v-li .av-namelist .text h4{ color: #f83885; font-size: 18px; line-height: 40px; }
  .v-li .av-namelist .text p{ color: #487098; line-height: 20px;}
  /*videolist*/
  .v-li ul li{ width: 280px; margin: 0 10px 20px 10px; float: left;}
  .v-li ul li .v-cover{ width: 280px; height: 188px; background: #242a3b; position: relative; overflow: hidden; box-shadow: 2px 2px 5px #000; border-radius: 5px;
  }
  .v-li ul li .v-cover img{
    position: absolute;
      max-height: 188px;
      max-width: 280px;
      _height: 140px;
      vertical-align: middle;
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);
      -ms-transform:translate(-50%,-50%);
      -moz-transform:translate(-50%,-50%);
      -webkit-transform:translate(-50%,-50%);
      -o-transform:translate(-50%,-50%);
  }
  .v-info{ line-height: 30px; height: 30px; color: #7490ab; padding: 0 5px;}
  .v-info strong{ font-size: 12px; color: #487098; font-weight: normal;}
  .v-info .tool{ float: right; }
  .v-info .tool a{ display: inline-block; width: 30px; height: 30px; color: #7490ab;}
  .v-info .tool a:hover{color: #0094f7;}
  /* .v-info .tool .show-img{ background: url(../images/icon_02.png) no-repeat center; }
  .v-info .tool .show-video{background: url(../images/icon_01.png) no-repeat center;}
  .v-info .tool .show-file{background: url(../images/icon_03.png) no-repeat center;} */
  .index-wrapper .v-info{ line-height: 20px; height: 40px; }

  .vertical-cover{}
  .vertical-cover ul li .v-cover{ height: 398px; position: relative;}
  .vertical-cover ul li .v-cover img{ display: block;
    max-width: 593px; max-height: 398px;
    position: absolute; left: -313px; top: 50%;
  transform:translate(0%,-50%);
  -ms-transform:translate(0%,0%);
  -moz-transform:translate(0%,0%);
  -webkit-transform:translate(0%,-50%);
  -o-transform:translate(0%,0%);
  transition: left .2s;
  -moz-transition: left .2s;
  -webkit-transition: left .2s;
  -o-transition: left .2s;
  }
  .vertical-cover ul li .v-cover:hover img{left: 0px;}
</style>

