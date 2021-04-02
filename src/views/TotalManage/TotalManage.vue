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
          <el-menu-item index="2-3" @click="MyMsg()">用户管理</el-menu-item>
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

        areaKey:[{
          prop:'id',
          label:'ID',
          width: 180
        },{
          prop:'areaId',
          label:'地区代码'
        },{
          prop:'areaName',
          label:'地区名'
        }
        ],
        areaData: [{
          id: 1,
          areaId: 1111,
          areaName: '广东',
          hasChildren: true,
          child:[{
            id:11,
            areaId:1112,
            areaName: '广州市'
          }]
        }, {
          id: 2,
          areaId: 2222,
          areaName: '广西',
          hasChildren:true,
          child:[{
              id:21,
              areaId:2223,
              areaName:'柳州市'
          }]
        }, {
          id: 3,
          areaId: 3333,
          areaName: '河北',
          hasChildren: true,
          child:[{
              id:31,
              areaId:3334,
              areaName:'唐山市'
          }]
        }, {
          id: 4,
          areaId: 4444,
          areaName: '河南',
          hasChildren:true,
          child:[{
              id:41,
              areaId:4445,
              areaName:'开封市'
          }]
        }]

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
      AreaMsg(){    //赋予组件值，加载地区信息组件
        return this.currentView='TableMsg',this.tableData=this.areaData,this.tableKey=this.areaKey;
      },
      UserMsg(){
        return this.currentView='TableMsg',this.tableData=this.userData,this.tableKey=this.userKey;
      },
      load(tree, treeNode, resolve) {   //加载树节点
        setTimeout(() => {
          resolve(tree.child)
        }, 1000)
      }
    }
  }
</script>
<style>

</style>>