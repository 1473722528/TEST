<template>
  <div class="tablemsg">
    <el-table
      :data="tableData"
      style="width: 100%;height:100%"
      border
      lazy
      :load="load"
      >

      <el-table-column type="expand" v-if="this.showchildMsg==true">             <!--子属性展开-->
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand" v-for="item3 in props.row.children.length" :key="item3.index">
            <el-form-item :label="item2.label" v-for="item2 in childTableKey" :key="item2.index">
              <span>{{ props.row.children[item3-1][item2.data] }}</span>
            </el-form-item><el-divider></el-divider>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column v-for="item in tableKey" :key="item.index"
        align="center"
       
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
      <el-table-column label="操作" width="60px" align="center">
        <template slot-scope="scope">
          <el-button       
            class="tb"
            v-if="editShow==true"
            type="text"
            @click="editDialogOpen(scope.row)">编辑</el-button>
            <el-button
              v-if="deleteShow==true"
              class="tb"
              type="text"
              @click="deleteData(scope.row)">删除</el-button>
            <DialogForm :openDialogVisible="openEditDialog" :ruleForm="ruleForm" :editfun="postEditForm"  :closefun="editDialogClose"  
             :formKeyNum="formKeyNum" :formTitle="formTitle" :formKey="formKey" :rules='rules'/> 
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { editUserData,deleteUserData,editHotelData,deleteHotelData} from '@/api/authority.js'
  export default {
    props:{
      formTitle:String,           //表单标题
      formKey:Array,              //表单关键字
      formKeyNum:Number,          //表单关键字个数
      childTableKey:Array,        //子表单关键字
      showchildMsg:Boolean,            //是否显示子信息标志
      deleteShow:Boolean,         //是否显示删除按钮
      editShow:Boolean,           //是否显示编辑按钮
      tableData: Array,           //表格数据
      tableKey: Array,               //表格关键字
      dataKey:String,               //表明是什么表的数据
      rules:Object,
      getData:{
        type:Function
      }
    },
    data(){
      return{
        openEditDialog:false,
        
        ruleForm:{
          userId:'',
          userName:''
        }
      }
    },
    methods: {
      editDialogOpen(row){                      //打开编辑按钮
        this.openEditDialog=true;
        this.ruleForm=row;
        console.log(this.ruleForm);
        console.log(this.openEditDialog);
      },
      editDialogClose(){                        //关闭编辑按钮
        this.openEditDialog=false;
        console.log(this.openEditDialog);
      }, 
      postEditForm(){
        if(this.dataKey=='user'){
          editUserData(this.ruleForm).then(Response=>{
            this.$message.success(Response.msg)
          }).catch(error=>{
            console.log(error);
          })
        }else if(this.dataKey=='hotel'){
        //  delete this.ruleForm.children; 删除子属性
          console.log(this.ruleForm);
          editHotelData(this.ruleForm).then(Response=>{
            this.$message.success(Response.msg)
          }).catch(error=>{
            console.log(error);
          })
        }
        
      },
      deleteData(row){         
        console.log(row);               //确认删除数据提示
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定删除',
          cancelButtonText: '取消删除',
          center: true,
          type: 'error'
        }).then(() => {
          if(this.dataKey=='user'){
            deleteUserData(row).then(()=>{
              this.getData();
              console.log(row);
            }).catch(error=>{
              console.log(error);
            })
          }else if(this.dataKey=='hotel'){
            deleteHotelData(row).then(()=>{
              this.getData();
              console.log(this.dataKey);
            }).catch(error=>{
              console.log(error);
            })
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除！'
          });          
        });
        
      },
      load(tree, treeNode, resolve) {                 //加载树节点
        setTimeout(() => {
          resolve(tree.child)
        }, 100)
      }
    }
  }
</script>


<style>
.tb{
  padding: 0px;
}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 25%;
  }
</style>