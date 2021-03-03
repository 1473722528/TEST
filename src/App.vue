<template>
  <div id="app">
    <NavHeader/>
    <el-divider class="divider" content-position="right"></el-divider>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      input: '',
      select: ''
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
