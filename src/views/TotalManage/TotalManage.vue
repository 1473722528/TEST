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
      <el-menu-item index="2" @click="MyOrder()">我的订单</el-menu-item>
      <el-submenu index="3" v-if="this.$store.state.userRole=='管理员'">
        <template slot="title">管理中心</template>
          <el-menu-item index="3-1" @click="UserManage()">用户管理</el-menu-item>
          <el-menu-item index="3-2" @click="HotelManage()">酒店管理</el-menu-item>
          <el-menu-item index="3-3" @click="OrderManage()">订单管理</el-menu-item>
      </el-submenu>
      
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
        //console.log(this.$store.getters.getUserRole);
        console.log(key, keyPath);
      },
      MyMsg(){                  //赋予组件值，加载组件
        return this.currentView='MyMsg'
      },
      MyOrder(){                //赋予组件值，加载组件
        return this.currentView='MyOrder'
      },
      UserManage(){         //赋予组件值，加载组件
        return this.currentView='UserManage';
      },
      HotelManage(){         //赋予组件值，加载组件
        return this.currentView='HotelManage';
      },
      OrderManage(){          //赋予组件值，加载组件
        return this.currentView='OrderManage'
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