<template>
  <div class="hotelmanage">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="MyMsg()">我的信息</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的管理台</template>
          <el-submenu index="2-1">
            <template slot="title">房间管理</template>
              <el-menu-item index="2-1-1">查看用户</el-menu-item>
              <el-menu-item index="2-1-2" @click="AddRoom()">添加房间</el-menu-item>
              <el-menu-item index="2-1-3">修改房间</el-menu-item>
              <el-menu-item index="2-1-4">删除房间</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">地区管理</template>
              <el-menu-item index="2-2-1">查看地区</el-menu-item>
              <el-menu-item index="2-2-2" @click="AddArea()">添加地区</el-menu-item>
              <el-menu-item index="2-2-3">修改地区</el-menu-item>
              <el-menu-item index="2-2-4">删除地区</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">用户管理</template>
              <el-menu-item index="2-3-1">查看用户</el-menu-item>
              <el-menu-item index="2-3-2" @click="AddUser()">添加用户</el-menu-item>
              <el-menu-item index="2-3-3">修改用户</el-menu-item>
              <el-menu-item index="2-3-4">删除用户</el-menu-item>
          </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="manage">
      <component :is="currentView"></component>
    </div>
  </div>
</template>>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        currentView: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      AddArea(){
          return this.currentView='AddArea';
      }
    }
  }
</script>
<style>

</style>>