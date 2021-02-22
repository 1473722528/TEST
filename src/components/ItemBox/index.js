import ItemBoxComponents from './ItemBox.vue'



const ItemBox = {
    install: function (Vue) {
        Vue.component('ItemBox', ItemBoxComponents)
    }
}

export default ItemBox;