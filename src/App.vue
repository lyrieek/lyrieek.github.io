<template>
	<div id="app">
		<a class="github-fork-ribbon" href="https://github.com/lyrieek/lyrieek.github.io" title="GitHub"></a>
		<el-menu id="nav-menu" mode="horizontal" @select="select" router>
			<li class="el-menu-item el-icon-star-on" style="margin-right: 10%;"></li>
			<el-menu-item index="kendo">指南</el-menu-item>
			<el-menu-item index="standard">标准</el-menu-item>
			<el-menu-item index="api">API</el-menu-item>
			<el-submenu index="_">
				<template slot="title">产品</template>
				<el-menu-item index="docTool">文档生成引擎</el-menu-item>
				<el-menu-item index="plugin">部署插件</el-menu-item>
			</el-submenu>
			<li class="el-menu-item">
				<el-input v-model="input" placeholder="在文档中搜索"></el-input>
			</li>
			<el-menu-item index="message" disabled>消息</el-menu-item>
		</el-menu>
		<div class="line"></div>
		<div class="header-container">
			<h1 style="text-shadow: 5px 5px #1177aa;">快速,全面,丰富的前端帮助文档</h1>
			<p @click="jump">帮助文档</p>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		render(h) {
			// throw new Error('oops')
		},
		methods: {
			jump: function() {
				this.$router.push({
					path: "/kendo"
				});
			},
			select: (key, keyPath) => {
				console.log(key + ":" + keyPath);
			}
		},
		data() {
			return {
				input: ''
			}
		}
	};

</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html {
		font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
	}

	h1 {
		font-size: 4.7em;
	}

	.header-container {
		margin-top: 20px;
		padding: 50px;
		padding-left: 20%;
		background-color: #4ebdef;
	}

	.header-container * {
		color: #fff;
	}

	#nav-menu {
		padding-left: 12%;
	}

</style>
