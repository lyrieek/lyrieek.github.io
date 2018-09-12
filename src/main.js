import Vue from 'vue'
import $ from 'JSLite'
import router from './router.js'
import App from './App'


console.log($);

export default new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
