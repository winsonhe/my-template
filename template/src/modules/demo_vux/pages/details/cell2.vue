<template>
  <div>
    <p>我的Cell2222</p>
  </div>
</template>

<routeMeta>
  {
    title: '详情页2',
    showBack: true,
    showMore: true,
    layout: 'layout-detail'
  }
</routeMeta>

<script>
import { ViewBox, Tabbar, TabbarItem, XHeader, Loading } from 'vux'

export default {
  name: 'app2',
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader,
    Loading
  }
}
</script>
