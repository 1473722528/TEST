<template slot-scope="scope">
    <el-dialog
        title="提 交 订 单"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        width="30%"
        center>

        <el-form label-position="right" label-width="80px"  :model="ruleForm" :rules="rules" status-icon ref="ruleForm">
          <el-form-item label="订单号">
            <el-input v-model="ruleForm.orderId" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="酒店ID">
            <el-input v-model="ruleForm.hotelId" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="酒店名">
            <el-input v-model="ruleForm.hotelName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="房间ID">
            <el-input v-model="ruleForm.roomId" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="房间名">
            <el-input v-model="ruleForm.roomName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户ID" prop="userId" >
            <el-input v-model="ruleForm.userId" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="userIdCard">
            <el-input v-model="ruleForm.userIdCard" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="ruleForm.userPhone" ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="userEmail">
            <el-input v-model="ruleForm.userEmail" ></el-input>
          </el-form-item>
          <el-form-item label="房间数量">
            <el-input v-model="ruleForm.roomNum" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="预定时间">
            <el-input v-model="ruleForm.roomDate" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="订单金额">
            <el-input v-model="ruleForm.orderPrice" :disabled="true"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer" >
        <el-button @click="cancelDo('ruleForm')">取消预定</el-button>
        <el-button type="primary" @click="successDo('ruleForm')">确定预定</el-button>
        </span>

</el-dialog>
</template>

<script>
  export default {
    props:{
      ruleForm:Object,
      openDialogVisible:Boolean,
      fun:{
        type:Function
      },

    },
    data(){
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请正确填写邮箱'));
        } else {
          if (value !== '') { 
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
        return{
            formKeyNum:'',
            orderForm:{
              
            },
            rules:{
                userId: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 8, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userName: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                roomUser: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                roomUserIdCard: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userEmail:[{ validator: validateEmail, trigger: 'blur' }],
            }
      }
    },
    methods:{
      successDo(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.fun();
              this.$notify({
              title: '提交成功',
              message: '已成功提交订单',
              type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancelDo(formName){
        this.fun();
        this.$refs[formName].resetFields()
        this.$notify({
          title: '取消提交',
          message: '已取消提交订单',
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