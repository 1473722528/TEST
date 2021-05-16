<template>
    <div>
      <el-row type="flex" class="roommanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>房间管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip effect="dark" content="点击打开增加房间表单" placement="left">
                  <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip effect="dark" content="点击打开或关闭编辑房间按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>
                <el-tooltip effect="dark" content="点击打开或关闭删除房间按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle3' :linkIcon='linkIcon3'/>
                </el-tooltip>  
              </el-aside>
              <el-container>
                <el-header style="height:40px">
                    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
                      <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="酒店ID" value="hotelId"></el-option>
                        <el-option label="房间ID" value="roomId"></el-option>
                        <el-option label="房间名" value="roomName"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main> 
                  <TableMsg :tableData='roomData' :tableKey='roomKey' :editShow="editShow" :deleteShow="deleteShow" :formKeyNum="formKeyNum2"
                    :formTitle="formTitle2" :formKey="formKey2" :dataKey="dataKey"
                   :getData='getAllRoomData' :rules='rules'/>
                </el-main>
                <el-footer style="height:33px">
                  <!-- <Pagination v-model="roomData" /> -->
                </el-footer>
              </el-container>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <DialogForm :openDialogVisible="openAddDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules" :closefun="addDialogClose" 
      :formKeyNum="formKeyNum"  :formTitle="formTitle1" :formKey="formKey1" :addfun="addRoom"/> 
    </div>
</template>

<script>
import {getAllRoomData,addRoom} from '@/api/authority.js'
  export default {
    data() {
      return {
        activeIndex: '1',

        input:'',
        select:'',

        openAddDialog:false,
        
        dataKey:'room',
        editShow:false,
        deleteShow:false,

        linkTitle1:'新增房间',
        linkIcon1:'el-icon-plus',
        linkTitle2:'编辑房间',
        linkIcon2:'el-icon-edit',
        linkTitle3:'删除房间',
        linkIcon3:'el-icon-delete',

        formTitle1:'添加房间',
        formKey1:[{
          label:'酒店ID',
          data:'hotelId'
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

        formTitle2:'编辑房间',
        formKey2:[{
          label:'房间名',
          data:'roomName'
        },{
          label:'房间数量',
          data:'roomNum'
        },{
          label:'房间价格',
          data:'roomPrice'
        }],
        formKeyNum2:4,
        formKeyNum:4,
        formSign:'add',

        ruleForm:{
          userId:'',
          userName:'',
        },
        rules: {
          roomName: [
            { required: true, message: '请输入房间名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          roomNum: [
            { required: true, message: '请输入房间数', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          roomPrice: [
            { required: true, message: '请输入房间价格', trigger: 'blur' },
            { min: 2, max: 9, message: '长度在 2 到 9 个字符', trigger: 'blur' }
          ],
          hotelId: [
            { required: true, message: '请输入酒店ID', trigger: 'blur' },
            { min: 7, max: 8, message: '长度在 10 到 255 个字符', trigger: 'blur' }
          ],
        },

        roomKey:[{
          prop:'hotelId',
          label:'酒店ID',
          width:150
        },{
          prop:'roomId',
          label:'房间ID',
          width:160
        },{
          prop:'roomName',
          label:'房间名',
          width:220
        },{
          prop:'roomPrice',
          label:'房间价格',
        },{
          prop:'roomNum',
          label:'初始房间数',
        }],
        roomData: []
      }
    },
    watch:{
      editShow(value){
        if(value==true){
          this.linkTitle2="退出编辑";
        }else{
          this.linkTitle2="编辑房间";
        }
      },
      deleteShow(value){
        if(value==true){
          this.linkTitle3="退出删除";
        }else{
          this.linkTitle3="删除房间";
        }
      }
    },
    created(){
      this.getAllRoomData();
    },
    methods: {
      addDialogOpen(){
        this.openAddDialog=true;
        console.log("open");
      },
      addDialogClose(){
        this.openAddDialog=false;
      },
      getAllRoomData(){
        getAllRoomData().then(Response=>{
          this.roomData=Response;  
        })
      },
      addRoom(){
        addRoom(this.ruleForm).then(Response=>{
          console.log(Response);
          this.getAllRoomData();
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