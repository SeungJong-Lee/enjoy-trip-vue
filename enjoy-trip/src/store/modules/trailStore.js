import {
  trailList,
  trailBoardList,
  getTrailBoardLatest,
  getJoinMember,
} from '@/api/trail';

const trailStore = {
  namespaced: true,
  state: {
    trails: [],
    trail: null,
    boards: [],
    board: null,
    isWritePage: true,
    members: [],
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
      console.log('초기화');
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
    CHANGE_WRITE_PAGE(state) {
      state.isWritePage = !state.isWritePage;
      console.log(state.isWritePage);
    },
    SET_ISWRITE_TRUE(state) {
      state.isWritePage = true;
      console.log(state.isWritePage);
    },
    SET_JOIN_MEMBER(state, member) {
      state.members = member;
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
    setBoard: ({ commit }, params) => {
      commit('SET_DETAIL_BOARD', params);
    },
    setBoardLatest: ({ commit }) => {
      getTrailBoardLatest(
        ({ data }) => {
          console.log(data);
          commit('SET_DETAIL_BOARD', data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setJoinMember: ({ commit }, params) => {
      console.log('새로운 멤버 찾아오자' + params.no);
      getJoinMember(
        params,
        ({ data }) => {
          setTimeout(() => {
            console.log(data + 'asdasdasdasda');
            commit('SET_JOIN_MEMBER', data);
          }, 1000); // 1초(1000ms) 후에 실행
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default trailStore;
