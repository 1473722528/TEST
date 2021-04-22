import OrderFormComponents from './OrderForm.vue'



const  OrderForm= {
    install: function (Vue) {
        Vue.component('OrderForm',OrderFormComponents)
    }
}

export default  OrderForm;