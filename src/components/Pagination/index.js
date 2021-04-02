import PaginationComponents from './Pagination.vue'



const Pagination= {
    install: function (Vue) {
        Vue.component('Pagination', PaginationComponents)
    }
}

export default Pagination;