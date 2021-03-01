<template>
  <div id="item-box">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="box-content" v-for="item in itemArray" :key="item.index">  <!--第一列-->
          <el-image 
            lazy
            style="width: 300px; height: 250px"
            v-if="item.id%4=='0'"
            :src="item.idView" 
            >    
          </el-image>
          <h4 v-if="item.id%4=='0'">{{item.areaName}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="box-content" v-for="item in itemArray" :key="item.index">  <!--第一列-->
          <el-image 
            lazy
            style="width: 300px; height: 250px"
            v-if="item.id%4=='1'"
            :src="item.idView" 
            >
          </el-image>
          <h4 v-if="item.id%4=='1'">{{item.areaName}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="box-content" v-for="(item,index) in itemArray" :key="index">  <!--第一列-->
          <el-image 
            lazy
            style="width: 300px; height: 250px"
            v-if="item.id%4=='2'"
            :src="item.idView" 
            > 
          </el-image>
          <h4 v-if="item.id%4=='2'">{{item.areaName}}</h4>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="box-content" v-for="item in itemArray" :key="item.index">  <!--第一列-->
          <el-image 
            lazy
            style="width: 300px; height: 250px"
            v-if="item.id%4=='3'"
            :src="item.idView" 
            >   
          </el-image>
          <h4 v-if="item.id%4=='3'">{{item.areaName}}</h4>
        </div>
      </el-col>
    </el-row>
</div>  
</template>

<script>
export default {
  props:{
    itemArray : Array,
  }
}
</script>

<style>
  .box-content {
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