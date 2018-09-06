import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: require('./App'),
		alias: '/'
	},{
		path: '/kendo',
		component: require('./Kendo')
		// component: {
    //   // template: "<a>123</a>"
    // }
	}, {
		path: '*', redirect: '/'
	}]
});
