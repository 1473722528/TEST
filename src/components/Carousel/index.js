import CarouselComponents from './Carousel.vue'



const Carousel = {
    install: function (Vue) {
        Vue.component('Carousel', CarouselComponents)
    }
}

export default Carousel;