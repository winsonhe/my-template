<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header"
                style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                :left-options="leftOptions"
                :right-options="rightOptions"
                :title="title"
                @on-click-more="onClickMore">
      </x-header>
      <router-view class="router-view"></router-view>
      <tabbar slot="bottom">
        <tabbar-item :link="{path: '/'}" :selected="route.path === '/'">
          <img slot="icon" src="../assets/images/grid_icon.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path: '/customer'}" :selected="route.path === '/customer'" show-dot>
          <img slot="icon" src="../assets/images/grid_icon.png">
          <span slot="label">顾客</span>
        </tabbar-item>
        <tabbar-item :link="{path: '/finds'}" :selected="route.path === '/finds'">
          <img slot="icon" src="../assets/images/grid_icon.png">
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item :link="{path: '/carts'}" :selected="route.path === '/carts'" badge="2">
          <img slot="icon" src="../assets/images/grid_icon.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item :link="{path: '/my'}" :selected="route.path === '/my'" badge="2">
          <img slot="icon" src="../assets/images/grid_icon.png">
          <span slot="label">我</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem, XHeader, TransferDom, Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'layout-home',
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader,
    Loading
  },
  methods: {
    onClickMore () {
      this.$vux.bus.$emit('onShowMenu')
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    leftOptions () {
      return {
        showBack: this.route.meta.showBack
      }
    },
    rightOptions () {
      return {
        showMore: this.route.meta.showMore
      }
    },
    title () {
      return this.route.meta.title
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';
  @import '../../../assets/css/main.css';

  .router-view {
    width: 100%;
    top: 46px;
  }
</style>
