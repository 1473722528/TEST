import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from './plugins/element.js'
import './assets/css/base.css'
import Carousel from './components/Carousel/index.js'
import Hotel from './components/Hotel/index.js'
import DateSelect from './components/DateSelect/index.js'
import store from './store/index.js'
import NavHeader from './components/NavHeader/index.js'
import AddArea from './components/AreaManage/AddArea/index.js'

Vue.config.productionTip = false;
Vue.use(Carousel);
Vue.use(Hotel);
Vue.use(DateSelect);
Vue.use(NavHeader);
Vue.use(AddArea);

new Vue({
  Element,
  router,
  store,
  render: h => h(App),
}).$mount('#app')