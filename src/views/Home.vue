<template>
	<div>
		<div class="line"></div>
		<div class="header-container">
			<h1 style="text-shadow: 5px 5px #1177aa;">快速,全面,丰富的前端帮助文档</h1>
			<p @click="jump">帮助文档</p>
		</div>
    <hr>
    <p>目前尚在开发中</p>
	</div>
</template>

<script>
	export default {
		render(h) {
      console.log('home');
		},
		methods: {
			jump: function() {
				this.$router.push({
					path: "/kendo"
				});
			}
    }
	}
</script>

<style>
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

</style>
