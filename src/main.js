import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from './plugins/element.js'
import './assets/css/base.css'
import Carousel_Card from './components/Carousel_Card/index.js'
import ItemBox from './components/ItemBox/index.js'
import DateSelect from './components/DateSelect/index.js'
import store from './store/index.js'
import NavHeader from './components/NavHeader/index.js'
import AddArea from './components/AreaManage/AddArea/index.js'
import TableMsg from './components/TableMsg/index.js'
import MyMsg from './components/UserManage/MyMsg/index.js'
import Mock from './mock/mock.js'
import AreaSelect from './components/AreaManage/AreaSelect/index.js'

import axios from 'axios'             // 新增
Vue.prototype.$axios = axios    // 新增

Vue.config.productionTip = false;
Vue.use(AreaSelect);
Vue.use(Carousel_Card);
Vue.use(ItemBox);
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