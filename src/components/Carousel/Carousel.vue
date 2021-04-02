<template>
  <div class="carousel">
    <el-carousel height="360px">
      <el-carousel-item v-for="item in carouselArray" :key="item.index" >
          <el-image  fit='contain' :src="item.idView" ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:{
    carouselArray: Array
  }
}
</script>

<style>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>