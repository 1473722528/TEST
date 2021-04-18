<template>
  <div class="tablemsg">
    <el-table
      :data="tableData"
      style="width: 100%;height:100%"
      row-key="id"
      
      border
      lazy
      :load="load"
      :tree-props="{children: 'children' ,hasChildren: 'hasChildren'}">
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
              @click.native.prevent="deleteData(scope.$index, tableData)">删除</el-button>
            <DialogFrom :openDialogVisible="openEditDialog" :ruleForm="ruleForm"  :fun="editDialogClose" :formKeyNum="formKeyNum" :formTitle="formTitle1" :formKey="formKey1"/> 
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
  export default {
    props:{
      deleteShow:Boolean,
      editShow:Boolean,
      tableData: Array,
      tableKey: Array
    },
    methods: {
      editDialogOpen(row){
        this.openEditDialog=true;
        this.ruleForm=row;
        console.log(this.ruleForm);
        console.log(this.openEditDialog);
      },
      editDialogClose(){
        this.openEditDialog=false;
        console.log(this.openEditDialog);
      },
      deleteData(index,row){
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定删除',
          cancelButtonText: '取消删除',
          center: true,
          type: 'error'
        }).then(() => {
          row.splice(index,1);
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
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve(tree.child)
        }, 100)
      }
    },
    data(){
      return{
        openEditDialog:false,

        formTitle1:'添加用户',
        formKey1:[{
          label:'用户ID',
          data:'userId'
        },{
          label:'用户名',
          data:'userName'
        }],
        formKeyNum:2,

        ruleForm:{
          userId:'',
          userName:''
        }
      }
    }
  }
</script>


<style>
.tb{
  padding: 0px;
}
</style>