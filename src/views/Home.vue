<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
	created() {
		console.log('当前环境变量NODE_ENV:', process.env.NODE_ENV);
		console.log('当前环境变量VUE_APP_ENV:', process.env.VUE_APP_ENV);
	}
}
</script>
