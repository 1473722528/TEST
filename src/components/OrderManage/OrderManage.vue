<template>
    <div>
      <el-row type="flex" class="ordermanage" justify="center">
        <el-col :span="20">
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
                      <el-option label="订单ID" value="orderId"></el-option>
                      <el-option label="下单人" value="orderOwner"></el-option>
                      <el-option label="酒店ID" value="orderHotelId"></el-option>
                      <el-option label="酒店名" value="orderHotelName"></el-option>
                      <el-option label="房间ID" value="orderRoomId"></el-option>
                      <el-option label="房间名" value="orderRoomName"></el-option>
                      <el-option label="房间日期" value="orderRoomDate"></el-option>
                      <el-option label="使用者" value="roomUser"></el-option>
                      <el-option label="身份证号" value="roomUserIdCard"></el-option>
                      <el-option label="订单日期" value="orderDate"></el-option>
                      <el-option label="订单状态" value="orderState"></el-option>
                    </el-select>
                    <el-button @click="searchOrderData()" @keyup.enter.native="searchOrderData" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main> 
                  <TableMsg :tableData='orderData' :tableKey='orderKey' :editShow='editShow' :deleteShow='deleteShow' :formTitle='formTitle1' :formKey='formKey1'
                  :formKeyNum='formKeyNum1'  :dataKey='dataKey' :getData='getAllOrderData' :rules='rules'/>
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="orderData" />
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <!-- <DialogForm :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :rules="rules" :closefun="addDialogClose" 
      :formKeyNum="formKeyNum1"  :formTitle="formTitle1" :formKey="formKey1" :addfun="register"/>  -->
    </div>
</template>

<script>
import { getAllOrderData,searchOrderData} from '@/api/authority.js'
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
          data:'orderId',
          disable:true
        },{
          label:'下单人',
          data:'orderOwner',
          disable:true
        },{
          label:'预定日期',
          data:'orderDate',
          disable:true
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
          data:'orderRoomNum',
          disable:true
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
        formKeyNum1:14,

        searchInput:{
          orderId:null,
          orderOwner:null,
          orderHotelId:null,
          orderHotelName:null,
          orderRoomId:null,
          orderRoomName:null,
          roomUser:null,
          roomUserIdCard:null,
          orderRoomDate:null,
          orderDate:null,
          orderState:null
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
          orderHotelId: [
            { required: true, message: '请输入酒店ID', trigger: 'blur' },
            { min: 8, max: 9,  message: '请输入 8 位数的数字ID', trigger: 'blur'}
          ],
          orderHotelName: [
            { required: true, message: '请输入酒店名', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
          orderRoomId: [
            { required: true, message: '请输入房间ID', trigger: 'blur' },
            { min: 3, max: 4, message: '请输入 4 位数的ID', trigger: 'blur' }
          ],
          orderRoomName: [
            { required: true, message: '请输入房间名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          orderRoomDate: [
            { required: true, message: '请输入YYYY-MM-DD格式的房间日期', trigger: 'blur' },
            { min: 10, max: 10, message: '请输入 10 个字符的日期', trigger: 'blur' }
          ],
          orderRoomPrice: [
            { required: true, message: '请输入房间单价', trigger: 'blur' },
            { min: 1, max: 10, message: '请输入两位数以上的金额', trigger: 'blur' }
          ],
          roomUser: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 6, message: '请输入 2 到 6 个字符的姓名', trigger: 'blur' }
          ],
          roomUserIdCard: [
            { required: true, message: '请输入身份证号码', trigger: 'blur' },
            { min: 18, max: 18, message: '请输入 18 位的身份证号码', trigger: 'blur' }
          ],
          orderPrice: [
            { required: true, message: '请输入订单金额', trigger: 'blur' },
            { min: 1, max: 10, message: '请输入两位数以上的金额', trigger: 'blur' }
          ],
          orderState: [
            { required: true, message: '请输入订单状态', trigger: 'blur' },
            { min: 3, max: 3, message: '请输入表示订单状态的 3 个字符', trigger: 'blur' }
          ],
        },

        orderKey:[{
          prop:'orderId',
          label:'订单ID',
          width:80
        },{
          prop:'orderOwner',
          label:'下单人',
          width:90
        },{
          prop:'orderHotelId',
          label:'酒店ID',
          width:95
        },{
          prop:'orderHotelName',
          label:'酒店名',
          width:130
        },{
          prop:'orderRoomId',
          label:'房间ID',
          width:80
        },{
          prop:'orderRoomName',
          label:'房间名',
          width:100
        },{
          prop:'orderRoomDate',
          label:'房间日期',
          width:110
        },{
          prop:'orderRoomNum',
          label:'房间数量',
          width: 80
        },{
          prop:'orderRoomPrice',
          label:'房间单价',
          width:95
        },{
          prop:'roomUser',
          label:'房间使用者',
          width:95
        },{
          prop:'roomUserIdCard',
          label:'身份证号码',
        },{
          prop:'orderPrice',
          label:'订单金额',
          width:95
        },{
          prop:'orderDate',
          label:'订单日期',
          width:110
        },{
          prop:'orderState',
          label:'订单状态',
          width:80
        }],
        orderData: []

      }
    },
    created(){
      var that=this;
      this.getAllOrderData();
      document.onkeydown = function (e) {
        console.log(e);
        let key = window.event.keyCode;
        if (key == 13) {
          that.searchOrderData();
        }
      };
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
      getAllOrderData(){
        getAllOrderData().then(Response => {
          console.log(Response)
          this.orderData = Response;
          console.log(this.orderData)
        })
      },
      searchOrderData(){
        if(this.select=='orderId'){
          this.searchInput.orderId=parseInt(this.input);
          console.log(this.searchInput.orderId);
        }else if(this.select=='orderOwner'){
          this.searchInput.orderOwner=this.input;
        }else if(this.select=='orderHotelId'){
          this.searchInput.orderHotelId=this.input;
        }else if(this.select=='orderHotelName'){
          this.searchInput.orderHotelName=this.input;
        }else if(this.select=='orderRoomId'){
          this.searchInput.orderRoomId=this.input;
        }else if(this.select=='orderRoomName'){
          this.searchInput.orderRoomName=this.input;
        }else if(this.select=='roomUser'){
          this.searchInput.roomUser=this.input;
        }else if(this.select=='roomUserIdCard'){
          this.searchInput.roomUserIdCard=this.input;
        }else if(this.select=='orderRoomDate'){
          this.searchInput.orderRoomDate=this.input;
        }else if(this.select=='orderDate'){
          this.searchInput.orderDate=this.input;
        }else if(this.select=='orderState'){
          this.searchInput.orderState=this.input;
        }
        searchOrderData(this.searchInput).then((Response)=>{
          this.orderData=Response;
          console.log(this.orderData)
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