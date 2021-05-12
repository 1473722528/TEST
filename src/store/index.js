import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  userId:'',
  userName: '',
  userAge:'',
  userPhone: '',
  userEmail: '',
  userIdCard: '',
  userRole: '' ,
}

const mutations= {
  updateUser:function(state,data){
    state.userId=data.userId;
    state.userName=data.userName;
    state.userAge=data.userAge;
    state.userPhone=data.userPhone;
    state.userEmail=data.userEmail;
    state.userIdCard=data.userIdCard;
    state.userRole=data.userRole;
    console.log(state.userName);
  }
}

const getters={
  getUserRole: (state) => {
		return state.userRole;
	}
}

const actions={
  //upDate:function(context){
  //    context.commit('updateUser');
  //}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
