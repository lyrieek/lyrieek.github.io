<template>
	<div>
		<div class="line"></div>
		<div class="header-container">
			<h1 style="text-shadow: 5px 5px #1177aa;">快速,全面,丰富的前端帮助文档</h1>
			<div>
				<pre>我将分批次开发文档，第一批包括CSS3 & HTML5 & ES6，第二批包括NPM & Webpack & Gulp，第二批包括Vue & Angular & React</pre>
			</div>
		</div>
		<hr>
		<el-row id="mainContent" :gutter="26">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>内容丰富</h2>
					<span>这里不但有官方详细的内容与翻译，还有对应的问题与解答，并且扩充了大量举例，满足各种需要</span>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>高可信度</h2>
					<span>每段内容都会给出原文链接的位置，站长自任小白鼠，测试大多数错误内容，避开你将要跳下去的坑</span>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<h2>频繁维护</h2>
					<span>定期自动检查并更进官网更新，站长审核后会做出相应更新，不过这一点暂时没有做到</span>
				</div>
			</el-col>
		</el-row>

		<el-divider></el-divider>
		<div>
			<el-row :gutter="20" style="margin:20px">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>Kendo</span>
								<el-button style="float: right; padding: 3px 0" @click="leap('/kendo')" type="text">查看</el-button>
							</div>
							<div>快速构建引人注目、高性能、响应迅速的Web应用程序,支持jquery/angular/react/vue库</div>
							<el-divider></el-divider>
							<div>The ultimate collection of JavaScript UI components with libraries for jQuery, Angular, React, and Vue. Quickly build eye-catching, high-performance, responsive web applications—regardless of your JavaScript framework choice.</div>
							<!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
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
	h1 {
		font-size: 4.7em;
	}

	.header-container {
		padding: 70px;
		padding-left: 20%;
		background-color: #4ebdef;
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

</style>
