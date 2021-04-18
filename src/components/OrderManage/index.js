import OrderManageComponents from './OrderManage.vue'



const OrderManage= {
    install: function (Vue) {
        Vue.component('OrderManage', OrderManageComponents)
    }
}

export default OrderManage;