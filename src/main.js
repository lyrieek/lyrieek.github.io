import Vue from 'vue';
import App from './App';
import router from './router.js';

export default new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
