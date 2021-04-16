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
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
      <el-table-column label="操作" width="85px" >
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
            <DialogFrom :openDialogVisible="openEditDialog" :ruleForm="ruleForm"  :fun="editDialogClose" :formTitle="formTitle1" :formKey="formKey1"/> 
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
        row.splice(index,1);
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

        ruleForm:{
          userId:'',
          userName:''
        },

      }
    }
  }
</script>


<style>
.tb{
  padding: 0px;
}
</style>