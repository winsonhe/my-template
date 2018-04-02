<template>
  <div id="app">
    <img src="../assets/logo.png">
    <p> Default layout</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'layout-default'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
