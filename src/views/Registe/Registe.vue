<template>
    <div class="login-container">
        <div class="background">
            <img :src="loginImg" width="100%" height="100%" alt="login" />
        </div>
        <div class="login-page">
            <el-form :model="registeForm" :rules="rules"
                 
                 ref="registeForm" 
                 label-position="left" 
                 label-width="0px" 
                 class="demo-registeForm ">
                    <h3 class="title">酒店预订系统注册</h3>
                    <el-form-item prop="userId">
                        <el-input type="text" 
                            v-model="registeForm.userId" 
                            auto-complete="off" 
                            placeholder="用户ID"
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="userPassword">
                        <el-input type="password" 
                            v-model="registeForm.userPassword" 
                            auto-complete="off" 
                            placeholder="密码"
                            >
                            </el-input>
                    </el-form-item>
                    <el-form-item prop="userPassword2">
                        <el-input type="password" 
                            v-model="registeForm.userPassword2" 
                            auto-complete="off" 
                            placeholder="确认密码"
                            >
                            </el-input>
                    </el-form-item>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click="registerSubmit" :loading="logining">注册</el-button>
                    </el-form-item>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click="registerSubmit" :loading="logining">转到登录</el-button>
                    </el-form-item>
                </el-form>
        </div>
        
    </div>
</template>

<script>
import {register} from '@/api/authority.js' 
 
export default {
    data(){
        return {
            loginImg:require('../../assets/img/login.jpg'),
            logining: false,
            myData:{},
            registeForm: {
                userId:null,
                userPassword: '',
                userPassword2: '',
            },
            register:{
                userId:null,
                userPassword: '',
            },
            rules: {
                userId: [{required: true, message: '请输入您的用户ID', trigger: 'blur'}],
                userPassword: [{required: true, message: '请输入您的密码', trigger: 'blur'}],
                userPassword2: [{required: true, message: '请重新输入您的密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {

        registerSubmit(){
            this.$refs.registeForm.validate((valid) => {
                if(valid){
                    this.logining = true;
                    this.register.userId=parseInt(this.registeForm.userId);
                    this.register.userPassword=this.registeForm.userPassword;
                    register(this.register).then(Response=>{
                        console.log(Response);
                        if(Response==''){
                            this.$router.push({path:'/login'});
                            //window.location.reload();           //刷新页面
                        }else if(Response!==''){
                            this.logining = false;
                            this.$alert('注册出错！', 'info', {
                                confirmButtonText: 'ok'
                        })
                        }
                    }).catch(error=>{
                        this.logining = false;
                        this.$alert('注册出错！', 'info', {
                            confirmButtonText: 'ok'
                        })
                        console.log(error);
                    })
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
};
</script>

<style>
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin:180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    z-index:1;
    position:static;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
.background{
    width: 100%;
    height: 100%;
    position:fixed;
     margin:-180px auto;
    background-size:100% 100%;
    z-index:-1;
}

</style>