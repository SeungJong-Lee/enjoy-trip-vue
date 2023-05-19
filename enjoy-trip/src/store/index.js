import Vue from "vue";
import Vuex from "vuex";

import itemStore from "./modules/item/itemStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemStore,
  },
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {},
});
