/**
 * 单页入口JS，各个模块可以参考
 */
import 'es6-promise/auto'
import Vue from 'vue'
import FastClick from 'fastclick'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import wechatTitle from 'vue-wechat-title'
import { DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
import { VueExtendLayout, layout } from '../../plugins/layout'

// 2.处理i18n(暂不处理)

// 3.处理vux状态，加载动画、前进后退、位置
store.registerModule('vux', {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
})

// 4.global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// 5.安装全局插件
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

Vue.use(VueExtendLayout, {layouts: require.context('./layouts', false, /^\.\/.*\.vue$/)})

// test?
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

// 6.点击延迟
FastClick.attach(document.body)

// 7.处理路由
Vue.use(CloseDialogsPlugin, router)

// 设置微信标题
Vue.use(wechatTitle)

// 将当前路由信息同步到store.state中
sync(store, router)

// 简单的路由历史管理
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

// 路由跳转前的附加动作
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'forward' })
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', { direction: '' })
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'forward' })
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

// 路由跳转后的附加动作
router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable*/
// 8.实例Vue
new Vue({
  el: '#app',
  store,
  router,
  ...layout,
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})
