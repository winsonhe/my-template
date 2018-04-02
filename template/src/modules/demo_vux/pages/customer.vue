<template>
  <div>
    <x-button type="primary" @click.native="onBtnClick">我的顾客</x-button>
    <div>
      <p v-for="i in 100" :key="i">\{{i}}</p>
    </div>
    <actionsheet v-model="showMenu" :menus="menus"></actionsheet>
  </div>
</template>

<routeMeta>
  {
    title: '顾客',
    showBack: false,
    showMore: true,
    layout: 'layout-home'
  }
</routeMeta>

<script>
import { XButton, Actionsheet } from 'vux'

export default {
  components: {
    XButton,
    Actionsheet
  },
  methods: {
    onBtnClick () {
      this.showMenu = true
    }
  },
  mounted () {
    this.$vux.bus.$on('onShowMenu', () => {
      this.showMenu = true
    })
  },
  destroyed () {
    this.$vux.bus.$off('onShowMenu')
  },
  data () {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      }
    }
  }
}
</script>
