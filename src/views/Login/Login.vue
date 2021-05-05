<template>
    <div class="login-container">
        <div class="background">
            <img :src="loginImg" width="100%" height="100%" alt="login" />
        </div>
        <div class="login-page">
            <el-form :model="ruleForm" :rules="rules"
                 status-icon
                 ref="ruleForm" 
                 label-position="left" 
                 label-width="0px" 
                 class="demo-ruleForm ">
                    <h3 class="title">酒店预订系统登录</h3>
                    <el-form-item prop="userId">
                        <el-input type="text" 
                            v-model="ruleForm.userId" 
                            auto-complete="off" 
                            placeholder="用户ID"
                        ></el-input>
                    </el-form-item>
                        <el-form-item prop="userPassword">
                            <el-input type="password" 
                                v-model="ruleForm.userPassword" 
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
export default {
    data(){
        return {
            loginImg:require('../../assets/img/login.jpg'),
            logining: false,
            ruleForm: {
                userId: '2017001',
                userPassword: '123456',
            },
            rules: {
                username: [{required: true, message: '请输入您的用户ID', trigger: 'blur'}],
                password: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(){
            this.$refs.ruleForm.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.ruleForm.username === 'admin' && 
                       this.ruleForm.password === '123456'){
                           this.logining = false;
                           sessionStorage.setItem('user', this.ruleForm2.username);
                           this.$router.push({path: '/'});
                    }else{
                        this.logining = false;
                        this.$alert('username or password wrong!', 'info', {
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