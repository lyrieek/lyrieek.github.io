import Vue from 'vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/atelier-lakeside-light.css';//darkula
import VueScroll from 'vuescroll';
import App from './App.vue';
import VueHighlightJS from 'vue-highlightjs'

Vue.use(ElementUI);
Vue.use(VueHighlightJS)
Vue.use(VueScroll, { ops: { bar: { background: '#6daee6' } } });

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
