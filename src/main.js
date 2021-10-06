import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import { Table } from 'buefy'
import 'buefy/dist/buefy.css'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Buefy)
Vue.use(Table)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
