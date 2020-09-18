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
		path: '/kendo',
		component: resolve => require(['@/views/Kendo'], resolve),
		children: [
			getRoutes("", "kendo/Alert"),
			getRoutes("alert", "kendo/Alert"),
			getRoutes("autocomplete", "kendo/AutoComplete"),
			getRoutes("*", "404")
		]
	}, {
		path: '/blog',
		component: resolve => require(['@/views/Blog'], resolve),
		children: [
			getRoutes("", "blog/Index"),
			getRoutes("*", "404")
		]
	}, {
		path: '*',
		redirect: '/404'
	}]
});
