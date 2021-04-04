<template>
    <div>
      <el-row type="flex" class="areamanage" justify="center">
        <el-col :span="13">
          <div>
            <el-container>
              <el-aside>
                <Link :fun="addArea" />
              </el-aside>
              <el-container>
                <el-header style="height:40px">
                    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="地点" value="1"></el-option>
                    <el-option label="ID" value="2"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main >
                  <TableMsg :tableData='areaData' :tableKey='areaKey' />
                </el-main>
                <el-footer style="height:33px">
                  <Pagination />
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogFrom :openDialogVisible="openDialogVisible" :fun="closeAdd" /> 
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData:[],
        tableKey:[],
        activeIndex: '1',
        currentView: 'MyMsg',

        input:'222',
        select:'',
        openDialogVisible: false,

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
      load(tree, treeNode, resolve) {   //加载树节点
        setTimeout(() => {
          resolve(tree.child)
        }, 100)
      },
      addArea(){
        this.openDialogVisible=true;
        console.log(this.input);
      },
      closeAdd(){
        this.openDialogVisible=false;
        console.log("close")
      }
    }
  }
</script>
<style>
 .el-header,.el-footer{

   text-align: center;
   padding: 0px;
 }
 
 .el-aside {
   background-color: #D3DCE6;
   color: #333;
   text-align: center;
   padding: 0px;
 }
 
 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   padding: 0px;
 }
 .areamanage{
   margin-top: 50px;
 }
</style>