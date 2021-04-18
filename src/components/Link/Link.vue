<template>      <!--文字链接组件-->
    <div >
        <el-link @click="fun">  
            <h1><i :class="linkIcon"></i>{{linkTitle}}</h1>
        </el-link>
    </div>
</template>
<script>
export default {
    props:{
        linkIcon:String,
        linkTitle:String,
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