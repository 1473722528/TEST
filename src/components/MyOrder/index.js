import MyOrderComponents from './MyOrder.vue'



const MyOrder= {
    install: function (Vue) {
        Vue.component('MyOrder',MyOrderComponents)
    }
}

export default MyOrder;