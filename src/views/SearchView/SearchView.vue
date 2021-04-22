<template>
    <div class="searchview">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="23">
            <div>
                <el-container>
                    <el-header>
                        <h1 style="margin-left:200px"><el-page-header @back="goBack" content="搜索详情页面">
                        </el-page-header></h1>
                    </el-header>
                    <el-main>
                      <Card  :cardArray="hotelArray"/>
                    </el-main>
                    <el-footer>
                      <Pagination  />
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
        hotelArray:[
          {
            hotelId:2017001,
            hotelName: '梧州君约酒店',
            hotelArea: '梧州',
            hotelInfo: '这里是梧州君约酒店',
            hotelAddress:'梧州君约朝阳路十八号',
            childNum:2,
            hotelView: require('../../assets/img/h1.jpg'),
            children:[
              {
                roomId:20001,
                roomName:'普通房',
                roomNum:5,
                roomPrice:200,
                roomImg:[{roomView:require('../../assets/img/h2.jpg'),},{roomView:require('../../assets/img/h2.jpg')}],
                roomDate:[{roomNum:4,date:'2021-04-26'},{roomNum:0,date:'2021-04-27'}]
              },
              {
                roomId:20002,
                roomName:'双人房',
                roomNum:8,
                roomPrice:400,
                roomImg:[{roomView:require('../../assets/img/h4.jpg'),},{roomView:require('../../assets/img/h4.jpg')}],
                roomDate:[{roomNum:7,date:'2021-04-26'},{roomNum:0,date:'2021-04-27'}]
              }
            ]
          },
          {
            hotelId:2017002,
            hotelName: '广州龙珠酒店',
            hotelArea: '广州',
            hotelInfo: '这里是广州龙珠酒店',
            hotelAddress:'广州龙珠朝阳路十八号',
            childNum:2,
            hotelView: require('../../assets/img/h2.jpg'),
            children:[
              {
                roomId:200021,
                roomName:'普通房',
                roomNum:5,
                roomPrice:200,
                roomImg:[{roomView:require('../../assets/img/h3.jpg')},{roomView:require('../../assets/img/h3.jpg')}],
                roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]
              },
              {
                roomId:20054,
                roomName:'双人房',
                roomNum:8,
                roomPrice:400,
                roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]
              }
            ]
          },
          {hotelId:2017003,hotelName: '贵州四季酒店',hotelArea: '贵州',hotelInfo: '这里是贵州四季酒店',hotelAddress:'贵州四季朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h3.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h4.jpg')},{roomView:require('../../assets/img/h4.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017004,hotelName: '杭州会理酒店',hotelArea: '杭州',hotelInfo: '这里是杭州会理酒店',hotelAddress:'杭州会理朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h4.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h1.jpg')},{roomView:require('../../assets/img/h1.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017005,hotelName: '梧州国际酒店',hotelArea: '梧州',hotelInfo: '这里是梧州国际酒店',hotelAddress:'梧州国际朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h2.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h3.jpg')},{roomView:require('../../assets/img/h3.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017006,hotelName: '广州斯基酒店',hotelArea: '广州',hotelInfo: '这里是广州斯基酒店',hotelAddress:'广州斯基朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h3.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h2.jpg')},{roomView:require('../../assets/img/h2.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017007,hotelName: '贵州民族酒店',hotelArea: '贵州',hotelInfo: '这里是贵州民族酒店',hotelAddress:'贵州民族朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h4.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h3.jpg')},{roomView:require('../../assets/img/h3.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017008,hotelName: '杭州人民酒店',hotelArea: '杭州',hotelInfo: '这里是杭州人民酒店',hotelAddress:'杭州人民朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h1.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h1.jpg')},{roomView:require('../../assets/img/h1.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017009,hotelName: '梧州电竞酒店',hotelArea: '梧州',hotelInfo: '这里是梧州电竞酒店',hotelAddress:'梧州电竞朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h3.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h4.jpg')},{roomView:require('../../assets/img/h4.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017011,hotelName: '广州丽人酒店',hotelArea: '广州',hotelInfo: '这里是广州丽人酒店',hotelAddress:'广州丽人朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h4.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h2.jpg')},{roomView:require('../../assets/img/h2.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017012,hotelName: '贵州半夏酒店',hotelArea: '贵州',hotelInfo: '这里是贵州半夏酒店',hotelAddress:'贵州半夏朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h1.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h3.jpg')},{roomView:require('../../assets/img/h3.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017014,hotelName: '杭州国际酒店',hotelArea: '杭州',hotelInfo: '这里是杭州国际酒店',hotelAddress:'杭州国际朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h2.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h3.jpg')},{roomView:require('../../assets/img/h3.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017034,hotelName: '梧州会理酒店',hotelArea: '梧州',hotelInfo: '这里是梧州会理酒店',hotelAddress:'梧州会理朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h4.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h1.jpg')},{roomView:require('../../assets/img/h1.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017067,hotelName: '广州君越酒店',hotelArea: '广州',hotelInfo: '这里是广州君越酒店',hotelAddress:'广州君越朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h1.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h2.jpg')},{roomView:require('../../assets/img/h2.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017022,hotelName: '贵州君悦酒店',hotelArea: '贵州',hotelInfo: '这里是贵州君悦酒店',hotelAddress:'贵州君悦朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h2.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h4.jpg')},{roomView:require('../../assets/img/h4.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]},
          {hotelId:2017056,hotelName: '杭州龙珠酒店',hotelArea: '杭州',hotelInfo: '这里是杭州龙珠酒店',hotelAddress:'杭州龙珠朝阳路十八号',childNum:2,hotelView: require('../../assets/img/h3.jpg'),children:[{roomName:'普通房',roomNum:5,roomPrice:200,roomImg:[{roomView:require('../../assets/img/h1.jpg')},{roomView:require('../../assets/img/h1.jpg')}],roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]},{roomName:'双人房',roomNum:8,roomPrice:400,roomDate:[{roomNum:5,date:''},{roomNum:5,date:''}]}]}
        ]
      }
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
<style>
.searchview{
    margin-top: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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

</style>