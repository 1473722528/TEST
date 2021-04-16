<template>
    <div>
      <el-row type="flex" class="usersmanage" justify="center">
        <el-col :span="13">
          <div>
            <el-container>
              <el-aside style="height:100%">
                <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                <Link :fun="deleteOpen" :linkTitle='linkTitle3' :linkIcon='linkIcon3'/>
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
                  <TableMsg :tableData='userData' :tableKey='userKey' :editShow="editShow" :deleteShow="deleteShow"/>
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="userData" />
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogFrom :openDialogVisible="openAddDialog" :ruleForm="ruleForm"  :fun="addDialogClose" :formTitle="formTitle1" :formKey="formKey1"/> 
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

        openAddDialog:false,
        

        editShow:false,
        deleteShow:false,

        linkTitle1:'新增用户',
        linkIcon1:'el-icon-plus',
        linkTitle2:'编辑用户',
        linkIcon2:'el-icon-edit',
        linkTitle3:'删除用户',
        linkIcon3:'el-icon-delete',

        formTitle1:'添加用户',
        formKey1:[{
          label:'用户ID',
          data:'userId'
        },{
          label:'用户名',
          data:'userName'
        }],

        ruleForm:{
          userId:'',
          userName:'',
        },

        userKey:[{
          prop:'userId',
          label:'用户ID',
          width:90
        },{
          prop:'userName',
          label:'用户名',
          width:90
        },{
          prop:'userPassword',
          label:'用户密码',
          width:100
        },{
          prop:'userPhone',
          label:'用户手机号',
          width:130
        },{
          prop:'userEmail',
          label:'用户邮箱',
          width:150
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
    watch:{
      editShow(value){
        if(value==true){
          this.linkTitle2="关闭编辑";
        }else{
          this.linkTitle2="编辑用户";
        }
      },
      deleteShow(value){
        if(value==true){
          this.linkTitle3="关闭删除";
        }else{
          this.linkTitle3="删除用户";
        }
      }
    },
    methods: {
      addDialogOpen(){
        this.openAddDialog=true;
        console.log("open");
      },
      addDialogClose(){
        this.openAddDialog=false;
        console.log("close")
      },
      editOpen(){
        this.editShow=!this.editShow;
        this.deleteShow=false;

        console.log(this.editShow)
      },
      deleteOpen(){
        this.deleteShow=!this.deleteShow;
        this.editShow=false;
        console.log(this.deleteShow)
      },
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
 .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>