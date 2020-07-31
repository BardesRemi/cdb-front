import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import LangFlag from 'vue-lang-code-flags'
Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag)
new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
