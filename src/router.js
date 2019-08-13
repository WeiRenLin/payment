import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import Step2 from '@/components/step2'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Index  },
  { path: '/Step2', component: Step2 }
  ];
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  