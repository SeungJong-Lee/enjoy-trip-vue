import { trailList, trailBoardList } from '@/api/trail';

const trailStore = {
  namespaced: true,
  state: {
    trails: [],
    trail: null,
    boards: [],
    board: null,
  },
  getters: {},
  mutations: {
    CLEAR_TRAIL_LIST(state) {
      state.trails = [];
      state.trail = null;
    },
    CLEAR_BOARD_LIST(state) {
      state.boards = [];
      state.board = null;
    },
    SET_TRAIL_LIST(state, trails) {
      state.trails = trails;
    },
    SET_DETAIL_TRAIL(state, trail) {
      state.trail = trail;
    },
    SET_BOARD_LIST(state, boards) {
      state.boards = boards;
    },
    SET_DETAIL_BOARD(state, board) {
      state.board = board;
    },
  },
  actions: {
    getTrailList: ({ commit }, params) => {
      trailList(
        params,
        ({ data }) => {
          commit('SET_TRAIL_LIST', data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getTrailBoardList: ({ commit }, params) => {
      trailBoardList(
        params,
        ({ data }) => {
          commit('SET_BOARD_LIST', data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setTrail: ({ commit }, params) => {
      commit('SET_DETAIL_TRAIL', params);
    },
  },
};

export default trailStore;
