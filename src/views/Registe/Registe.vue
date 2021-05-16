<template>
    <div class="login-container">
        <div class="background">
            <img :src="loginImg" width="100%" height="100%" alt="login" />
        </div>
        <div class="login-page">
            <el-form :model="loginForm" :rules="rules"
                 
                 ref="loginForm" 
                 label-position="left" 
                 label-width="0px" 
                 class="demo-loginForm ">
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
                        <el-button type="primary" style="width:100%;" @click="loginSubmit" :loading="logining">注册</el-button>
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
            registeForm: {
                userId:null,
                userPassword: '',
                userPassword2: '',
            },
            rules: {
                userId: [{required: true, message: '请输入您的用户ID', trigger: 'blur'}],
                userPassword: [{required: true, message: '请输入您的密码', trigger: 'blur'}],
                userPassword2: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        login(){
            login(this.registeForm).then(Response=>{
                this.myData=Response;     
            })
        },
        loginSubmit(){
            this.$refs.registeForm.validate((valid) => {
                if(valid){
                    this.logining = true;
                    login(this.registeForm).then(Response=>{
                        console.log(Response);
                        if(Response!=''){
                            this.myData=Response;
                            sessionStorage.setItem("MyData",JSON.stringify(this.myData));   //存进sessionStrong
                            
                            this.$store.commit('updateUser',this.myData);       //刷新Vuex状态
                            console.log(this.$store.state.userRole);
                            this.logining = false;
                            this.$router.push({path:'/'});
                            //window.location.reload();           //刷新页面
                        }else if(Response==''){
                            this.logining = false;
                            this.$alert('登录出错！', 'info', {
                                confirmButtonText: 'ok'
                        })
                        }
                    }).catch(error=>{
                        this.logining = false;
                        this.$alert('登录出错！', 'info', {
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