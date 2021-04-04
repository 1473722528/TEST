import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from './plugins/element.js'
import './assets/css/base.css'
import Carousel_Card from './components/Carousel_Card/index.js'
import DateSelect from './components/DateSelect/index.js'
import store from './store/index.js'
import NavHeader from './components/NavHeader/index.js'
import AddArea from './components/Area/AddArea/index.js'
import TableMsg from './components/TableMsg/index.js'
import MyMsg from './components/UserManage/MyMsg/index.js'
import Mock from './mock/mock.js'
import AreaSelect from './components/Area/AreaSelect/index.js'
import Card from './components/Card/index.js'
import BackTop from './components/BackTop/index.js'
import Carousel from './components/Carousel/index.js'
import AreaManage from './components/Area/AreaManage/index.js'
import Pagination from './components/Pagination/index.js'
import Link from './components/Link/index.js'
import DialogFrom from './components/DialogFrom/index.js'

import axios from 'axios'             // 新增
Vue.prototype.$axios = axios    // 新增

Vue.config.productionTip = false;
Vue.use(DialogFrom);
Vue.use(Link);
Vue.use(Pagination);
Vue.use(AreaManage);
Vue.use(Carousel);
Vue.use(BackTop);
Vue.use(Card);
Vue.use(AreaSelect);
Vue.use(Carousel_Card);
Vue.use(DateSelect);
Vue.use(NavHeader);
Vue.use(AddArea);
Vue.use(TableMsg);
Vue.use(MyMsg);
Vue.use(Mock);

new Vue({
  Element,
  router,
  store,
  render: h => h(App),
}).$mount('#app')