import NavHeaderComponents from './NavHeader.vue'



const NavHeader= {
    install: function (Vue) {
        Vue.component('NavHeader', NavHeaderComponents)
    }
}

export default NavHeader;