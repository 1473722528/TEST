<template>
  <div>
  <Carousel_Card :carouselCardArray='carouselCardArray'></Carousel_Card>  <!-- 走马灯展示 -->
  <AreaSelect/> <!--地区选择-->
  <DateSelect/> <!--日期选择-->
  <Card :cardArray='hotelArray' />
  
  <!--<ItemBox :itemArray='hotelArray' />   酒店商品 -->  
  <BackTop/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return {
        userData:{
          userName:"ABC",
          userRole:"管理员"
        },
        carouselCardArray:[    //图片数组
          {id: 0,idView: require('../assets/img/01.jpg'),title: '广东'},
          {id: 1,idView: require('../assets/img/02.jpg'),title: '广西'},
          {id: 2,idView: require('../assets/img/03.jpg'),title: '河南'},
          {id: 3,idView: require('../assets/img/04.jpg'),title: '河北'},
          {id: 4,idView: require('../assets/img/05.jpg'),title: '湖南'},
          {id: 5,idView: require('../assets/img/06.jpg'),title: '湖北'}
        ],
        hotelArray:[
          {id: 0,areaId: 0,areaName: '梧州',title: '梧州君约酒店',message: '这里是梧州君约酒店',idView: require('../assets/img/h1.jpg')},
          {id: 1,areaId: 1,areaName: '广州',title: '广州龙珠酒店',message: '这里是广州龙珠酒店',idView: require('../assets/img/h2.jpg')},
          {id: 2,areaId: 2,areaName: '贵州',title: '贵州四季酒店',message: '这里是贵州四季酒店',idView: require('../assets/img/h3.jpg')},
          {id: 3,areaId: 3,areaName: '杭州',title: '杭州会理酒店',message: '这里是杭州会理酒店',idView: require('../assets/img/h4.jpg')},
          {id: 4,areaId: 4,areaName: '梧州',title: '梧州国际酒店',message: '这里是梧州国际酒店',idView: require('../assets/img/h2.jpg')},
          {id: 5,areaId: 5,areaName: '广州',title: '广州斯基酒店',message: '这里是广州斯基酒店',idView: require('../assets/img/h3.jpg')},
          {id: 6,areaId: 6,areaName: '贵州',title: '贵州民族酒店',message: '这里是贵州民族酒店',idView: require('../assets/img/h4.jpg')},
          {id: 7,areaId: 7,areaName: '杭州',title: '杭州人民酒店',message: '这里是杭州人民酒店',idView: require('../assets/img/h1.jpg')},
          {id: 8,areaId: 8,areaName: '梧州',title: '梧州电竞酒店',message: '这里是梧州电竞酒店',idView: require('../assets/img/h3.jpg')},
          {id: 9,areaId: 9,areaName: '广州',title: '广州丽人酒店',message: '这里是广州丽人酒店',idView: require('../assets/img/h4.jpg')},
          {id: 10,areaId: 10,areaName: '贵州',title: '贵州半夏酒店',message: '这里是贵州半夏酒店',idView: require('../assets/img/h1.jpg')},
          {id: 11,areaId: 11,areaName: '杭州',title: '杭州国际酒店',message: '这里是杭州国际酒店',idView: require('../assets/img/h2.jpg')},
          {id: 12,areaId: 12,areaName: '梧州',title: '梧州会理酒店',message: '这里是梧州会理酒店',idView: require('../assets/img/h4.jpg')},
          {id: 13,areaId: 13,areaName: '广州',title: '广州君越酒店',message: '这里是广州君越酒店',idView: require('../assets/img/h1.jpg')},
          {id: 14,areaId: 14,areaName: '贵州',title: '贵州君悦酒店',message: '这里是贵州君悦酒店',idView: require('../assets/img/h2.jpg')},
          {id: 15,areaId: 15,areaName: '杭州',title: '杭州龙珠酒店',message: '这里是杭州龙珠酒店',idView: require('../assets/img/h3.jpg')}
        ]
      }
    }
}

</script>


<style>

</style>