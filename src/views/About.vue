<template>
  <div class="about">
    <h1>This is an about page</h1><van-button type="primary">主要按钮</van-button>
	<van-cell-group>
	<van-cell title="单元格" value="内容" />
	<van-cell title="单元格" value="内容" label="描述信息" />
	</van-cell-group>
  </div>
</template>

<script>
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button as VanButton, Cell as VanCell, CellGroup as VanCellGroup } from 'vant';
export default {
	name: 'about',
	data() {
		return {
		}
	},
	components: {
		VanButton, VanCell, VanCellGroup
	}
}
</script>

<style lang="sass" scoped>

</style>