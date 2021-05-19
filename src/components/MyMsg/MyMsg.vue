<template>
    <div>
        <el-row  class="mymsg" type="flex"  justify="center" >
            <el-col :span="14">
                <div class="showmsg">
                    <el-container>
                        <el-header style="line-height:10px">
                            <h1>个人信息</h1>
                        </el-header>
                        <el-main>
                            <el-row class="msg-card" type="flex"  justify="space-around" >
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                                <el-col :span="8">
                                  <div>
                                      <span>用户ID : </span><span>{{myData.userId}}</span>
                                      <el-divider></el-divider>
                                      <span>用户邮箱 : </span><span>{{myData.userEmail}}</span>
                                  </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                                <el-col :span="8">
                                    <div>
                                        <span>用户名 : </span><span>{{myData.userName}}</span>
                                        <el-divider></el-divider>
                                        <span>用户手机号 : </span><span>{{myData.userPhone}}</span>
                                    </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                                <el-col :span="8">
                                  <div>
                                      <span>年 龄 : </span><span>{{myData.userAge}}</span>
                                      <el-divider></el-divider>
                                      <span>身份证号 : </span><span>{{myData.userIdCard}}</span>
                                  </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                            </el-row> 
                        </el-main>
                        <el-footer>
                            <el-row type="flex" justify="center">
                              <el-col :span="6"><div><Link :fun="editPwDialogOpen" :linkTitle='linkTitle1' :linkIcon='linkIcon1'/></div></el-col>
                              <el-col :span="6"><div><Link :fun="editMsgDialogOpen" :linkTitle='linkTitle2' :linkIcon='linkIcon2'/></div></el-col>
                            </el-row>  
                        </el-footer>
                    </el-container>
                </div>           
            </el-col>
        </el-row>
        <DialogForm :openDialogVisible="openEditPwDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules" :closefun="editPwDialogClose" 
      :formKeyNum="formKeyNum1"  :formTitle="formTitle1" :formKey="formKey1" /> 
        <DialogForm :openDialogVisible="openEditMsgDialog" :ruleForm="myData" :formSign="formSign" :rules="rules2" :closefun="editMsgDialogClose" 
      :formKeyNum="formKeyNum2"  :formTitle="formTitle2" :formKey="formKey2" :editfun='editUserData'/> 
    </div>
</template>

<script>
import {validatePhone,validateIdCard,validateEmail,checkUserAge} from '../../validator/validator.js'
import {editUserData} from '@/api/authority.js'
export default {
    data(){
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.newPassword2!== '') {
            this.$refs.ruleForm.validateField('newPassword2');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
            formTitle1:'修改密码',
            formKey1:[{
                label:'旧密码',
                data:'oldPassword'
            },{
                label:'新密码',
                data:'newPassword1'
            },{
                label:'再次输入新密码',
                data: 'newPassword2'
            }],
            formSign:'edit',

            ruleForm:{
                oldPassword:'',
                newPassword1:'',
                newPassword2:'',
            },
            formKeyNum1:3,

            rules:{
                oldPassword: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                newPassword1: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                   { validator: validatePass, trigger: 'blur' } 
                ],
                newPassword2: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' } 
                ],
            },

            formTitle2:'修改资料',
            formKey2:[{
                label:'用户名',
                data:'userName'
            },{
                label:'年 龄',
                data:'userAge'
            },{
                label:'用户手机号',
                data:'userPhone'
            },{
                label:'用户邮箱',
                data: 'userEmail'
            },{
                label:'身份证号码',
                data:'userIdCard'
            }],
            formKeyNum2:5,
            rules2:{
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max:6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                ],
                userAge: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { validator: checkUserAge, trigger: 'blur' }
                ],
                userIdCard: [
                    { required: true, message: '请输入身份证号码', trigger: 'blur' },
                    { validator: validateIdCard, trigger: 'blur' } 
                ],
                userPhone: [
                  { required: true, message: '请输入手机号码', trigger: 'blur' },
                     { validator: validatePhone, trigger: 'blur' }
                ],
               userEmail: [
                  { required: true, message: '请输入邮箱', trigger: 'blur' },
                     { validator: validateEmail, trigger: 'blur' }
                ],
            },

            linkTitle1:'修改密码',
            linkIcon1:'el-icon-edit',
            linkTitle2:'修改资料',
            linkIcon2:'el-icon-edit',
            myData:{
                userId:null,
                userName: null,
                userAge:null,
                userPhone:null,
                userEmail:null,
                userIdCard:null
            },
            openEditPwDialog:false,
            openEditMsgDialog:false,
        }
    },
    created(){
        this.getMyData()
    },
    methods:{
        editUserData(){
            editUserData(this.myData).then(Response=>{
                sessionStorage.setItem("MyData",JSON.stringify(this.myData));
                console.log(Response);
            })
        },
        getMyData(){
            this.myData=JSON.parse(sessionStorage.getItem("MyData"));
        },
        editPwDialogOpen(){
            this.openEditPwDialog=true;console.log(this.openEditPwDialog);
        },
        editPwDialogClose(){
             this.openEditPwDialog=false;console.log(this.openEditPwDialog);
        },
        editMsgDialogOpen(){
            this.openEditMsgDialog=true;console.log(this.openEditMsgDialog);
        },
        editMsgDialogClose(){
             this.openEditMsgDialog=false;console.log(this.openEditMsgDialog);
        },
    }
}
</script>

<style>
.mymsg{
    margin-top: 50px;
    border-radius: 4px;
}
.showmsg{
    display: flex;
    flex-wrap: wrap;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-right: 50px;
}
.msg-card {
    margin: 50px;
}
.divider-h{
    height: 110px;
}
</style>