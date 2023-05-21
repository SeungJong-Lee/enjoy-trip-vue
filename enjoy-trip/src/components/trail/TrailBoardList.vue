<template>
  <div>
    <div class="board-title">
      <h2>같이 둘레길 가요!</h2>
    </div>
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
          <tr
            v-for="(board, index) in slicedBoards"
            :key="index"
            @click="handleRowClick(board)"
          >
            <td>{{ board.trail_board_no }}</td>
            <td>{{ board.trail_board_title }}</td>
            <td>{{ board.user_id }}</td>
            <td>{{ board.trail_board_create_time }}</td>
            <td>
              {{ board.trail_board_member_count }} /
              {{ board.trail_board_max_member }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="goToPage(currentPage - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ active: currentPage === pageNumber }"
        >
          <a class="page-link" href="#" @click="goToPage(pageNumber)">{{
            pageNumber
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="goToPage(currentPage + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const trailStore = 'trailStore';

export default {
  name: 'TrailBoardList',
  components: {},
  data() {
    return {
      key: '',
      word: '',
      pageSize: 10, // 한 페이지에 표시할 항목 수
      currentPage: 1, // 현재 페이지 번호
      loginUser: sessionStorage.getItem('userId'),
    };
  },
  computed: {
    ...mapState(trailStore, ['boards']),
    ...mapState(trailStore, ['members']),
    totalPages() {
      return Math.ceil(this.boards.length / this.pageSize); // 전체 페이지 수 계산
    },
    slicedBoards() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.boards.slice(startIndex, endIndex);
    },
  },
  created() {
    this.getTrailBoardList({
      key: this.key,
      word: this.word,
    });
  },
  methods: {
    ...mapActions(trailStore, ['getTrailBoardList']),
    ...mapActions(trailStore, ['setBoard']),
    ...mapActions(trailStore, ['setJoinMember']),
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    async handleRowClick(board) {
      console.log(board.trail_board_no + '출력하자');
      // console.log('Clicked row:', board);
      await this.setJoinMember({
        no: board.trail_board_no,
      });
      console.log(this.members);
      this.setBoard(board);
      setTimeout(() => {
        this.$router.push('/trailboardview');
      }, 100);
    },
  },
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

.board-title {
  margin-top: 37px;
  margin-bottom: 20px;
  text-align: center;
}

.board-title h2 {
  font-size: 24px;
  font-weight: bold;
}
</style>
