<template>
	<div>
		<div class="line"></div>
		<div class="header-container">
			<object style="float:left;" data="/resources/logo.svg" type="image/svg+xml"></object>
			<div style="margin-left:250px; padding-top: 30px;">
				<h1 style="text-shadow: 5px 5px #1177aa;margin: 0;">Lyrieek</h1>
				<strong style="font-size:1.1em">Lyrieek是一个全面,丰富,开源,便于查找的在线帮助文档</strong>
			</div>
		</div>

		<!-- <el-row id="mainContent" :gutter="26">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>内容丰富</h2>
					<span>这里不但有官方详细的内容与翻译,还有对应的问题与解答,并且扩充了大量举例,满足各种需要</span>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>维护轻便</h2>
					<span>Lyrieek使用Vue + Element-UI构建,配置轻巧,便于改动,并在vue-cli的配置基础上进行了一些整合</span>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>频繁维护</h2>
					<span>定期自动检查并更进官网更新,更进最新文档进行更新,不过这一点暂时没有做到</span>
				</div>
			</el-col>
		</el-row> -->

		<div id="desperation">
			<p>安装Lyrieek项目到本地</p>
			<pre v-highlightjs><code class="bash">git clone https://github.com/lyrieek/lyrieek.github.io.git</code></pre>
			<p>启动</p>
			<pre v-highlightjs><code class="bash">npm i
npm run dev</code></pre>
		</div>

		<el-divider />
		<div id="homeBillboard">
			<el-row :gutter="20" style="margin:20px">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>Webpack</span>
								<el-button disabled style="float: right; padding: 3px 0" @click="leap('/webpack')" type="text">查看</el-button>
							</div>
							<div>webpack 是一个 JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</div>
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>Rollup.js</span>
								<el-button disabled style="float: right; padding: 3px 0" @click="leap('/rollup')" type="text">查看</el-button>
							</div>
							<vue-scroll>
								Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。
							</vue-scroll>
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>VS Code Plug-in</span>
								<el-button disabled style="float: right; padding: 3px 0" @click="leap('/kendo-ui')" type="text">查看</el-button>
							</div>
							<div>VS Code在构建之初就考虑到了Editor的可扩展性，几乎每一部分都可以通过扩展API进行定制和增强，VS Code的许多核心功能都是作为扩展构建的，并且使用相同的扩展API。从UI到编辑，几乎可以通过扩展API定制和增强VS代码的每个部分。</div>
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>Kendo</span>
								<el-button style="float: right; padding: 3px 0" @click="leap('/kendo')" type="text">查看</el-button>
							</div>
							<div>快速构建引人注目、高性能、响应迅速的Web应用程序,支持jquery/angular/react/vue库</div>
							<el-divider />
							<div>The ultimate collection of JavaScript UI components with libraries for jQuery, Angular, React, and Vue. Quickly build eye-catching, high-performance, responsive web applications—regardless of your JavaScript framework choice.</div>
						</el-card>
					</div>
				</el-col>
			</el-row>
		</div>
		<el-divider />

		<div style="text-align:center;color:gray;margin-bottom:20px;">
			<small>Copyright 2019 Lyrieek™</small>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			leap: function(e) {
				document.getElementById('github-fork-ribbon').style.display = 'none';
				this.$router.push(e);
			}
		}
	};

</script>

<style>
	.header-container {
		padding-left: 20%;
		background-color: #4ebdef;
		height: 200px;
	}

	.header-container * {
		color: #fff;
	}

	#mainContent {
		margin: 0 0 !important;
		padding: 25px 10%;
		text-align: center;
	}

	#mainContent>div>div {
		border: 1px #b6deee solid;
		border-radius: 10px;
		background: #a5e2fa;
		padding: 10px;
		font-size: 16px;
		line-height: 25px;
	}

	#mainContent>div>div>h2 {
		padding-bottom: 10px;
	}

	#desperation {
		max-width: 68rem;
		padding: 2rem 6rem;
		margin: 0 auto;
	}

	#homeBillboard .el-card__header>div>span {
		font-size: 1.9em;
	}

</style>
