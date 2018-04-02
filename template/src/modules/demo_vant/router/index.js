/**
 * Created by Rain on 2018/1/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes: [<%= _routes %>]
})

export default router
