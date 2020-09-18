<template>
	<div style="width: 1140px;margin: 20px auto;">
		<!-- <el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="一致性 Consistency" name="1">
				<div>Oracle与OpenJDK之间的区别</div>
				<div>
					Oracle Java Development Kit和OpenJDK之间的差异
				</div>
			</el-collapse-item>
		</el-collapse> -->

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="title" label="标题" width="180">
			</el-table-column>
			<el-table-column prop="link" label="链接">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [{
				date: '2020-01-01',
				title: '标题',
				address: 'lyrieek.github.io'
			}]
		}
	}
}

</script>
