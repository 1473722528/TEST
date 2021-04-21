<template>
    <div class="hotelview">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="14">
                <div>
                    <el-container>
                        <el-header>
                            <div>
                                <h2>
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
                                    <el-radio-group v-model="orderRoomName" v-for="item in hotelArray.children" :key="item.index">
                                        <el-radio-button :label="item.roomName"></el-radio-button>
                                    </el-radio-group>
                                    <el-input-number v-model="orderRoomNum" controls-position="right" @change="handleChange"
                                     :min="1" :max="haveRoomNum" style="width:80px">
                                     </el-input-number> 
                                     <el-tag
                                        type="success"
                                        effect="plain">
                                        价格 : ￥{{200}} /间  <span v-if="this.haveRoomNum!=0">剩余 : {{ haveRoomNum }} 间</span>
                                    </el-tag>
                                    <div>
                                        <span>点击以上按钮预览房间</span>
                                    </div>   
                                </el-tag>
                                </div>
                                <div class="block">
                                  <el-date-picker
                                    v-model="date"
                                    align="right"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions">
                                  </el-date-picker>
                                </div>
                                <div> 
                                    <el-button type="danger" plain :disabled="orderDisable" @click="getdate()">立 即 预 定</el-button>
                                </div> 
                            </el-footer>
                          </el-container>
                        </el-container>
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
            date:'',
            pickerOptions: {
                disabledDate(time) {
                  return time.getTime() < Date.now() || time.getTime() > Date.now()+7 * 24 * 3600 * 1000;
                }
            },
            orderDisable:true,
            orderDisableKey1:false,
            orderDisableKey2:false,
            orderRoomNum:1,
            orderRoomName:'',
            haveRoomNum:0,
            tempRoomData:[],
            hotelArray:[],
            hotelImg:[],
            carouselArray:[]
        }
    },
    created(){
        this.getitem();
        this.getimg();     
        this.orderRoomName=this.hotelArray.children[0].roomName;           //设置默认房间名
    },
    watch:{
        orderRoomName(value){
            if(value!=null){
                for(let i=0;i<this.hotelArray.childNum;i++){
                    if(value==this.hotelArray.children[i].roomName){
                        this.hotelImg[0]=this.hotelArray.children[i].roomImg;
                        this.tempRoomData=this.hotelArray.children[i];
                        this.getimg();
                        var dateExist=false;
                        for (var item of this.tempRoomData.roomDate) {
                            if(this.date==item.date){
                                this.haveRoomNum=item.roomNum;
                                dateExist=true;
                            }
                        }
                        if(dateExist==false&&this.date!=null){
                            this.tempRoomData.roomDate.push({roomNum:this.tempRoomData.roomNum,date:this.date});
                            this.haveRoomNum=item.roomNum;
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
        date(value){
            if(value!=null){
                this.orderDisableKey2=true;
                this.orderRoomNum=1;
                var dateExist=false;
                for (var item of this.tempRoomData.roomDate) {
                    if(this.date==item.date){
                        this.haveRoomNum=item.roomNum;
                        dateExist=true;
                    }
                }
                if(dateExist==false){
                    this.tempRoomData.roomDate.push({roomNum:this.tempRoomData.roomNum,date:value});
                    this.haveRoomNum=item.roomNum;
                }
                console.log(dateExist);
            }
            else if(value==null){
                this.orderDisableKey2=false; 
                this.haveRoomNum=0;
            }
        },
        orderDisableKey1(value){
            if(value==true&&this.orderDisableKey2==true){
                this.orderDisable=false;
            }
            else if(value==false){
                this.orderDisable=true;
            }
        },
        orderDisableKey2(value){
            if(value==true&&this.orderDisableKey1==true){
                this.orderDisable=false;
            }
            else if(value==false){
                this.orderDisable=true;
            }
        }
    },
    mounted(){

    },
    methods:{
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
    border-radius: 30px
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