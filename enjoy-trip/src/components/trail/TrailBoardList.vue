<template>
  <div>
    <div class="table-wrapper" style="text-align: center">
      <table class="custom-table">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성시간</th>
            <th>모집인원</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(board, index) in boards" :key="index">
            <td>{{ board.trail_board_no }}</td>
            <td>{{ board.trail_board_title }}</td>
            <td>{{ board.user_id }}</td>
            <td>{{ board.trail_board_create_time }}</td>
            <td>
              {{ board.trail_party_member_id }} /
              {{ board.trail_board_max_member }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { trailBoardList } from '@/api/trail';
// import { mapState } from 'vuex';
import http from '@/api/http';

// const trailStore = 'trailStore';

export default {
  name: 'TrailBoardList',
  components: {},
  data() {
    return {
      message: '',
      key: '',
      word: '',
      boards: [],
    };
  },
  computed: {
    // ...mapState(trailStore, ['boards']),
  },
  created() {
    // trailBoardList({
    //   key: this.key,
    //   word: this.word,
    // });
    http
      .get(`/trail/board?key=${this.key}&word=${this.word}`)
      .then(({ data }) => {
        this.boards = data;
        console.log(this.boards);
      });
  },
  methods: {},
};
</script>

<style scoped>
.table-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.custom-table th,
.custom-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.custom-table th {
  background-color: #f7f7f7;
  font-weight: bold;
}

.custom-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
