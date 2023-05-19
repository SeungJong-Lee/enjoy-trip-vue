import { trailList } from "@/api/trail";

const trailStore = {
  namespaced: true,
  state: {
    trails: [],
    trail: null,
  },
  getters: {},
  mutations: {
    CLEAR_TRAIL_LIST(state) {
      state.trails = [];
      state.trail = null;
    },
    SET_TRAIL_LIST(state, trails) {
      state.trails = trails;
    },
    SET_DETAIL_TRAIL(state, trail) {
      state.trail = trail;
    },
  },
  actions: {
    getTrailList: ({ commit }, params) => {
      trailList(
        params,
        ({ data }) => {
          commit("SET_TRAIL_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default trailStore;
