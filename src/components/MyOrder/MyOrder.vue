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
                            <el-card class="myorder-card"  v-for="item in myOrder" :key="item.index" shadow="hover">
                                <div slot="header" class="clearfix">
                                    <span>{{item.hotelName}}</span>
                                    <el-button style="float: right; padding: 3px 0" type="text" @click="openOrderMsg(item.orderId)">查看详情</el-button>
                                </div>
                                <el-row type="flex" class="ordermsg"  justify="space-around">
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'订单号 : ' + item.orderId }}
                                          </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'房间用户 : ' + item.roomUser }}
                                          </div>
                                    </el-col>
                                    <el-col :span="6">
                                          <div class="text item">
                                            {{'身份证号 : ' + item.roomUserIdCard }}
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
          <el-table-column property="orderId" label="订单号" ></el-table-column> 
          <el-table-column property="roomUser" label="房间用户" ></el-table-column>
          <el-table-column property="roomUserIdCard" label="身份证号" ></el-table-column> 
          <el-table-column property="orderPrice" label="订单金额（元）" ></el-table-column>
          <el-table-column property="orderDate" label="订单日期" ></el-table-column>
      </el-table>
      <el-table :data="orderMsg">
        <el-table-column property="hotelId" label="酒店ID" ></el-table-column>  
        <el-table-column property="hotelName" label="酒店名"></el-table-column> 
        <el-table-column property="roomId" label="房间ID"></el-table-column>    
        <el-table-column property="roomName" label="房间名"></el-table-column>  
        <el-table-column property="roomNum" label="房间数（间）"></el-table-column> 
        <el-table-column property="roomPrice" label="房间单价（元）" ></el-table-column>
        <el-table-column property="roomDate" label="预定日期"></el-table-column>
      </el-table>
    </el-dialog>    
    </div>
</template>
<script>
import {getMyOrderData} from '@/api/authority.js'
export default {
    props:{

    },
    data(){
        return{
            orderMsgDialogOpen:false,
            orderIndex:Number,
            myData:{
                userId:this.$store.state.userId,
            },
            orderMsg:[],
            myOrder:[],
        }
    },
    created(){
      this.getMyOrderData();
    },
    methods:{
      getMyOrderData(){
        console.log(this.myData);
        getMyOrderData(this.myData).then(Response=>{
          this.myOrder=Response;
          console.log(this.myOrder);
        })
      },
      openOrderMsg(orderId){
        console.log(orderId);
          for(var i=0;i<this.myOrder.length;i++){
              if(this.myOrder[i].orderId==orderId){
                  this.orderMsg[0]=this.myOrder[i];
              }
          }
          console.log(this.orderMsg);
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
    margin-bottom: 10px;
    margin-top: 15px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .myorder-card {
    width:99%;
    margin-top: 15px;
  }
</style>