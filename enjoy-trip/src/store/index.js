import Vue from "vue";
import Vuex from "vuex";

import itemStore from "./modules/item/itemStore";
import trailStore from "./modules/trailStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemStore,
    trailStore,
  },
  state: {
    isLoggedIn: false,
    planInfo:{},
    planAttractions:[],
    planAttraction:{},
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    getPlanInfo(state) {
      return state.planInfo;
    },
    getPlanAttractions(state) {
      return state.planAttractions;
    },
    getPlanAttraction(state){
      return state.planAttraction;
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setPlanInfo(state, value) {
      state.planInfo = value;
    },
    setPlanAttracions(state, value){
      state.planAttractions = value;
    },
    setPlanAttraction(state, value){
      state.planAttraction = value;
    }
  },
  actions: {},
});
