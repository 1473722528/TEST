<template>
    <div class="nav">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="logo">
            <img src="../../assets/img/hotellogo.jpg" alt="logo" height="80px" width="80px">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head-content">
            <router-link to='/'>酒店预约首页</router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div >
            <div style="margin-top: 22px;">
              <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" clearable>
              <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="地点" value="1"></el-option>
              <el-option label="酒店" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head-content" v-if="this.$store.state.username==''">
            <router-link to='/login'>登录</router-link> |
            <router-link to='/registe'>注册</router-link>
          </div>
          <div class="head-content" v-if="this.$store.state.userrole=='管理员'">
            <router-link to='/totalmanage'>酒店管理</router-link>
          </div>
        </el-col>
      </el-row> 
    </div>
       

</template>

<script>
export default {
  data() {
    return {
      input: '',
      select: ''
  }
 }
}
</script>>


<style>
.nav{
  height: 90px;
  text-align: center;
}
.logo {
  text-align: right;
}
.el-col {
  border-radius: 0px;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.head-content {
  margin-top: 28px;
  border-radius: 0px;
  min-height: 36px;
}
.el-select .el-input {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>