import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: require('./views/Home').default,
		alias: '/'
	},{
		path: '/kendo',
		component: require('./views/Kendo').default
	}, {
		path: '*', redirect: '/'
	}]
});
