<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <router-link to="/HelloWorld">HelloWorld</router-link>
  </div>
</template>

{{#auto_router}}
<routeMeta>
  {
    title: '首页',
    layout: 'layout-home'
  }
</routeMeta>
{{/auto_router}}

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
