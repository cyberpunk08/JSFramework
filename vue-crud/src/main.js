import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'//test1.............
import EditComponent from './components/EditComponent'//test1.............
import ListComponent from './components/ListComponent'//test1.............

import store from './store'//test2...................

Vue.config.productionTip = false

//test1.............
Vue.use(VueRouter)
//action 에서 사용하기 위해서 export
export const router = new VueRouter({
  routes: [
    { path: '/', component: ListComponent },
    { path: '/add', component: EditComponent },
    { path: '/update/:id', component: EditComponent },
    { path: '*', component: ListComponent }
  ]
})

new Vue({
  render: h => h(App),
  router//test1....................
  ,store//test2............
}).$mount('#app')
