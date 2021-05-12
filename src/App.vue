<template>
  <div id="app">
    <NavHeader v-if="this.$route.path!='/login'"/>
    <el-divider v-if="this.$route.path!='/login'" class="divider" content-position="right"></el-divider>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>             

export default {
  name: 'app',
  data(){
    return{
      input: '',
      select: '',
      myData:{
        userId:'',
        userName:''
      }
    }
  },
  created(){
    if (sessionStorage.getItem("MyData")) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("MyData"))))
    }  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active{
  color: #2c3e50;
}

</style>
