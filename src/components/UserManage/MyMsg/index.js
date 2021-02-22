import MyMsgComponents from './MyMsg.vue'

const MyMsg= {
    install: function (Vue) {
        Vue.component('MyMsg', MyMsgComponents)
    }
}

export default MyMsg;