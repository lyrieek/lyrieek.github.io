import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: require('./views/Home').default,
		alias: '/'
	}, {
		path: '/404',
		component: require('./views/404').default
	}, {
		path: '/kendo',
		component: require('./views/Kendo').default,
		children: [
			{ path: '', component: require('./views/kendo/Alert').default },
			{ path: 'Alert', component: require('./views/kendo/Alert').default },
			{ path: 'AutoComplete', component: require('./views/kendo/AutoComplete').default },
			{ path: '*', component: require('./views/404').default }
		]
	}, {
		path: '*',
		redirect: '/404'
	}]
});
