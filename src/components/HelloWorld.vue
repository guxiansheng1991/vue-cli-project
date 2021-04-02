<template>
  <div class="hello">
    <h1>dpr: {{dpr}}</h1>
    <h1>屏幕宽高: {{innerWidth}}, {{innerHeight}}</h1>
    <div class="box">box</div>
    <div class="ingore_box">ingore_box</div>
    <div class="box-1px"></div>
    <!--  图片模糊解决  -->
    <img class="ingore_img" src="https://www.zhangxinxu.com/study/201410/mm-width-128px.jpg"
         srcset="https://www.zhangxinxu.com/study/201410/mm-width-128px.jpg 128w, https://www.zhangxinxu.com/study/201410/mm-width-256px.jpg 256w, https://www.zhangxinxu.com/study/201410/mm-width-512px.jpg 512w"
         sizes="(max-width: 360px) 128px, 256px" alt="图片模糊解决">
    <div class="img-bg">img-bg</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dpr: window.devicePixelRatio,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background: antiquewhite;
}
.ingore_box {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
}
.box-1px {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  @include border-1px(0.5px);
}
.ingore_img {
  width: 300px;
  height: 300px;
}
.img-bg {
  width: 200px;
  height: 200px;
  background-image: url(https://www.zhangxinxu.com/study/201410/mm-width-128px.jpg);
  background-image: image-set( url(https://www.zhangxinxu.com/study/201410/mm-width-128px.jpg) 1x, url(https://www.zhangxinxu.com/study/201410/mm-width-256px.jpg) 2x, url(https://www.zhangxinxu.com/study/201410/mm-width-128px.jpg) 600dpi);
}
</style>
