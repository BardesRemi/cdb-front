import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './plugins'
import { axios } from '@/api'

Vue.config.productionTip = false

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
