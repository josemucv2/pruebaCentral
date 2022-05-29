import Vue from 'vue'
import App from './App.vue'
import router from '../src/components/routers/router'
import VueRouter from 'vue-router'
import  './style.css'



Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
