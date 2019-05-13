<template>
	<div>
		<el-container style="height: 700px; border: 1px solid #eee" id="kendoContainer">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<vue-scroll>
					<el-menu :default-openeds="['2']" router>
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>UI组件</template>
							<el-menu-item-group id="kendo-ui-competent-wrapper">
								<template v-for="(competentItems) in kendoCompetents">
									<el-menu-item v-bind:key="competentItems.text" :index="competentItems.href">{{competentItems.text}}</el-menu-item>
								</template>
								<!-- <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item> -->
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>函数</template>
							<el-menu-item-group>
								<el-menu-item index="/kendo/guid">guid</el-menu-item>
								<el-menu-item index="2-2">选项2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-menu"></i>Globalization</template>
							<el-menu-item-group>
								<el-menu-item index="/kendo/numberformatting">Number Formatting</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</vue-scroll>
			</el-aside>

			<el-container>
				<el-header style="text-align: left; font-size: 12px">
					<el-button type="text" icon="el-icon-refresh" @click="load"></el-button>
					<el-dropdown>
						<i class="el-icon-setting"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item @click="test">查看</el-dropdown-item>
							<el-dropdown-item>新增</el-dropdown-item>
							<el-dropdown-item>删除</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-header>

				<el-main>
					<h1>Kendo</h1>
					<h3 @click="test">Build Better JavaScript Apps Faster</h3>
					<pre>
The ultimate collection of JavaScript UI components with libraries for jQuery, Angular, React, and Vue. Quickly build eye-catching, high-performance, responsive web applications—regardless of your JavaScript framework choice.
    </pre>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		mounted(h) {
			this.load();
		},
		data() {
			return { kendoCompetents: [] };
		},
		methods: {
			load() {
				document.getElementById('kendoContainer').style.height =
					document.body.offsetHeight - document.getElementById('nav-menu').offsetHeight + 'px';
				fetch('/data/kendo/ui.competent.json').then((e) =>
					e.json()).then((data) => {
					this.kendoCompetents = data;
				});
			},
			test() {
				console.log(123);

				this.$router.push("/kendo/Alert");
			}
		}
	}

</script>
