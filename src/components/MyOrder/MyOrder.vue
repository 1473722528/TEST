<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12">
                <div>
                    <el-container>
                      <el-header>
                          <h1>我的订单</h1>
                      </el-header>
                      <el-main>
                            <el-card class="box-card"  v-for="item in myOrder" :key="item.index" shadow="hover">
                                <div slot="header" class="clearfix">
                                    <span>{{item.orderName}}</span>
                                    <el-button style="float: right; padding: 3px 0" type="text" @click="openOrderMsg(item.userId)">查看详情</el-button>
                                </div>
                                <el-row type="flex" class="ordermsg"  justify="space-around">
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'订单号 : ' + item.orderId }}
                                          </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'用户ID : ' + item.userId }}
                                          </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'用户名 : ' + item.userName }}
                                          </div>
                                    </el-col>
                                </el-row>
                                <el-row type="flex"  justify="space-around">
                                    <el-col :span="6">
                                        <div class="text item">
                                          {{'订单日期 : ' + item.orderDate }}
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'订单金额 : ' + item.orderPrice + ' 元' }}
                                          </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'订单状态 : ' + item.orderState }}
                                          </div>
                                    </el-col>
                                </el-row>
                            </el-card>
                      </el-main>
                    </el-container>
                </div>
            </el-col>
        </el-row>
    <el-dialog title="订单详情" :visible.sync="orderMsgDialogOpen">
      <el-table :data="orderMsg">
        <el-table-column property="userId" label="用户ID" width="150"></el-table-column>
        <el-table-column property="userName" label="用户名" width="200"></el-table-column>
        <el-table-column property="orderId" label="订单号"></el-table-column>
      </el-table>
    </el-dialog>    
    </div>
</template>
<script>
export default {
    props:{

    },
    data(){
        return{
            orderMsgDialogOpen:false,
            orderIndex:Number,
            userData:{
                userName:'里斯',
                orderNum:3,
            },
            
            orderMsg:[{}],
            myOrder:[{
                orderName:'龙珠酒店订单',
                userId:2015001,
                orderState:'预定成功',
                userName:'张三',
                orderId:20210401001,
                orderDate:20210401,
                orderPrice:400,
                orderOwner:'里斯',
                childNum:1,
                children:[{
                    hotelName:'广州龙珠酒店',
                    roomId:2019001,
                    roomName:'普通房',
                    roomNum:2,
                    hotelId:2017001001,
                    roomDate:20210402,
                },],  
            },{
                orderName:'狗珠酒店订单',
                userId:2012021,
                orderState:'已完成',
                userName:'张撒',
                orderId:20210401121,
                orderDate:20210521,
                orderPrice:600,
                orderOwner:'里斯',
                childNum:1,
                children:[{
                    hotelName:'北京狗珠酒店',
                    roomId:2029221,
                    roomName:'高级房',
                    roomNum:2,
                    hotelId:2017001031,
                    roomDate:20210422,
                },],
            },{
                orderName:'猪珠酒店订单',
                userId:2016021,
                orderState:'已完成',
                userName:'张五',
                orderId:20210901621,
                orderDate:20210711,
                orderPrice:800,
                orderOwner:'里斯',
                childNum:1,
                children:[{
                    hotelName:'北京猪珠酒店',
                    roomId:2029221,
                    roomName:'双人房',
                    roomNum:5,
                    hotelId:2017003021,
                    roomDate:20210202,
                },],
            }]
        }
    },
    methods:{
        openOrderMsg(uid){
            for(var i=0;i<this.userData.orderNum;i++){
                if(this.myOrder[i].userId==uid){
                    this.orderMsg[0]=this.myOrder[i];
                }
            }
            console.log(this.orderMsg);
            console.log(uid);
            this.orderMsgDialogOpen=true;    
        }
    }
}
</script>

<style>
  .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:99%;
    margin-top: 20px;
  }
</style>