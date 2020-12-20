<template>
	<div>
		<a id="github-fork-ribbon" class="github-fork-ribbon" href="https://github.com/lyrieek/lyrieek.github.io" title="GitHub"></a>
		<div class="line"></div>
		<header>
			<div style="padding-top: 30px;">
				<h1 style="margin: 0;font-size: 3em;">Lyrieek</h1>
				<h2 style="font-size: 1.2em">Software engineer</h2>
			</div>
		</header>

		<div style="width: 800px; margin: 50px auto;">
			<div style="display: flex;">
				<div>
					<object style="border-radius: 12px;border: 1px solid #b78e51;" data="/resources/author.svg" width="200px" type="image/svg+xml"></object>
				</div>
				<ul style="font-size: 1.2em;margin-top: 0px;">
					<li style="text-indent: 2em;">人生而静，其情难见；感物而动，然后可辨。推之于棋，胜败可得而先验。持重而廉者多得，轻易而贪者多丧。不争而自保者多胜，务杀而不顾者多败。因败而思者，其势进；战胜而骄者，其势退。求己弊不求人之弊者，益；攻其敌而不知敌之攻己者，损。目凝一局者，其思周；心役他事者，其虑散。行远而正者吉，机浅而诈者凶。能畏敌者强，谓人莫己若者亡。意旁通者高，心执一者卑。语默有常，使敌难量。动静无度，招人所恶。《诗》云：「他人之心，予忖度之。」</li>
					<li style="text-align: right;"> ——《棋經十三篇·度情》</li>
				</ul>
			</div>
		</div>
		<div style="width: 950px; margin: 0 auto;">
			<el-row :gutter="20" style="margin:20px">
				<el-col :span="18">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>GitHub</span>
								<el-button style="float: right; padding: 3px 0" @click="leap('https://github.com/lyrieek')" type="text">查看</el-button>
							</div>
							<div>
								<table id="tables">
									<thead>
										<tr>
											<th>Project</th>
											<th>Type</th>
											<th align="left">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><a href="https://github.com/lyrieek/lyrieek-git">lyrieek-git</a></td>
											<td>Workflow Tool</td>
											<td align="left">Powerful visualization site for Git</td>
										</tr>
										<tr>
											<td><a href="https://github.com/lyrieek/SSH-Plugin">SSH-Plugin</a></td>
											<td>IDE Plug-in</td>
											<td align="left">Connect to the ssh server remotely on the Intellij-IDEA</td>
										</tr>
										<tr>
											<td><a href="https://github.com/lyrieek/explorer">explorer</a></td>
											<td>Desktop App</td>
											<td align="left">File explorer based on electron</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-card class="box-card">
							<div slot="header">
								<span>其他平台</span>
							</div>
							<ul id="list">
								<li><a href="https://twitter.com/lyrieek">Twitter.com/lyrieek</a></li>
								<li><a href="https://www.facebook.com/lyrieek">Facebook.com/lyrieek</a></li>
								<li><a href="https://gitlab.com/lyrieek">Gitlab.com/lyrieek</a></li>
								<li><a href="https://dzone.com/users/4566778/lyrieek.html">Dzone lyrieek</a></li>
								<li><a href="https://stackoverflow.com/users/15457918/lyrieek?tab=profile">StackOverflow lyrieek</a></li>
								<li><a href="https://juejin.cn/user/1398234521275102">掘金 lyrieek</a></li>
								<li><a href="https://www.jianshu.com/u/c68ad06741d1">简书 lyrieek</a></li>
							</ul>
						</el-card>
					</div>
				</el-col>
			</el-row>
		</div>
		<el-divider />

		<footer style="text-align:center;color:gray;padding-bottom:20px;">
			<small>Copyright© 2019 Lyrieek™</small>
		</footer>
	</div>
</template>

<script>
export default {
	methods: {
		leap: function(e) {
			window.open(e)
		}
	}
};

</script>

<style>
html,
body {
	margin: 0px;
	width: 100%;
	background: #f4ecdc;
}

header {
	text-align: center;
	background-color: #dab292;
	padding: 70px 0px;
}

header h1 {
	text-shadow: 5px 5px #ca742e;
}

header * {
	color: azure;
}

ul {
	list-style: none;
}

#tables {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

#tables th {
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	background-color: #dab292;
	color: white;
}

#tables td,
#tables th {
	border: 1px solid #da9054;
	padding: 8px;
}

#tables tr:nth-child(even) {
	background-color: #f2f2f2;
}

#tables tr:hover {
	background-color: #ddd;
}

#tables a:link {
	color: #c25e0c;
}

#tables a:visited {
	color: #ca742e;
}

#list {
	margin: 0;
	padding: 0;
}

#list a {
	color: black
}

</style>
