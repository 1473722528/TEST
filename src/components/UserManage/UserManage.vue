<template>
    <div>
      <el-row type="flex" class="usersmanage" justify="center">
        <el-col :span="13">
          <div>
            <el-container>
              <el-aside style="height:100%">
                <Link :fun="addOpen" :linktitle='linktitle1'/>
                <Link :fun="addOpen" :linktitle='linktitle1'/>
                <Link :fun="addOpen" :linktitle='linktitle1'/>
              </el-aside>
              <el-container>
                <el-header style="height:40px">
                    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="姓名" value="1"></el-option>
                    <el-option label="ID" value="2"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main> 
                  <TableMsg :tableData='userData' :tableKey='userKey'/>
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="userData" />
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

        input:'3333333',
        select:'',
        openDialogVisible: false,

        linktitle1:'新增用户',

        formTitle1:'添加用户',
        formKey1:[{
          label:'用户ID',
          data: ''
        },{
          label:'用户名',
          data:''
        }],

        userKey:[{
          prop:'userId',
          label:'用户ID',
          width:100
        },{
          prop:'userName',
          label:'用户名',
          width:100
        },{
          prop:'userPassword',
          label:'用户密码',
          width:120
        },{
          prop:'userPhone',
          label:'用户手机号',
          width:150
        },{
          prop:'userEmail',
          label:'用户邮箱',
          width:160
        },{
          prop:'userRole',
          label:'用户权限',
         
        }
        ],
        userData: [{
          userId: 2017001,
          userName: '张伟',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员'
        }, {
          userId: 2017002,
          userName: '李刚',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员'
        }, {
          userId: 2017003,
          userName: '葫芦侠',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员'
        }, {
          userId: 2017004,
          userName: '必胜客',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员'
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
 .usersmanage{
   margin-top: 50px;
 }
</style>