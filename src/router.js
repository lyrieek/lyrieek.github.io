import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: {
			template: `<pre>
				我去这么快就转点了，vue真特么坑
				刚查到原因在https://github.com/vuejs/vue-loader/releases/tag/v13.0.0
				不过我就喜欢这么坑的</pre>
			`
		},
		alias: '/'
	},{
		path: '/kendo',
		component: require('./Kendo').default
	}, {
		path: '*', redirect: '/'
	}]
});
