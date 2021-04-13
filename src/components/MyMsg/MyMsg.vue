<template>
    <div>
        <el-row  class="mymsg" type="flex"  justify="center" >
            <el-col :span="10">
                <div class="id">
                    <el-table
                      :data="tableData"
                      style="width: 100%"        
                      border
                      height="250"
                      lazy
                      >
                      <el-table-column v-for="(item,index) in tableKey" :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                      </el-table-column>
                      <el-table-column v-for="item in tableKey2" :key="item.index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                      </el-table-column>
                      
                    </el-table><button @click="test()">test</button>
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
                userPhone: 133233433
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
.ab{
    background: cornflowerblue;
    border-radius: 4px;
    margin-bottom: 0px;
}
.mymsg{
    margin-top: 100px;
    border-radius: 4px;

}
</style>