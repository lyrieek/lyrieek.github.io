import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const getRoutes = (mapper, file) => ({
	path: mapper,
	component: resolve => require(['@/views/' + (file || mapper.substring(1))], resolve)
})

export default new VueRouter({
	routes: [{
		path: '/index',
		component: resolve => require(['@/views/Home'], resolve),
		alias: '/'
	}, getRoutes("/404"), {
		path: '/kendo-ui',
		component: resolve => require(['@/views/Kendo'], resolve),
		children: [
			getRoutes("", "kendo/Alert"),
			getRoutes("Alert", "kendo/Alert"),
			getRoutes("AutoComplete", "kendo/AutoComplete"),
			getRoutes("*", "404")
		]
	}, {
		path: '*',
		redirect: '/404'
	}]
});
