<template>
  <div>
    <el-carousel :interval="4000"  type="card" height="400px">
      <el-carousel-item v-for="item in carouselCardArray" :key="item.index">
        <!-- <a href=""> 图片跳转
          <img :src="item.hotelView"  lazy>
        </a> -->
        <router-link :to="{
                    name: 'SearchView',     
                    query: {   
                        hotelArea: item.hotelArea, 
                    }
                }">
            <el-image style="width:100%;height:100%" :src="item.hotelView" ></el-image>
         </router-link>
        <span class="homepagetitle" style="position: absolute; top: 10px; left: 10px;color:#FFFFFF" >{{item.hotelArea}}酒店</span>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  props:{
    carouselCardArray : Array
  },
  data(){
    return{
      select:'',
      searchData:{
        hotelArea:''
      }
    }
  },
  methods:{
    goSearchView(){
      this.select='hotelArea';
      if(this.select=='hotelArea'){
        this.searchData.hotelArea=this.item.hotelArea;
        if(this.$route.path!='/searchview'){
          this.$router.push({
          path:'/searchview',
          query:{
            hotelId:this.searchData.hotelId
            }
          });
        console.log(this.searchData.hotelId);
        }
        else{
          this.$router.push({
          path:'/searchview',
          query:{
            hotelId:this.searchData.hotelId
            }
          });window.location.reload();
          console.log("is searchview");
        }
      }
    }
  }
}

</script>


<style>
.homepagetitle{
  border-radius: 30px
}
  .el-carousel{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .el-carousel_item h3 {
    color: #030303;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

</style>