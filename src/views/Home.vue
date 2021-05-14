<template>
  <div>
  <Carousel_Card :carouselCardArray='carouselCardArray'></Carousel_Card>  <!-- 走马灯展示 -->
  <AreaSelect/> <!--地区选择-->
  <Card :cardArray='hotelArray' />
  
  <!--<ItemBox :itemArray='hotelArray' />   酒店商品 -->  
  <BackTop/>
  </div>
</template>

<script>
import {getAllHotelData} from '@/api/authority.js'
export default {
  name: 'Home',
  data(){
      return {
        myData:{
          userId:'',
          userRole:''
        },
        carouselCardArray:[    //图片数组
          {id: 0,hotelView: require('../assets/img/01.jpg'),title: '广东'},
          {id: 1,hotelView: require('../assets/img/02.jpg'),title: '广西'},
          {id: 2,hotelView: require('../assets/img/03.jpg'),title: '河南'},
          {id: 3,hotelView: require('../assets/img/04.jpg'),title: '河北'},
          {id: 4,hotelView: require('../assets/img/05.jpg'),title: '湖南'},
          {id: 5,hotelView: require('../assets/img/05.jpg'),title: '湖北'}
        ],
        hotelArray:[]
      }
    },
    created(){
      this.getAllHotelData();
    },
    methods:{
      getAllHotelData(){
        getAllHotelData().then(Response=>{
          this.hotelArray=Response;
        })
      }
    }
}

</script>


<style>

</style>