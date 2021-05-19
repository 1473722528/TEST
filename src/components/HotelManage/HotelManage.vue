<template>
    <div>
      <el-row type="flex" class="roommanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>酒店管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip effect="dark" content="点击打开增加酒店表单" placement="left">
                  <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip effect="dark" content="点击打开或关闭编辑酒店按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>
                <el-tooltip effect="dark" content="点击打开或关闭删除酒店按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle3' :linkIcon='linkIcon3'/>
                </el-tooltip>  
                <!-- <el-tooltip  effect="dark" content="点击打开或关闭酒店房间管理按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle4' :linkIcon='linkIcon4'/>
                </el-tooltip>  -->
              </el-aside>
              <el-container>
                <el-header style="height:40px">
                    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
                      <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="酒店ID" value="1"></el-option>
                      <el-option label="酒店名" value="2"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main> 
                  <TableMsg :tableData='hotelData' :tableKey='hotelKey' :editShow="editShow" :deleteShow="deleteShow" :formKeyNum="formKeyNum2"
                   :showchildMsg="showchildMsg" :childTableKey="childhotelKey" :formTitle="formTitle2" :formKey="formKey2" :dataKey="dataKey"
                   :getData='getAllHotelData' :rules='rules'/>
                </el-main>
                <el-footer style="height:33px">
                  <!-- <Pagination v-model="hotelData" /> -->
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogForm :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules" :closefun="addDialogClose" 
      :formKeyNum="formKeyNum"  :formTitle="formTitle1" :formKey="formKey1" :addfun="addHotel" :dataKey="dataKey"/> 
    </div>
</template>

<script>
import {getAllHotelData,getRoomData,addHotel} from '@/api/authority.js'
  export default {
    data() {
      return {
        activeIndex: '1',

        input:'',
        select:'',

        openAddDialog:false,
        
        dataKey:'hotel',
        editShow:false,
        deleteShow:false,

        linkTitle1:'新增酒店',
        linkIcon1:'el-icon-plus',
        linkTitle2:'编辑酒店',
        linkIcon2:'el-icon-edit',
        linkTitle3:'删除酒店',
        linkIcon3:'el-icon-delete',
         //linkTitle4:'房间管理',
         //linkIcon4:'el-icon-setting',

        formTitle1:'添加酒店',
        formKey1:[{
          label:'酒店名',
          data:'hotelName'
        },{
          label:'酒店地区',
          data:'hotelArea'
        },{
          label:'酒店地址',
          data:'hotelAddress'
        },{
          label:'酒店详情',
          data:'hotelInfo'
        }],

        formTitle2:'编辑酒店',
        formKey2:[{
          label:'酒店名',
          data:'hotelName'
        },{
          label:'酒店地区',
          data:'hotelArea'
        },{
          label:'酒店地址',
          data:'hotelAddress'
        },{
          label:'酒店详情',
          data:'hotelInfo'
        }],
        formKeyNum2:4,
        formKeyNum:4,
        formSign:'add',
        showchildMsg:true,

        ruleForm:{
          userId:'',
          userName:'',
        },
        rules: {
          hotelName: [
            { required: true, message: '请输入酒店名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
          ],
          hotelArea: [
            { required: true, message: '请输入酒店地区', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          hotelAddress: [
            { required: true, message: '请输入酒店地址', trigger: 'blur' },
            { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }
          ],
          hotelInfo: [
            { required: true, message: '请输入酒店详情', trigger: 'blur' },
            { min: 10, max: 255, message: '长度在 10 到 255 个字符', trigger: 'blur' }
          ],
        },

        hotelKey:[{
          prop:'hotelId',
          label:'酒店ID',
          width:150
        },{
          prop:'hotelName',
          label:'酒店名',
          width:220
        },{
          prop:'hotelArea',
          label:'酒店地区',
          width:110
        },{
          prop:'hotelAddress',
          label:'酒店地址',
        }],
        childhotelKey:[{
          label:'房间ID',
          data:'roomId'
        },{
          label:'房间名',
          data:'roomName'
        },{
          label:'房间价格',
          data:'roomPrice'
        },{
          label:'房间数量',
          data:'roomNum'
        }],
        
        hotelData: []
      }
    },
    watch:{
      editShow(value){
        if(value==true){
          this.linkTitle2="退出编辑";
        }else{
          this.linkTitle2="编辑酒店";
        }
      },
      deleteShow(value){
        if(value==true){
          this.linkTitle3="退出删除";
        }else{
          this.linkTitle3="删除酒店";
        }
      }
    },
    created(){
      this.getAllHotelData();
    },
    methods: {
      addDialogOpen(){
        this.openAddDialog=true;
        console.log("open");
      },
      addDialogClose(){
        this.openAddDialog=false;
      },
      getAllHotelData(){
        getAllHotelData().then(Response=>{
          this.hotelData=Response;
          console.log(this.hotelData.length);
          for(let i=0;i<this.hotelData.length;i++){
            console.log(this.hotelData[i]);
            getRoomData(this.hotelData[i]).then(Response=>{
              this.hotelData[i].children=Response;
              console.log(this.hotelData[i].children);
            })
          }      
        })
      },
      addHotel(){
        addHotel(this.ruleForm).then(Response=>{
          console.log(Response);
          this.getAllHotelData();
        }).catch(error=>{
          console.log(error);
        })
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
 .roommanage{
   margin-top: 10px;
   
 }
 .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>