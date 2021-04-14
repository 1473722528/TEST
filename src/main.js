import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from './plugins/element.js'
import './assets/css/base.css'    
import Carousel_Card from './components/Carousel_Card/index.js'   //卡片走马灯
import DateSelect from './components/DateSelect/index.js'   //日期选择
import store from './store/index.js'    //vuex
import NavHeader from './components/NavHeader/index.js'   //顶部导航
import TableMsg from './components/TableMsg/index.js'   //表格信息
import MyMsg from './components/MyMsg/index.js'    //我的信息页面
import Mock from './mock/mock.js'   //模拟数据
import AreaSelect from './components/AreaSelect/index.js'    //地区选择
import Card from './components/Card/index.js'   //卡片
import BackTop from './components/BackTop/index.js'   //返回顶部
import Carousel from './components/Carousel/index.js'   //走马灯
import AreaManage from './components/AreaManage/index.js'   //地区管理页面
import UserManage from './components/UserManage/index.js'   //用户管理页面
import RoomManage from './components/RoomManage/index.js'   //房间管理页面
import Pagination from './components/Pagination/index.js'   //分页
import Link from './components/Link/index.js'   //文字链接
import DialogFrom from './components/DialogFrom/index.js'   //对话框表单

import axios from 'axios'             // 新增
Vue.prototype.$axios = axios    // 新增

Vue.config.productionTip = false;
Vue.use(DialogFrom);
Vue.use(Link);
Vue.use(Pagination);
Vue.use(UserManage);
Vue.use(AreaManage);
Vue.use(RoomManage);
Vue.use(Carousel);
Vue.use(BackTop);
Vue.use(Card);
Vue.use(AreaSelect);
Vue.use(Carousel_Card);
Vue.use(DateSelect);
Vue.use(NavHeader);
Vue.use(TableMsg);
Vue.use(MyMsg);
Vue.use(Mock);

new Vue({
  Element,
  router,
  store,
  render: h => h(App),
}).$mount('#app')