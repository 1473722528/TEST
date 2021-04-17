<template slot-scope="scope">
    <el-dialog
        :title="formTitle"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        width="30%"
        center>

        <el-form :model="ruleForm" :rules="rules"  ref="ruleForm"  label-position="top" v-for="item in formKey" :key="item.index">
          <el-form-item :label="item.label" :prop="item.data" >
            <el-input v-model="ruleForm[item.data]"  autocomplete="off" ></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer" >
        <el-button @click="fun2">取 消</el-button>
        <el-button type="primary" @click="successAddDialog('ruleForm')">确 定</el-button>
        </span>

</el-dialog>
</template>

<script>
  export default {
    props:{
      ruleForm:Object,
      rules:Object,
      formTitle:String,
      formKey:Array,
      openDialogVisible:Boolean,
      fun1:{
        type:Function
      },
      fun2:{
        type:Function
      }
    },
    data(){
        return{
          
        }
    },
    methods:{
      successAddDialog(formName){
        console.log(formName);
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            this.openAddDialog=false;
            this.$notify({
              title: '提交成功',
              message: '已成功提交信息',
              type: 'success'
            });
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>
<style>
.el-button{
  font-size: 14px;
}
</style>