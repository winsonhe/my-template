<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px">
      <x-header slot="header"
                style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                :left-options="leftOptions"
                :right-options="rightOptions"
                :title="title"
                @on-click-more="onClickMore">
      </x-header>

      <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
                :name="viewTransition">
        <router-view class="router-view"></router-view>
      </transition>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, TransferDom, Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'layout-detail',
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
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
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    title () {
      return this.route.meta.title
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
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
