import Vue from 'vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueScroll from 'vuescroll';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueScroll, {
	ops: { bar: { background: '#6daee6' } }
});

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
