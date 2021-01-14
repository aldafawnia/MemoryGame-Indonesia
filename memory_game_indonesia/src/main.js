import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Cards from './components/Cards'
import ScoreBoard from './components/ScoreBoard'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const routes = [
    {path:'/cards', component: Cards},
    {path:'/scores', component: ScoreBoard}

]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
