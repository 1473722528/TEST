<template>
    <div>
        <el-row  class="mymsg" type="flex"  justify="center" >
            <el-col :span="10">
                <div class="id">
                    <el-container>
                        <el-header>Header</el-header>
                        <el-main>
                            <el-card class="box-card">
                              <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                              </div>
                              <div v-for="o in 4" :key="o" class="text item">
                                {{'列表内容 ' + o }}
                              </div>
                            </el-card>

                        </el-main>
                        <el-footer>Footer</el-footer>
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
            tableData:[{
                userId: 1226,
                userName: '张三',
                userAge: 18,
                userPhone: 133233433,
                userEmail:'1432422728@qq.com',
                userIdCard:441226199909090009
            }],
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
.id{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.mymsg{
    margin-top: 50px;
    border-radius: 4px;

}
</style>