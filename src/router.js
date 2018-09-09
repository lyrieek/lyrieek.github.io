import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/index',
		component: require('./App.vue'),
		alias: '/'
	},{
		path: '/kendo',
		// component: require('./Kendo.vue')
		component: {
      template: "<a>123</a>"
    }
	}, {
		path: '*', redirect: '/'
	}]
});
