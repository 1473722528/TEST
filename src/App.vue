<template>
  <div id="app">
    <NavHeader v-if="this.$route.path!='/login'"/>
    <el-divider v-if="this.$route.path!='/login'" class="divider" content-position="right"></el-divider>
    <div>
      <router-view v-if="isRouterAlive" />
    </div>
    
  </div>
</template>

<script>             

export default {
  name: 'app',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true,
      input: '',
      select: ''
    }
  },
  methods:{
		reload(){
			this.isRouterAlive=false
			this.$nextTick(function(){
				this.isRouterAlive=true
			})
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
