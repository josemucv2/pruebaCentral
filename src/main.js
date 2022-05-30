import Vue from 'vue'
import App from './App.vue'
import router from '../src/routers/router'
import VueRouter from 'vue-router'
import store from './store/index.js'
import  './style.css'



Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
