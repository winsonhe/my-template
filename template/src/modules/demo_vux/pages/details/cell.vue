<template>
  <div>
    <p>我的Cell</p>
    <router-link to="/details/cell2">跳转到Cell2</router-link>
  </div>
</template>

<routeMeta>
  {
    title: '详情页',
    showBack: true,
    showMore: false,
    layout: 'layout-detail'
  }
</routeMeta>

<script>
import { ViewBox, Tabbar, TabbarItem, XHeader, Loading } from 'vux'

export default {
  name: 'app',
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader,
    Loading
  }
}
</script>
