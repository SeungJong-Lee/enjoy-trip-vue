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
    detailTrail: ({ commit }, trail_id) => {
      //   나중에 trail_id를 사용하여 API호출
      commit("SET_DETAIL_TRAIL", trail_id);
    },
  },
};

export default trailStore;
