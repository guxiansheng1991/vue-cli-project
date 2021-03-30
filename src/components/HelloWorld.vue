<template>
  <div class="hello">
    <div class="box">box</div>
    <div class="ingore_box">ingore_box</div>
    <div class="box-1px"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
