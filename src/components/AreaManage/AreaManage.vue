<template>
    <div>
      <el-row type="flex" class="areamanage" justify="center">
        <el-col :span="13">
          <div>
            <el-container>
              <el-aside style="height:100%">
                <Link :fun="addOpen" :linkTitle='linkTitle1' />
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
      <DialogFrom :openDialogVisible="openDialogVisible" :fun="addClose" :formTitle="formTitle1" :formKey="formKey1"/> 
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData:[],
        tableKey:[],
        activeIndex: '1',

        input:'222222',
        select:'',
        openDialogVisible: false,

        linkTitle1:'新增地区',

        formTitle1:'添加地区',
        formKey1:[{
          label:'地区ID',
          data: ''
        },{
          label:'地区名称',
          data:''
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
      addOpen(){
        this.openDialogVisible=true;
        console.log(this.input);
      },
      addClose(){
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
   margin: 0px;
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
   margin: 0px;
 }
 .areamanage{
   margin-top: 50px;
 }
  .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>