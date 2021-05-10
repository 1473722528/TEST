<template slot-scope="scope">
    <el-dialog
        :title="formTitle"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        width="30%"
        center>

        <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm"  label-position="top" v-for="item in formKey" :key="item.index">
          <el-form-item :label="item.label" :prop="item.data" >
            <el-input v-model="ruleForm[item.data]"  autocomplete="off" ></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer" >
        <el-button @click="cancelDo('ruleForm')">取消提交</el-button>
        <el-button type="primary" @click="successDo('ruleForm')">确定提交</el-button>
        </span>

</el-dialog>
</template>

<script>
  export default {
    props:{
      formKeyNum:Number,
      ruleForm:Object,
      rules:Object,
      formTitle:String,
      formKey:Array,
      formSign:String,
      openDialogVisible:Boolean,
      editfun:{
        type:Function
      },
      closefun:{
        type:Function
      },
      addfun:{
        type:Function
      }
    },
    data(){
      return{
      }
    },
    methods:{
      successDo(formName){
        var x=0,y=this.formKeyNum;
        for(let i=0;i<y;i++){
          this.$refs[formName][i].validate((valid) => {
          if (valid) {  
            x++;
            console.log(x);
          } else {
            console.log('error submit!!');
            return false;
          }
        }); 
        }
        for (let key in this.ruleForm) {            //输出表单信息
          console.log(key, this.ruleForm[key]);
        }
        if(x==y){ 
          this.closefun();
          if(this.formSign=='add'){
            this.addfun();
            for(let i=0;i<y;i++){
            this.$refs[formName][i].resetFields()
            }
          }else{
            this.editfun();
          }
          this.$notify({
          title: '提交成功',
          message: '已成功提交信息',
          type: 'success'
        });
        }
        
      },
      cancelDo(formName){
        var y=this.formKeyNum;
        this.closefun();
        for(let i=0;i<y;i++){
          this.$refs[formName][i].resetFields()
        }
        this.$notify({
          title: '取消提交',
          message: '已取消提交信息',
          type: 'warning'
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