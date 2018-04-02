<template>
  <div>
    <group title="登录信息" class="weui-cells_form">
      <x-input title="用户名" name="username" placeholder="请输入用户名" :max="20"></x-input>
      <x-input title="密 码" type="text" placeholder="请输入密码" v-model="password" :min="6" :max="20"></x-input>
      <x-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
      </x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="onEnter" type="primary">确认登录</x-button>
    </div>
  </div>
</template>

<routeMeta>
  {
    layout: 'layout-login'
  }
</routeMeta>

<script>
import { XInput, Group, XButton } from 'vux'

export default {
  components: {
    XInput,
    XButton,
    Group
  },
  data () {
    return {
      password: '123465'
    }
  },
  methods: {
    onEnter (val) {
      this.$router.push('/')
    }
  }
}
</script>
