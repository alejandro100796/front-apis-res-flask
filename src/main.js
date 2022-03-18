
import '@/assets/css/general.css'
import "vue-snotify/styles/material.css"
import Vue      from 'vue'
import App      from './App.vue'
import router   from './router'
import store    from './store'
import vuetify  from './plugins/vuetify'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import "./filters.js"


const snotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop,
    timeout: 4000,
    closeOnClick:true,
    pauseOnHover:true,
    titleMaxLength:60,
    icon:false,
    maxOnScreen:5,
    preventDuplicates:true,
  }
}

Vue.config.productionTip = false
Vue.use(Snotify, snotifyOptions)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
