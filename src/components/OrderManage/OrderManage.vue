<template>
    <div>
      <el-row type="flex" class="usermanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>订单管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip  effect="dark" content="点击打开或关闭编辑订单按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip  effect="dark" content="点击打开或关闭删除订单按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>  
              </el-aside>
              <el-container>
                <el-header style="height:40px">
                    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
                      <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="用户ID" value="userId"></el-option>
                      <el-option label="用户名" value="userName"></el-option>
                      <el-option label="用户电话" value="userPhone"></el-option>
                      <el-option label="用户邮箱" value="userEmail"></el-option>
                      <el-option label="身份证号码" value="userIdCard"></el-option>
                    </el-select>
                    <el-button @click="searchUserData()" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main> 
                  <TableMsg :tableData='userData' :tableKey='userKey' :editShow='editShow' :deleteShow='deleteShow' :formTitle='formTitle2' :formKey='formKey2'
                  :formKeyNum='formKeyNum2'  :dataKey='dataKey' :getData='getAllUserData'/>
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="userData" />
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogForm :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules1" :closefun="addDialogClose" 
      :formKeyNum="formKeyNum1"  :formTitle="formTitle1" :formKey="formKey1" :addfun="register"/> 
    </div>
</template>

<script>
import { getAllUserData,searchUserData,register} from '@/api/authority.js'
  export default {
    data() {
      return {
        tableData:[],
        tableKey:[],

        dataKey:'order',
        activeIndex: '1',

        input:'',
        select:'',

        openAddDialog:false,
        

        editShow:false,
        deleteShow:false,

        linkTitle1:'编辑订单',
        linkIcon1:'el-icon-edit',
        linkTitle2:'删除订单',
        linkIcon2:'el-icon-delete',

        formTitle1:'编辑订单',
        formKey1:[{
          label:'订单ID',
          data:'orderId'
        },{
          label:'下单人',
          data:'orderOwner'
        },{
          label:'预定日期',
          data:'orderDate'
        },{
          label:'酒店ID',
          data:'orderHotelId'
        },{
          label:'酒店名',
          data:'orderHotelName'
        },{
          label:'房间ID',
          data:'orderRoomId'
        },{
          label:'房间名',
          data:'orderRoomName'
        },{
          label:'房间数量',
          data:'orderRoomNum'
        },{
          label:'房间日期',
          data:'orderRoomDate'
        },{
          label:'房间单价',
          data:'orderRoomPrice'
        },{
          label:'房间使用者',
          data:'roomUser'
        },{
          label:'使用者身份证',
          data:'roomUserIdCard'
        },{
          label:'订单金额',
          data:'orderPrice'
        },{
          label:'订单状态',
          data:'orderState'
        }],
        formKeyNum2:5,

        searchInput:{
          userId:null,
          userName:null,
          userPhone:null,
          userEmail:null,
          userIdCard:null,
        },

        ruleForm:{
          userId:null,
          userName:null,
          userPassword:null,
          userPhone:null,
          userEmail:null,
          userIdCard:null,
          userAge:null
        },
        rules: {
          userId: [
            { required: true, message: '请输入用户ID', trigger: 'blur' },
            { min: 7, max: 7, message: '请输入 7 个数字长度的ID', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '用户名长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          userPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
          userPhone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' }
          ],
          userEmail: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          userIdCard: [
            { required: true, message: '请输入身份证号码', trigger: 'blur' },
            { min: 18, max: 18, message: '请输入18位的身份证号码', trigger: 'blur' }
          ],
          userAge: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
            { min: 2, max: 3, message: '请输入正确年龄段的数字', trigger: 'blur' }
          ],
        },

        orderKey:[{
          prop:'orderId',
          label:'订单ID',
          width:110
        },{
          prop:'orderOwner',
          label:'下单人',
          width:80
        },{
          prop:'orderHotelId',
          label:'酒店ID',
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
        orderData: []

      }
    },
    created(){
      this.getAllUserData();
    },
    watch:{
      editShow(value){
        if(value==true){
          this.linkTitle1="退出编辑";
        }else{
          this.linkTitle1="编辑订单";
        }
      },
      deleteShow(value){
        if(value==true){
          this.linkTitle2="退出删除";
        }else{
          this.linkTitle2="删除订单";
        }
      }
    },
    methods: {
      getAllUserData(){
        getAllUserData().then(response => {
          console.log(response)
          this.userData = response;
          console.log(this.userData)
        })
      },
      register(){
        register(this.ruleForm).then(response=>{
          if(response.state==200){
            console.log("success add");
            this.getAllUserData();
          }
        })
      },
      searchUserData(){
        if(this.select=='userId'){
          this.searchInput.userId=parseInt(this.input);
          console.log(this.searchInput.userId);
        }else if(this.select=='userName'){
          this.searchInput.userName=this.input;
        }else if(this.select=='userEmail'){
          this.searchInput.userEmail=this.input;
        }else if(this.select=='userPhone'){
          this.searchInput.userPhone=this.input;
        }else if(this.select=='userIdCard'){
          this.searchInput.userIdCard=this.input;
        }
        searchUserData(this.searchInput).then((response)=>{
          this.userData=response;
          console.log(this.userData)
        }).catch(error=>{
            console.log(error);
          })
      },
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