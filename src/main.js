import Vue from 'vue';
import App from './App.vue';
import routes from './router.js';

const app = new Vue({
  routes,
  render: (h) => h(App)
}).$mount('#wrap');

console.log(routes.push);
console.log(app);

