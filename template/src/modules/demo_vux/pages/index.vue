<template>
  <div>   
    <group-title>2 columns</group-title>
    <grid>
      <grid-item :label="'九宫格'" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/images/grid_icon.png">
      </grid-item>
    </grid>
    <group-title>3 columns</group-title>
    <grid>
      <grid-item link="/details/cell" :label="'跳转单元格'">
        <img slot="icon" src="../assets/images/grid_icon.png">
      </grid-item>
      <grid-item :link="{ path: '/details/cell'}" :label="'跳转单元格'">
        <img slot="icon" src="../assets/images/grid_icon.png">
      </grid-item>
      <grid-item link="/details/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/images/grid_icon.png">
        <span slot="label">跳转单元格</span>
      </grid-item>
    </grid>
    <group-title>4 columns</group-title>
    <grid>
      <grid-item :label="'九宫格'" v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/images/grid_icon.png">
      </grid-item>
    </grid>
    <group-title> 自定义内容 </group-title>
    <grid>
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">\{{i}}</span>
      </grid-item>
    </grid>
    <group-title> 自定义列 </group-title>
    <grid :cols="3">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">\{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<routeMeta>
  {
    title: '首页',
    showBack: false,
    showMore: false,
    layout: 'layout-home'
  }
</routeMeta>

<script>
import { Grid, GridItem, GroupTitle, XHeader } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    XHeader
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>
