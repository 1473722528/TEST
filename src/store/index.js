import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//const state={
//  userId:null,
//  userName:null
//}

//const mutations= {
//  addCount:function(state,num){
//   return state.count+=num;
//  },
//  reduceCount:function(state,num){
//   return state.count-=num;
//  },
//}
//

const actions={
  changeParentTxt({commit},data){
     commit('changeParentMsg',data);
  }
}

export default new Vuex.Store({
  state: {
    userId: JSON.parse(sessionStorage.getItem("MyData")).userId,
    userName: JSON.parse(sessionStorage.getItem("MyData")).userName,
    userAge: JSON.parse(sessionStorage.getItem("MyData")).userAge,
    userPhone: JSON.parse(sessionStorage.getItem("MyData")).userPhone,
    userEmail: JSON.parse(sessionStorage.getItem("MyData")).userEmail,
    userIdCard: JSON.parse(sessionStorage.getItem("MyData")).userIdCard,
    userRole: JSON.parse(sessionStorage.getItem("MyData")).userRole ,
    //phone: sessionStorage.getItem("UserData",JSON.stringify(this.U))     获取数据
  },
  mutations: {
    setUsername(state, username){               //全局数据使用this.$store.state.username获取
      state.username = username;
    } 
  },
  actions,
  modules: {
  }
})
