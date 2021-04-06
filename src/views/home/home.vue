<template>
  <div id="nav">
    home
	<div>
	<user-info></user-info>
	</div>
  </div>
</template>

<script>
import UserInfo from './components/userInfo';
export default {
	name: 'introduce',
	data() {
		return {}
	},
	components: {
		UserInfo
	},
	created() {
		console.log('当前环境变量NODE_ENV:', process.env.NODE_ENV);
	}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
