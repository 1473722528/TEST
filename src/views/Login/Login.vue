<template>
    <div class="login-container">
        <div class="background">
            <img :src="loginImg" width="100%" height="100%" alt="login" />
        </div>
        <div class="login-page">
            <el-form :model="loginForm" :rules="rules"
                 status-icon
                 ref="loginForm" 
                 label-position="left" 
                 label-width="0px" 
                 class="demo-loginForm ">
                    <h3 class="title">酒店预订系统登录</h3>
                    <el-form-item prop="userId">
                        <el-input type="text" 
                            v-model="loginForm.userId" 
                            auto-complete="off" 
                            placeholder="用户ID"
                        ></el-input>
                    </el-form-item>
                        <el-form-item prop="userPassword">
                            <el-input type="password" 
                                v-model="loginForm.userPassword" 
                                auto-complete="off" 
                                placeholder="密码"
                            ></el-input>
                        </el-form-item>
                    <el-checkbox 
                        v-model="checked"
                        class="rememberme"
                    >记住密码</el-checkbox>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
                    </el-form-item>
                </el-form>
        </div>
        
    </div>
</template>

<script>
import {login} from '@/api/authority.js' 
export default {
    data(){
        return {
            loginImg:require('../../assets/img/login.jpg'),
            logining: false,
            myData:{},
            loginForm: {
                userId: 2017001,
                userPassword: '123456',
            },
            rules: {
                userId: [{required: true, message: '请输入您的用户ID', trigger: 'blur'}],
                userPassword: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        login(){
            login(this.loginForm).then(Response=>{
                this.myData=Response;     
            })
        },
        handleSubmit(){
            this.$refs.loginForm.validate((valid) => {
                if(valid){
                    this.logining = true;
                    login(this.loginForm).then(Response=>{
                        this.myData=Response;
                        sessionStorage.setItem("MyData",JSON.stringify(this.myData)); 
                        console.log(this.myData);
                    })
                    if(this.loginForm.userId === 2017001 && 
                       this.loginForm.userPassword === '123456'){
                           this.logining = false;
                           //sessionStorage.setItem('user', this.ruleForm2.username);
                           this.$router.push({path: '/'});
                    }else{
                        this.logining = false;
                        this.$alert('登录出错！', 'info', {
                            confirmButtonText: 'ok'
                        })
                    }
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