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
                    <el-main class="searchmain">
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
import {searchHotelData} from '@/api/authority.js'
  export default {
    data(){
      return{
        hotelArray:[],
        searchData:{
          hotelId:null,
          hotelName:null,
          hotelArea:null,
          hotelInfo:null
        }
      }
    },
    created(){
      this.getSearchData()
      this.searchHotelData();
    },
    methods: {
      searchHotelData(){
        console.log(this.searchData);
        searchHotelData(this.searchData).then(Response=>{
          this.hotelArray=Response;
          console.log(Response);
          
        })
      },
      getSearchData(){
        this.searchData.hotelId=this.$route.query.hotelId;
        this.searchData.hotelName=this.$route.query.hotelName;
        this.searchData.hotelArea=this.$route.query.hotelArea;
        this.searchData.hotelInfo=this.$route.query.hotelInfo;
      },
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
.searchview{
  margin-top: 60px;
}
</style>