import Vue from 'vue';
import App from './App.vue';
import routes from './router.js';

new Vue({
  el: '#wrap',
  routes,
  render: h => h(App)
})
