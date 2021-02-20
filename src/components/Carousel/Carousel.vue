<template>
  <div>
    <el-carousel :interval="4000"  type="card" height="400px">
    <el-carousel-item v-for="item in ImgArray" :key="item">
        <img :src="item.idView" class="image" lazy>
        <span class="homepagetitle" style="position: absolute; top: 10px; left: 10px;color:#FFFFFF" >{{item.title}}</span>
    </el-carousel-item>
  </el-carousel>
  </div>

</template>

<script>
export default {
  props:{
    ImgArray : Array
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