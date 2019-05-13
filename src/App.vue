<template>
	<div id="app">
		<a id="github-fork-ribbon" class="github-fork-ribbon" href="https://github.com/lyrieek/lyrieek.github.io" title="GitHub"></a>
		<el-menu id="nav-menu" mode="horizontal" @select="select" router>
			<li class="el-menu-item" style="margin-right: 10%;border-bottom-color: transparent;">
				<router-link to="/index" class="el-icon-star-on" style="text-decoration: none;" />
			</li>
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
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		methods: {
			select: function(key, keyPath) {
				if (!keyPath) {
					this.$router.push("kendo");
				}
			}
		},
		data() {
			return {
				input: ""
			};
		}
	};

</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-size: 14px;
	}

	h2 {
		font-size: 18px;
	}

	html {
		font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
	}

	#nav-menu {
		padding: 0px 12.5%;
	}

</style>
