<template>
  <div>
  <Carousel :ImgArray='ImgArray'></Carousel>  <!-- 走马灯展示 -->
  <DateSelect/>
  <Hotel :HotelArray='HotelArray' :HotelArray2='HotelArray2' :HotelArray3='HotelArray3' :HotelArray4='HotelArray4' />  <!-- 酒店商品 -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return {
        UserData:{
          username:"ABC",
          userrole:"管理员"
        },
        ImgArray:[    //图片数组
          {id:0,idView:require('../assets/img/01.jpg'),title:'梧州'},
          {id:1,idView:require('../assets/img/02.jpg'),title:'梧州'},
          {id:2,idView:require('../assets/img/03.jpg'),title:'梧州'},
          {id:3,idView:require('../assets/img/04.jpg'),title:'梧州'},
          {id:4,idView:require('../assets/img/05.jpg'),title:'梧州'},
          {id:5,idView:require('../assets/img/06.jpg'),title:'梧州'}
        ],
        HotelArray:[
          {id:0,title:'梧州',idView:require('../assets/img/h1.jpg')},
          {id:1,title:'广州',idView:require('../assets/img/h2.jpg')},
          {id:2,title:'贵州',idView:require('../assets/img/h3.jpg')},
          {id:3,title:'杭州',idView:require('../assets/img/h4.jpg')},
          {id:4,title:'梧州',idView:require('../assets/img/h2.jpg')},
          {id:5,title:'广州',idView:require('../assets/img/h3.jpg')},
          {id:6,title:'贵州',idView:require('../assets/img/h4.jpg')},
          {id:7,title:'杭州',idView:require('../assets/img/h1.jpg')},
          {id:8,title:'梧州',idView:require('../assets/img/h3.jpg')},
          {id:9,title:'广州',idView:require('../assets/img/h4.jpg')},
          {id:10,title:'贵州',idView:require('../assets/img/h1.jpg')},
          {id:11,title:'杭州',idView:require('../assets/img/h2.jpg')},
          {id:12,title:'梧州',idView:require('../assets/img/h4.jpg')},
          {id:13,title:'广州',idView:require('../assets/img/h1.jpg')},
          {id:14,title:'贵州',idView:require('../assets/img/h2.jpg')},
          {id:15,title:'杭州',idView:require('../assets/img/h3.jpg')}
        ]
      }
    }
}

</script>


<style>

</style>