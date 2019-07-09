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
            <!-- ./'+fileName+'/'+name+'/'+o+'/'+o+'.jpg -->
            <img src="">
          </div>
          <div class="v-info clearfix">
              <div class="tool">
                <!-- ./'+fileName+'/'+name+'/'+o+'/'+o+'.jpg -->
                <a class="show-img" data-img="" href="javascript:;">封面</a>
                <!-- ./'+fileName+'/'+name+'/'+o+'/'+o+'.mp4 -->
                <a class="show-video" data-video="" href="javascript:;">播放</a>
                <!-- ./'+fileName+'/'+name+'/'+o+'/ -->
                <a class="show-file" href="">文件夹</a>
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
    curStarInfo: Object
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
  .v-info .tool a{ display: inline-block; width: 30px; height: 30px; color: #7490ab; text-indent: -999em;}
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

