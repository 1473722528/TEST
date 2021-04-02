<template>
    <div class="hotelview">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="14">
                <div>
                    <el-container>
                        <el-header>酒店名：{{hotelArray.title}}</el-header>
                        <el-container>
                          <el-aside width="550px" >
                              <Carousel :carouselArray='carouselArray' />
                          </el-aside>
                          <el-container>
                            <el-main>酒店详情：<br/> {{hotelArray.message}}</el-main>
                            <el-footer>
                                <el-button>
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
            hotelArray:[],
            hotelImg:[
              [
                {idView:require('../../assets/img/h1.jpg')},
                {idView:require('../../assets/img/h1.jpg')},
                {idView:require('../../assets/img/h1.jpg')}
              ],
              [
                {idView:require('../../assets/img/h2.jpg')},
                {idView:require('../../assets/img/h2.jpg')},
                {idView:require('../../assets/img/h2.jpg')},
              ],
              [
                {idView:require('../../assets/img/h3.jpg')},
                {idView:require('../../assets/img/h3.jpg')},
                {idView:require('../../assets/img/h3.jpg')},
              ],
              [
                {idView:require('../../assets/img/h4.jpg')},
                {idView:require('../../assets/img/h4.jpg')},
                {idView:require('../../assets/img/h4.jpg')},
              ],
            ],
            carouselArray:[]
        }
    },
    created(){
        this.getitem();
        this.getimg();     
    },
    mounted(){

    },
    methods:{
        getitem(){
            this.hotelArray=this.$route.query.viewArray;
            console.log(this.$route.query.viewArray)
        },
        getimg(){
            this.carouselArray=this.hotelImg[this.hotelArray.id]
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