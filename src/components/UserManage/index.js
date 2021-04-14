import UserManageComponents from './UserManage.vue'



const  UserManage= {
    install: function (Vue) {
        Vue.component('UserManage',UserManageComponents)
    }
}

export default  UserManage;