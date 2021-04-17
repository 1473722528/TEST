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
                                      <span>用户ID : </span><span>{{tableData.userId}}</span>
                                      <el-divider></el-divider>
                                      <span>用户邮箱 : </span><span>{{tableData.userEmail}}</span>
                                  </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                                <el-col :span="8">
                                    <div>
                                        <span>用户名 : </span><span>{{tableData.userName}}</span>
                                        <el-divider></el-divider>
                                        <span>年 龄 : </span><span>{{tableData.userAge}}</span>
                                    </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                                <el-col :span="8">
                                  <div>
                                      <span>用户手机号 : </span><span>{{tableData.userPhone}}</span>
                                      <el-divider></el-divider>
                                      <span>身份证号 : </span><span>{{tableData.userIdCard}}</span>
                                  </div>
                                </el-col>
                                <el-divider class="divider-h" direction="vertical"></el-divider>
                            </el-row> 
                        </el-main>
                        <el-footer>
                            <el-button>修改密码</el-button>
                            <el-button>修改资料</el-button>
                        </el-footer>
                    </el-container>
                </div>           
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userData:[],
            tableData:{
                userId: 1226,
                userName: '张三',
                userAge: 18,
                userPhone: 133233433,
                userEmail:'1432422728@qq.com',
                userIdCard:441226199909090009
            },
            tableKey:[{
                prop: 'userId',
                label: '用户ID',
            },{
                prop: 'userName',
                label: '用户名',
            }],
            tableKey2:[{
                prop: 'userAge',
                label: '年龄'
            },{
                prop: 'userPhone',
                label: '手机号码'
            },{
                prop:'userIdCard',
                label:'身份证号',
                width:200
            }]
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
        }
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