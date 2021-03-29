<template>
    <div class="hotelview">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="14">
                <div>
                    <el-container>
                        <el-header>酒店名：{{hotelArray.title}}</el-header>
                        <el-container>
                          <el-aside width="550px" >
                              <Carousel/>
                          </el-aside>
                          <el-container>
                            <el-main>酒店详情：<br/> {{hotelArray.message}}</el-main>
                            <el-footer>
                                <el-button @click="getitem()">
                                    立即预定
                                </el-button>
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
            hotelArray:{id:0,areaId: 0,areaName:'梧州',title:'梧州君悦酒店',message:'本酒店位于梧州，是附近富有名气的酒店之一.',idView:require('../../assets/img/h1.jpg')},
            
        }
    },
    methods:{
        getitem(){
            this.hotelArray=this.$route.params.viewArray;
            console.log(this.$route.params.viewArray)
        }
    }
}
</script>

<style>
.hotelview{
    margin-top: 20px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 50px;
    height: 300px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>