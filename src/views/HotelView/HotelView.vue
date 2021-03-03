<template>
    <div class="hotelview">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="14">
                <div>
                    <el-container>
                        <el-header>{{hotelArray.titel}}</el-header>
                        <el-container>
                          <el-aside width="500px" >
                              <el-image :src="hotelArray.idView" class="imgview" lazy></el-image>
                          </el-aside>
                          <el-container>
                            <el-main>Main</el-main>
                            <el-footer>button</el-footer>
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
            hotelArray:{id:0,areaId: 0,areaName:'梧州',titel:'梧州君悦酒店',idView:require('../../assets/img/h1.jpg')}
        }
    },
    methods:{

    }
}
</script>

<style>
.hotelview{
    margin-top: 20px;
}
.imgview{

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
    text-align: center;
    
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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