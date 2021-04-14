<template>      <!--文字链接组件-->
    <div >
        <el-link @click="fun">  
            <h1><i class="el-icon-edit"></i>{{linktitle}}</h1>
        </el-link><br/>
    </div>
</template>
<script>
export default {
    props:{
        linktitle:String,
        fun:{
            type: Function
        }
    },
    data(){
        return{
            input:'222222222'
        }
    },
    methods:{
        addArea(){
            console.log("add")
        }
    }
}
</script>
<style>

</style>