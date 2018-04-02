<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <transition name="vux-login" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { TransferDom, Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'layout-login',
  directives: {
    TransferDom
  },
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';
  @import '../../../assets/css/main.css';
</style>
