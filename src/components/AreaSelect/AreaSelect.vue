<template>
    <div class="areaselect">  
        <el-row  type="flex" class="row-bg" justify="center" >
            <el-col :span="2">
                <div class="allarea">
                    <h5>地区 : </h5>
                </div>           
            </el-col>
            <el-col :span="1"  v-for="item in areaArray" :key="item.index">
                <el-button  type="text" style="margin:20px">
                    <h3>{{item.hotelArea}}</h3>
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            areaArray:[
                {id:0,hotelArea:'广东'},
                {id:1,hotelArea:'广西'},
                {id:2,hotelArea:'峡西'},
                {id:3,hotelArea:'湖南'},
                {id:4,hotelArea:'湖北'},
                {id:5,hotelArea:'河南'},
                {id:6,hotelArea:'河北'},
                {id:7,hotelArea:'福建'},
            ],
            
        }
    }
}
</script>
<style>
.el-button{
    font-size: 19px;
    color: #000;

}
.allarea{
    margin: 44px;
}
.areabox{
    display: flex;
 
}
.areaselect{
    align-items: center;
    flex-wrap: wrap;
}
</style>