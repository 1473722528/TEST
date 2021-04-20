<template>
    <div>
      <el-row type="flex" class="usermanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>用户管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip  effect="dark" content="点击打开增加用户表单" placement="left">
                  <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip  effect="dark" content="点击打开或关闭编辑用户按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>
                <el-tooltip  effect="dark" content="点击打开或关闭删除用户按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle3' :linkIcon='linkIcon3'/>
                </el-tooltip>  
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
                  <TableMsg :tableData='userData' :tableKey='userKey' :editShow="editShow" :deleteShow="deleteShow" :formTitle="formTitle2" :formKey="formKey2"
                  :formKeyNum="formKeyNum2" />
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="userData" />
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogFrom :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules1" :fun="addDialogClose" 
      :formKeyNum="formKeyNum1"  :formTitle="formTitle1" :formKey="formKey1" /> 
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
        },{
          label:'用户手机号',
          data:'userPhone'
        },{
          label:'用户邮箱',
          data:'userEmail'
        },{
          label:'身份证号码',
          data:'userIdCard'
        }],
        formKeyNum1:5,
        formSign:'add',

        formTitle2:'编辑用户',
        formKey2:[{
          label:'用户ID',
          data:'userId'
        },{
          label:'用户名',
          data:'userName'
        },{
          label:'用户手机号',
          data:'userPhone'
        },{
          label:'用户邮箱',
          data:'userEmail'
        },{
          label:'身份证号码',
          data:'userIdCard'
        }],
        formKeyNum2:5,

        ruleForm:{
          userId:'',
          userName:'',
        },
        rules1: {
          userId: [
            { required: true, message: '请输入用户ID', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },

        userKey:[{
          prop:'userId',
          label:'用户ID',
          width:110
        },{
          prop:'userName',
          label:'用户名',
          width:80
        },{
          prop:'userPassword',
          label:'用户密码',
          width:120
        },{
          prop:'userPhone',
          label:'用户手机号',
          width:120
        },{
          prop:'userEmail',
          label:'用户邮箱',
         
        },{
          prop:'userIdCard',
          label:'身份证号码'
        },{
          prop:'userRole',
          label:'用户权限',
          width:100
        }
        ],
        userData: [{
          userId: 2017001,
          userName: '张伟',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员',
          userIdCard:441226199901010011
        }, {
          userId: 2017002,
          userName: '李刚',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员',
          userIdCard:441226199901010012
        }, {
          userId: 2017003,
          userName: '葫芦侠',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员',
          userIdCard:441226199901010022
        }, {
          userId: 2017004,
          userName: '必胜客',
          userPassword:'12345',
          userPhone:13322331122,
          userEmail:'1222222@qq.com',
          userRole:'管理员',
          userIdCard:441226199901010033
        }]

      }
    },
    watch:{
      editShow(value){
        if(value==true){
          this.linkTitle2="退出编辑";
        }else{
          this.linkTitle2="编辑用户";
        }
      },
      deleteShow(value){
        if(value==true){
          this.linkTitle3="退出删除";
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
   box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   text-align: center;
   padding: 0px;
 }
 
 .el-main {
   text-align: center;
   padding: 0px;
   margin: 0px;
    
 }
 .usermanage{
   margin-top: 10px;
   
 }
 .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>