{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#router}}
import router from './router'
{{/router}}
{{#layouts}}
import { VueExtendLayout, layout } from '../../plugins/layout'
{{else}}
import App from './App'
{{/layouts}}

Vue.config.productionTip = false

{{#layouts}}
Vue.use(VueExtendLayout, {layouts: require.context('./layouts', false, /^\.\/.*\.vue$/)})
{{/layouts}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#layouts}}
  ...layout,
  {{else}}
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>',
  {{/if_eq}}
  {{/layouts}}
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})
