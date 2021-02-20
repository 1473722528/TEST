import HotelComponents from './Hotel.vue'



const Hotel = {
    install: function (Vue) {
        Vue.component('Hotel', HotelComponents)
    }
}

export default Hotel;