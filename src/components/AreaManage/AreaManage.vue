<template>
    <div>
      <el-row type="flex" class="areamanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>地区管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip class="item" effect="dark" content="点击打开增加用户表单" placement="left">
                  <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击打开或关闭编辑用户按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击打开或关闭删除用户按钮" placement="left">
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
      <DialogFrom :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules" :fun="addDialogClose" 
      :formKeyNum="formKeyNum"  :formTitle="formTitle" :formKey="formKey" /> 
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

        formTitle:'添加用户',
        formKey:[{
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
        formKeyNum:5,
        formSign:'add',


        ruleForm:{
          userId:'',
          userName:'',
        },
        rules: {
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
          width:110
        },{
          prop:'userPassword',
          label:'用户密码',
          width:140
        },{
          prop:'userPhone',
          label:'用户手机号',
          width:180
        },{
          prop:'userEmail',
          label:'用户邮箱',
         
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
 .areamanage{
   margin-top: 10px;
   
 }
 .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>