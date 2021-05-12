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
        <DialogForm :openDialogVisible="openEditPwDialog" :ruleForm="ruleForm" :formSign="formSign" :rules="rules1" :closefun="editPwDialogClose" 
      :formKeyNum="formKeyNum1"  :formTitle="formTitle1" :formKey="formKey1" /> 
        <DialogForm :openDialogVisible="openEditMsgDialog" :ruleForm="myData" :formSign="formSign" :rules="rules2" :closefun="editMsgDialogClose" 
      :formKeyNum="formKeyNum2"  :formTitle="formTitle2" :formKey="formKey2" /> 
    </div>
</template>

<script>
export default {
    data(){
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

            rules1:{
                oldPassword: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                newPassword1: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                newPassword2: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
            }
            ,{
                label:'用户邮箱',
                data: 'userEmail'
            },{
                label:'身份证号码',
                data:'userIdCard'
            }],
            formKeyNum2:4,
            rules2:{
                userName: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userAge: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userPhone: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userEmail: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                userIdCard: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            },

            linkTitle1:'修改密码',
            linkIcon1:'el-icon-edit',
            linkTitle2:'修改资料',
            linkIcon2:'el-icon-edit',
            myData:{
                userId: this.$store.state.userId,
                userName: this.$store.state.userName,
                userAge: this.$store.state.userAge,
                userPhone: this.$store.state.userPhone,
                userEmail:this.$store.state.userEmail,
                userIdCard:this.$store.state.userIdCard
            },
            openEditPwDialog:false,
            openEditMsgDialog:false,
        }
    },
    methods:{
        test(){
            this.$axios({
              method: 'get',
              url: "/api/mymsg"
            }).then((response)=> {
                const {data}=response.data;
                this.tableData=data;
                console.log(response.data);   
            })
            .catch(function(error) {
                console.log(error);
              });
            console.log(this.tableData);  
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