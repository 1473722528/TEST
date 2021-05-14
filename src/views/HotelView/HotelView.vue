<template>
    <div class="hotelview" >
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="14">
                <div>
                    <el-container>
                        <el-header>
                            <div >
                                <h2 >
                                    <el-divider direction="vertical"></el-divider>
                                        {{hotelArray.hotelName}}
                                    <el-divider direction="vertical"></el-divider>
                                </h2>
                            </div>
                            
                        </el-header>
                        <el-container>
                          <el-aside width="550px" class="hotelaside" >
                              <Carousel :carouselArray='carouselArray' />
                          </el-aside>
                          <el-container>
                            <el-main class="hotelmain">
                                <el-card class="box-card2">
                                  <div slot="header" class="clearfix">
                                    <span>酒店详情 : </span>
                                  </div>
                                  <div class="hotelmsg">
                                     <h4>{{hotelArray.hotelInfo}}</h4>
                                  </div>
                                </el-card>
                            </el-main>
                            <el-footer>
                                <div>
                                    <el-tag
                                    style="width:100%;height:100%"
                                    :hit="true"
                                    effect="plain">
                                    <el-radio-group v-model="orderRoomName" v-for="item in roomData" :key="item.index">
                                        <el-radio-button :label="item.roomName"></el-radio-button>
                                    </el-radio-group>
                                    <el-input-number v-model="orderRoomNum" controls-position="right" @change="handleChange"
                                     :min="1" :max="haveRoomNum" style="width:80px">
                                     </el-input-number> 
                                     <el-tag
                                        type="success"
                                        effect="plain">
                                        <span>价格 : ￥{{showRoomPrice}} /间</span>  <span v-if="this.haveRoomNum!=0"> , 剩余 : {{ haveRoomNum }} 间</span>
                                        <span v-if="this.haveRoomNum==0"> , 暂无房间</span>
                                    </el-tag>
                                    <div>
                                        <span>点击以上按钮预览房间 , 选择日期获取房间数量</span>
                                    </div>   
                                </el-tag>
                                </div>
                                <el-date-picker
                                  v-model="orderDate"
                                  align="right"
                                  type="date"
                                  format="yyyy 年 MM 月 dd 日"
                                  value-format="yyyy-MM-dd"
                                  placeholder="选择日期"
                                  :picker-options="pickerOptions">
                                </el-date-picker>
                                <div style="margin:20px" > 
                                    <el-button type="danger" plain :disabled="orderDisable" @click="orderFormOpen()">立 即 预 定</el-button>
                                </div> 
                            </el-footer>
                          </el-container>
                        </el-container>
                    </el-container>
                </div>
            </el-col>
        </el-row>
        <OrderForm :openDialogVisible="openOrderForm"  :ruleForm="ruleForm" :fun="orderFormClose"/>
    </div>
</template>

