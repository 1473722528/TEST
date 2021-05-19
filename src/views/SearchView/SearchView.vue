<template>
    <div class="searchview">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="23">
            <div>
                <el-container>
                    <el-header>
                          <el-page-header style="margin-left:210px" @back="goBack" content="搜索详情页面">
                          </el-page-header>
                    </el-header>
                    <el-main class="searchmain">
                      <Card  :cardArray="hotelArray"/>
                    </el-main>
                    <el-footer>
                      <!-- <Pagination  /> -->
                    </el-footer>
                </el-container>
            </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import {searchHotelData,searchRoomData} from '@/api/authority.js'
  export default {
    data(){
      return{
        hotelArray:[],
        searchData:{
          hotelId:null,
          hotelName:null,
          hotelArea:null,
          hotelInfo:null,
        },
        searchRoomData:{
          roomName:null
        }
      }
    },
    created(){
      this.getSearchData()
      this.searchHotelData();
    },
    methods: {
      searchHotelData(){
        console.log(this.searchRoomData);
        if(this.searchRoomData.roomName==null){
          searchHotelData(this.searchData).then(Response=>{
          this.hotelArray=Response;
          console.log(Response);
          })
        }else{
          searchRoomData(this.searchRoomData).then(Response=>{
          this.hotelArray=Response;
          console.log(Response);
          })
        }
      },
      getSearchData(){
        this.searchData.hotelId=this.$route.query.hotelId;
        this.searchData.hotelName=this.$route.query.hotelName;
        this.searchData.hotelArea=this.$route.query.hotelArea;
        this.searchData.hotelInfo=this.$route.query.hotelInfo;
        this.searchRoomData.roomName=this.$route.query.roomName;
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style>
.searchview{
    margin-top: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

 .searchmain{
   margin-top:60px;
 }
.searchview{
  margin-top: 20px;
}
</style>