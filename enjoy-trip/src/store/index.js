import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  getters: {
     isLoggedIn(state){
       return state.isLoggedIn;
     }
  },
  mutations: {
    setLoggedIn(state, value){
      state.isLoggedIn = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
