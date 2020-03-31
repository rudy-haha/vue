import Vue from 'vue'
import Router from 'vue-router'
import Box from '@/components/Box'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/:path', component:Box },
    { path:'/', redirect:'/home' }
  ]
})
