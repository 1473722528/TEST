import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'ABC',
    userrole: '管理员',
    //phone: sessionStorage.getItem("UserData",JSON.stringify(this.U))     获取数据
  },
  mutations: {
    setUsername(state, username){               //全局数据使用this.$store.state.username获取
      state.username = username;
    } 
  },
  actions: {
  },
  modules: {
  }
})
