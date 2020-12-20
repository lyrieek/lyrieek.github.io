import Vue from 'vue'
import ElementUI from 'element-ui';
import VueScroll from 'vuescroll';
import VueHighlightJS from 'vue-highlightjs'

import router from './router.js'

import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/atelier-lakeside-light.css';//darkula

import Home from './Home.vue';
// import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueHighlightJS)
Vue.use(VueScroll, { ops: { bar: { background: '#6daee6' } } });

export default new Vue({
	router,
	render: (h) => h(Home)
}).$mount('#app');