<script>
import {getRoomData,getDateData} from '@/api/authority.js'
export default {
    data(){
        return{
            openOrderForm:false,
            ruleForm:{
                orderId:200000000,
                userId:2015002,
                userName:'张三',
                userAge:18,
                userIdCard:441226199909090009
            },

            
            pickerOptions: {                            //日期选择器限定在一周内
                disabledDate(time) {
                  return time.getTime() < Date.now() || time.getTime() > Date.now()+7 * 24 * 3600 * 1000;
                }
            },

            orderDate:null,
            orderDisable:true,
            orderDisableKey1:false,
            orderDisableKey2:false,
            orderRoomNum:1,
            orderRoomName:'',
            haveRoomNum:0,                     //显示出来的房间数量
            showRoomPrice:'',             //显示出来的房间价格
            tempRoomData:[],
            hotelArray:[],
            hotelImg:[],
            carouselArray:[],
            roomData:[],
            getDate:{
                hotelId:20210001,
                roomId:1001,
                roomDate:'2021-04-28'
            },
            dateData:[]
        }
    },
    created(){
        this.getitem();
        console.log(this.hotelArray);
        this.getimg();   
        this.getRoomData();  
        this.getDateData(); 
    },
    watch:{
        orderRoomName(value){
            if(value!=null){
                for(let i=0;i<this.roomData.length;i++){
                    if(value==this.roomData[i].roomName){
                        this.hotelImg[0]=this.roomData.roomImg;
                        this.tempRoomData=this.roomData[i];
                        this.showRoomPrice=this.tempRoomData.roomPrice;
                        this.ruleForm.roomId=this.tempRoomData.roomId;
                        this.ruleForm.hotelId=this.tempRoomData.hotelId;
                        this.ruleForm.hotelName=this.tempRoomData.hotelName;
                        this.getimg();
                        var dateExist=false;
                        for (var item of this.tempRoomData.roomDate) {
                            if(this.orderDate==item.date&&this.orderDate!=null){
                                this.haveRoomNum=item.roomNum;
                                dateExist=true;
                            }
                        }
                        if(dateExist==false&&this.orderDate!=null){
                            this.tempRoomData.roomDate.push({roomNum:this.tempRoomData.roomNum,date:this.orderDate});
                            this.haveRoomNum=this.tempRoomData.roomNum;
                        }
                        console.log(dateExist);
                        console.log(this.hotelImg);
                        console.log(this.tempRoomData);
                    }
                }
                this.orderDisableKey1=true;
                this.orderRoomNum=1;
                
            }
        },
        orderDate(value){ 
            if(value!=null){
                this.orderDisableKey2=true;
                this.orderRoomNum=1;
                var dateExist=false;
                for (var item of this.tempRoomData.roomDate) {
                    if(this.orderDate==item.date&&this.orderDate!=null){
                        this.haveRoomNum=item.roomNum;
                        dateExist=true;
                    }
                }
                if(dateExist==false&&this.orderDate!=null){
                    this.tempRoomData.roomDate.push({roomNum:this.tempRoomData.roomNum,date:value});
                    this.haveRoomNum=this.tempRoomData.roomNum
                }
                console.log(dateExist);
            }
            else if(value==null){
                this.orderDisableKey2=false; 
                this.haveRoomNum=0;
            }
        },
        orderDisableKey1(value){
            if(value==true&&this.orderDisableKey2==true&&this.haveRoomNum!=0){
                this.orderDisable=false;
            }
            else if(value==false||this.haveRoomNum==0){
                this.orderDisable=true;
            }
        },
        orderDisableKey2(value){
            if(value==true&&this.orderDisableKey1==true&&this.haveRoomNum!=0){
                this.orderDisable=false;
            }
            else if(value==false||this.haveRoomNum==0){
                this.orderDisable=true;
            }
        },
        haveRoomNum(value){
            if(value==0){
                this.orderDisable=true;
            }
            else{
                this.orderDisable=false;
            }
        }
    },
    methods:{
        getRoomData(){
            getRoomData(this.hotelArray).then(Response=>{
                this.roomData=Response;
                console.log(this.roomData);
                this.orderRoomName=this.roomData[0].roomName;           //设置默认房间名
            })
        },
        getDateData(){
            getDateData(this.getDate).then(Response=>{
                this.dateData=Response;
                console.log(this.dateData);
            })
        },
        orderFormOpen(){
            this.openOrderForm=true;
            this.ruleForm.roomDate=this.orderDate;
            this.ruleForm.roomName=this.orderRoomName;
            this.ruleForm.roomNum=this.orderRoomNum;
            this.ruleForm.orderPrice=this.orderRoomNum*this.showRoomPrice;
        },
        orderFormClose(){
            this.openOrderForm=false;
        },
        getitem(){
            this.hotelArray=this.$route.query.viewArray;               //接收路由数据
            console.log(this.$route.query.viewArray)
        },
        getimg(){
            this.carouselArray=this.hotelImg[0];
        },
        handleChange(value) {
            console.log(value);
        },
        getdate(){
            console.log(this.date);
        }
    }
}
</script>

<style>
.title{
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card2 {
    width: 99%;
    margin: 0;
    height: 99%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 30px;
    background-color: rgb(211, 224, 248);
  }
.hotelview{
    margin-top: 20px;
}
.el-header,.el-footer{
   text-align: center;
   padding: 0px;
   margin: 0px;

 }
 
 .el-aside {
   box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   text-align: center;
   padding: 0px;
 }
 
 .el-main {
   text-align: center;
   padding: 0px;
   margin: 0px;
    
 }
.hotelaside{
    margin-top: 60px;
}
.hotelmain{
    margin-top: 60px;
}

</style>