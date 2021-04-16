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
          <el-menu-item index="2-1" @click="RoomManage()">房间管理</el-menu-item>
          <el-menu-item index="2-2" @click="AreaManage()">地区管理</el-menu-item>
          <el-menu-item index="2-3" @click="UserManage()">用户管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >订单管理</el-menu-item>
    </el-menu>
    <div class="manage">
      <component :is="currentView" :tableData="tableData" :tableKey="tableKey"></component>
    </div>
  </div>
</template>>
<script>
  export default {
    data() {
      return {
        tableData:[],
        tableKey:[],
        activeIndex: '1',
        currentView: 'MyMsg',

        userKey:[{
          prop: 'id',
          label: 'ID',
        },{
          prop: 'userName',
          label: '用户名',
        },{
          prop: 'userAge',
          label: '年龄'
        }],
        userData:[{
          id: 1,
          userName: '张三',
          userAge: '18'
        },{
          id: 2,
          userName: '李四',
          userAge: '20'
        }],

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      MyMsg(){
        return this.currentView='MyMsg'
      },
      AreaManage(){    //赋予组件值，加载增加地区组件
        return this.currentView='AreaManage';
      },
      UserManage(){
        return this.currentView='UserManage';
      },
      RoomManage(){
        return this.currentView='RoomManage';
      },
      load(tree, treeNode, resolve) {   //加载树节点
        setTimeout(() => {
          resolve(tree.child)
        }, 100)
      }
    }
  }
</script>
<style>

</style>>