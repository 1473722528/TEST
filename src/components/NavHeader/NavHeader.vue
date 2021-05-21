<template>
  <div class="nav">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="logo" >
          <canvas id="myCanvas"  width="300" height="80" >
          </canvas>
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
                <el-option label="酒店名" value="hotelName"></el-option>
                <el-option label="酒店地区" value="hotelArea"></el-option>
                <el-option label="酒店特点" value="hotelInfo"></el-option>
                <el-option label="房间名" value="roomName"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search" @click="goSearchView()"></el-button>
            </el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="head-content" v-if="this.$store.state.userId==''">
          <router-link to='/login'>登录</router-link> |
          <router-link to='/registe'>注册</router-link>
        </div>
        <div class="head-content" v-if="this.$store.state.userId!=''">
          <router-link to='/totalmanage'>{{manageTitle}}</router-link> |
          <router-link to='/login'>返回登录</router-link>
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
      select: '',
      manageTitle:'酒店管理',
      userRole:'',
      searchData:{
        hotelId:null,
        hotelName:null,
        hotelArea:null,
        hotelInfo:null,
       
      },
      searchRoomData:{
        roomName:null,
      }
  }
 },
 created(){
   this.getUserRole();
 },
 mounted(){
   this.canvas()
 },
 watch:{
   userRole(value){
     if(value=='用户'){
       this.manageTitle='个人中心';
       console.log(value);
     }else if(value=='管理员'){
       this.manageTitle='管理中心'
     }
   }
 },
 methods:{
  getUserRole(){
    this.userRole=this.$store.state.userRole;
  },
  goSearchView(){
    if(this.select=='roomName'){
      this.searchRoomData.roomName=this.input;
      if(this.$route.path!='/searchview'){
        this.$router.push({
        path:'/searchview',
        query:{
          roomName:this.searchRoomData.roomName
          }
        });
        console.log(this.searchRoomData.roomName);
      }
      else{
        this.$router.push({
        path:'/searchview',
        query:{
          roomName:this.searchRoomData.roomName
          }
        });window.location.reload();
        console.log("is searchview");
      }
    }else if(this.select=='hotelName'){
      this.searchData.hotelName=this.input;
      if(this.$route.path!='/searchview'){
        this.$router.push({
        path:'/searchview',
        query:{
          hotelName:this.searchData.hotelName
          }
        });
        console.log(this.searchData.hotelName);
      }
      else{
        this.$router.push({
        path:'/searchview',
        query:{
          hotelName:this.searchData.hotelName
          }
        });window.location.reload();
        console.log("is searchview");
      }
    }else if(this.select=='hotelArea'){
      this.searchData.hotelArea=this.input;
      if(this.$route.path!='/searchview'){
        this.$router.push({
        path:'/searchview',
        query:{
          hotelArea:this.searchData.hotelArea
          }
        });
        console.log(this.searchData.hotelArea);
      }
      else{
        this.$router.push({
        path:'/searchview',
        query:{
          hotelArea:this.searchData.hotelArea
          }
        });window.location.reload();
        console.log("is searchview");
      }
    }else if(this.select=='hotelInfo'){
      this.searchData.hotelInfo=this.input;
      if(this.$route.path!='/searchview'){
        this.$router.push({
        path:'/searchview',
        query:{
          hotelInfo:this.searchData.hotelInfo
          }
        });
        console.log(this.searchData.hotelInfo);
      }
      else{
        this.$router.push({
        path:'/searchview',
        query:{
          hotelInfo:this.searchData.hotelInfo
          }
        });window.location.reload();
        console.log("is searchview");
      }
    }
    
  },
  canvas(){
    var c=document.getElementById("myCanvas");      //画笔画图标
    var ctx=c.getContext("2d");
    var grd=ctx.createLinearGradient(0,0,0,80);     //设置渐变
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.font="30px Arial";
    ctx.fillText("Hotel Reservation",10,50);
    ctx.beginPath();                                 
    ctx.moveTo(6,6);
    ctx.quadraticCurveTo(6,30,66,6);
    ctx.moveTo(126,17);
    ctx.quadraticCurveTo(126,-10,66,17);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(136,6);
    ctx.quadraticCurveTo(136,30,196,6);
    ctx.moveTo(256,17);
    ctx.quadraticCurveTo(256,-10,196,17);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(6,66);
    ctx.quadraticCurveTo(6,90,66,66);
    ctx.moveTo(126,75);
    ctx.quadraticCurveTo(126,49,66,75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(136,66);
    ctx.quadraticCurveTo(136,90,196,66);
    ctx.moveTo(256,75);
    ctx.quadraticCurveTo(256,49,196,75);
    ctx.stroke();	
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