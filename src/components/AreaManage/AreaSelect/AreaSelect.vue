<template>
    <div class="areaselect">  
        <el-row  type="flex" class="row-bg" justify="center">
            <el-col :span="1">
                <div class="allarea">
                    地区:
                </div>           
            </el-col>
            <el-col :span="1"  v-for="item in areaArray" :key="item.index">
                    <el-button  type="text">
                        {{item.areaName}}
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
                {id:0,areaName:'广东'},
                {id:1,areaName:'广西'},
                {id:2,areaName:'峡西'},
                {id:3,areaName:'湖南'},
                {id:4,areaName:'湖北'},
                {id:5,areaName:'河南'},
                {id:6,areaName:'河北'},
                {id:7,areaName:'福建'},
            ]
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
    margin-top: 8px;
}
.areabox{
    display: flex;
    flex-wrap: wrap;
}
.areaselect{
    align-items: center;
}
</style>