import AddRoomComponents from './AddRoom.vue'



const AddRoom= {
    install: function (Vue) {
        Vue.component('NavHeader', AddRoomComponents)
    }
}

export default AddRoom;