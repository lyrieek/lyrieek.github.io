import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: {
			template: `<pre>
				搞出来了，element-ui要用postcssrc不早说
				</pre>`
		},
		alias: '/'
	},{
		path: '/kendo',
		component: require('./Kendo').default
	}, {
		path: '*', redirect: '/'
	}]
});
