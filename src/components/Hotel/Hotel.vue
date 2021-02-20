<template>
  <div id="hotel">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="hotel-content" v-for="Hotel in HotelArray" :key="Hotel">  <!--第一列-->
          <el-image 
            lazy
            style="width: 300px; height: 250px"
            v-if="Hotel.id%4=='0'"
            :src="Hotel.idView" 
            :preview-src-list="Hotel.idView">     <!-- 大图预览 -->
          </el-image>
          <h4 v-if="Hotel.id%4=='0'">{{Hotel.title}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="hotel-content" v-for="Hotel in HotelArray" :key="Hotel">  <!--第二列-->
          <el-image 
            style="width: 300px; height: 250px"
            v-if="Hotel.id%4=='1'"
            :src="Hotel.idView" 
            :preview-src-list="Hotel.idView">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline" style="margin: auto"></i>
            </div>
          </el-image>
          <h4 v-if="Hotel.id%4=='1'">{{Hotel.title}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="hotel-content " v-for="Hotel in HotelArray" :key="Hotel">  <!--第三列-->
          <el-image 
            style="width: 300px; height: 250px"
            v-if="Hotel.id%4=='2'"
            :src="Hotel.idView" 
            :preview-src-list="HotelArray">
          </el-image>
          <h4 v-if="Hotel.id%4=='2'">{{Hotel.title}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="hotel-content " v-for="Hotel in HotelArray" :key="Hotel">  <!--第四列-->
          <el-image 
            style="width: 300px; height: 250px"
            v-if="Hotel.id%4=='3'"
            :src="Hotel.idView" 
            :preview-src-list="HotelArray">
          </el-image>
          <h4 v-if="Hotel.id%4=='3'">{{Hotel.title}}</h4>
        </div>
      </el-col>
    </el-row>
</div>  
</template>

<script>
export default {
  props:{
    HotelArray : String,
    HotelArray2: String,
    HotelArray3: String,
    HotelArray4: String
  }
}
</script>

<style>
  .hotel-content {
    border-radius: 20px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-col h4{
    margin-top: 0px;
  }
  .image-slot{
    margin-top:125px;
  }
  .row-bg {
    padding: 25px 0;
    background-color: #f9fafc;
  }
</style>