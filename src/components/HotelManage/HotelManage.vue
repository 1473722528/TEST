<template>
    <div>
      <el-row type="flex" class="roommanage" justify="center">
        <el-col :span="13">
          <div>
            <h2>酒店管理</h2>
            <el-container>
              <el-aside style="height:100%;width:100px">
                <el-tooltip class="item" effect="dark" content="点击打开增加酒店表单" placement="left">
                  <Link :fun="addDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击打开或关闭编辑酒店按钮" placement="left">
                  <Link :fun="editOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击打开或关闭删除酒店按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle3' :linkIcon='linkIcon3'/>
                </el-tooltip>  
                <el-tooltip class="item" effect="dark" content="点击打开或关闭酒店房间管理按钮" placement="left">
                  <Link :fun="deleteOpen" :linkTitle='linkTitle4' :linkIcon='linkIcon4'/>
                </el-tooltip> 
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
                  <TableMsg :tableData='hotelData' :tableKey='hotelKey' :editShow="editShow" :deleteShow="deleteShow" :showMsg="showMsg" :childTableKey="childhotelKey"/>
                </el-main>
                <el-footer style="height:33px">
                  <Pagination v-model="hotelData" />
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
        activeIndex: '1',

        input:'3333333',
        select:'',

        openAddDialog:false,
        

        editShow:false,
        deleteShow:false,

        linkTitle1:'新增酒店',
        linkIcon1:'el-icon-plus',
        linkTitle2:'编辑酒店',
        linkIcon2:'el-icon-edit',
        linkTitle3:'删除酒店',
        linkIcon3:'el-icon-delete',
        linkTitle4:'房间管理',
        linkIcon4:'el-icon-setting',

        formTitle:'添加酒店',
        formKey:[{
          label:'酒店ID',
          data:'hotelId'
        },{
          label:'酒店名',
          data:'hotelName'
        },{
          label:'酒店地区',
          data:'hotelArea'
        },{
          label:'酒店地址',
          data:'hotelAddress'
        }],
        formKeyNum:5,
        formSign:'add',
        showMsg:true,

        ruleForm:{
          userId:'',
          userName:'',
        },
        rules: {
          userId: [
            { required: true, message: '请输入酒店ID', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入酒店名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
          width:150
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
        hotelData: [{
          hotelId: 2017001,
          hotelName: '龙珠',
          hotelArea:'北京',
          hotelAddress:'北京朝阳区十三号',
          roomId:2000000,
          roomName:'普通房',
          roomPrice:200,
          roomNum:10
        }, {
          hotelId: 2017011,
          hotelName: '狗珠',
          hotelArea:'南京',
          hotelAddress:'南京朝阳区十三号',
          roomId:2000111,
          roomName:'普通房',
          roomPrice:222,
          roomNum:30
        }, {
          hotelId: 2017111,
          hotelName: '猪珠',
          hotelArea:'广州',
          hotelAddress:'广州朝阳区十三号',
        }, {
          hotelId: 2017021,
          hotelName: '牛珠',
          hotelArea:'上海',
          hotelAddress:'上海朝阳区十三号',
        }]

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
 .roommanage{
   margin-top: 10px;
   
 }
 .el-input{
   margin: 0px;
   padding: 0px;
 }
</style>