<template>
    <el-row type="flex" class="row-bg" justify="center">
        <div class="cardbox">
            <el-col :span="6" v-for="item in cardArray" :key="item.index" >
              <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
                <router-link :to="{
                    name: 'HotelView',     
                    query: {   
                        viewArray: item, 
                    }
                }">
                    <el-image :src="item.hotelView" class="cardimg" lazy></el-image>
                    <div style="padding: 14px;">
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" >
                                <h3>{{item.hotelName}}</h3>
                            </el-button>
                        </div>
                    </div>
                </router-link>    
              </el-card>
            </el-col>
        </div>
    </el-row>
</template>

<script>
export default {
    props:{
        cardArray:Array
    }
}
</script>

<style>
.cardbox{
    display: flex;
    flex-wrap: wrap;
    margin-left: 180px;
    margin-right: 180px;
}
.card{
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: center;
}
.cardimg {
  display: block;
  height:250px;
  width:100%
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>

