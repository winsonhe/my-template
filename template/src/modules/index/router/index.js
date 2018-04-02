/**
 * Created by Rain on 2018/1/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
{{#unless auto_router}}
import index from '../pages/index'
import HelloWorld from '../pages/HelloWorld'
{{/unless}}

Vue.use(VueRouter)

{{#unless auto_router}}
// 自己定义路由
const routes = [{
  path: '/',
  name: 'index',
  component: index,
  meta: {
    title: '首页',
    layout: 'layout-default'
  }
}, {
  path: '/HelloWorld',
  name: 'HelloWorld',
  component: HelloWorld,
  meta: {
    title: '首页',
    layout: 'layout-home'
  }
}]
{{/unless}}
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  {{#auto_router}}
  routes: [<%= _routes %>]
  {{else}}
  routes
  {{/auto_router}}
})

export default router
