import CardComponents from './Card.vue'

const Card = {
    install: function (Vue) {
        Vue.component('Card', CardComponents)
    }
}

export default Card;