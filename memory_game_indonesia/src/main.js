import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Cards from './components/Cards'
// import ScoreBoard from './components/ScoreBoard'

Vue.config.productionTip = false

const routes = [
    {path:'/cards', component: Cards}
    // {path:'/scores', component: ScoreBoard}

]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
