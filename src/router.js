import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', component: index }
    ]
  })
  