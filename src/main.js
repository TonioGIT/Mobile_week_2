import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'
Vue.component('list-compo', MachinesList)
Vue.component('map-compo', MachinesMap)
Vue.component('machine-compo', Machine)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})