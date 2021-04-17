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
        <el-button @click="cancelDo('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="successDo('ruleForm')">确 定</el-button>
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
      fun:{
        type:Function
      },

    },
    data(){
      return{
        ruleNum:[1,3]
      }
    },
    methods:{
      successDo(formName){
        var x=0,y=0;
        for (let key in this.ruleForm) {
          y=y+1;
          console.log(y);
          console.log(key, this.ruleForm[key]);
        }
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
        for (let key in this.ruleForm) {
  
          console.log(key, this.ruleForm[key]);
        }
        if(x==y){
          this.fun();
          for(let i=0;i<y;i++){
          this.$refs[formName][i].resetFields()
          }
          this.$notify({
          title: '提交成功',
          message: '已成功提交信息',
          type: 'success'
        });
        }
        
      },
      cancelDo(formName){
        var y=0;
        for (let key in this.ruleForm) {
          y=y+1;
          console.log(y);
          console.log(key, this.ruleForm[key]);
            
        }
        this.fun();
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