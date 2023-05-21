<template>
  <div class="post-details" v-if="board != null">
    <h2 class="post-title">{{ board.trail_board_title }}</h2>
    <div class="post-content-wrapper">
      <div class="post-content">
        <p class="post-info">작성자: {{ board.user_id }}</p>
        <p class="post-info">글번호: {{ board.trail_board_no }}</p>
        <p class="post-info">
          여행시작일: {{ board.trail_board_start_time | formatDate }}
        </p>
        <p class="post-info">
          여행종료일: {{ board.trail_board_end_time | formatDate }}
        </p>
        <p class="post-info">
          모집인원: {{ members.length }} /
          {{ board.trail_board_max_member }}
        </p>
        <p class="post-info">
          작성일: {{ board.trail_board_create_time | formatDate }}
        </p>
      </div>
      <div v-if="members != null">
        <span>함께하는사람 : </span>
        <span v-for="(member, index) in members" :key="index">
          {{ member.trail_party_member_id }}
        </span>
      </div>
    </div>
    <div class="post-content-wrapper">
      <div class="post-content">{{ board.trail_board_content }}</div>
    </div>
    <div class="button-group">
      <button
        v-if="
          !joinmembers.includes(loninUser) &&
          joinCount < board.trail_board_max_member &&
          joinCount > 0
        "
        class="btn btn-custom btn-join"
        @click="joinTrip"
      >
        여행 참여하기
      </button>
      <span v-if="loninUser == board.user_id">
        <button class="btn btn-custom btn-edit" @click="editPost">수정</button>
        <button class="btn btn-custom btn-delete" @click="deletePost">
          삭제
        </button>
      </span>
      <button class="btn btn-custom btn-mvlist" @click="mvList">목록</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import http from '@/api/http';

const trailStore = 'trailStore';
export default {
  name: 'TrailBoardView',
  components: {},
  data() {
    return {
      message: '',
      loninUser: sessionStorage.getItem('userId'),
      joinmembers: [],
      joinCount: 0,
    };
  },
  filters: {
    formatDate(value) {
      const date = new Date(value);
      return date.toLocaleDateString();
    },
  },
  computed: {
    ...mapState(trailStore, ['board']),
    ...mapState(trailStore, ['members']),
  },
  created() {
    // this.setJoinMember({
    //   no: this.board.trail_board_no,
    // });
    for (let i = 0; i < this.members.length; i++) {
      this.joinmembers.push(this.members[i].trail_party_member_id);
    }
    this.joinCount = this.members.length;
  },
  methods: {
    ...mapActions(trailStore, ['setJoinMember']),
    async joinTrip() {
      try {
        await http.post(`/trail/board/joinparty`, {
          trail_board_no: this.board.trail_board_no,
          user_id: this.loninUser,
        });

        await this.setJoinMember({
          no: this.board.trail_board_no,
        });

        setTimeout(() => {
          this.joinmembers = [];
          this.joinCount++;
          for (let i = 0; i < this.members.length; i++) {
            this.joinmembers.push(this.members[i].trail_party_member_id);
          }
        }, 100);
      } catch (error) {
        console.log(error);
      }
    },

    editPost() {
      this.$router.push('/trailboardwriteitem');
    },
    deletePost() {
      http
        .delete(`/trail/board/delete/${this.board.trail_board_no}`)
        .then(() => {
          this.$router.push('/trail');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    mvList() {
      this.$router.push('/trail');
    },
  },
};
</script>

<style scoped>
.post-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f7fb;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 5%;
  margin-bottom: 20%;
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(45, 158, 228, 0.3);
}

.post-info {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

.post-content-wrapper {
  max-height: 300px; /* 스크롤 최대 높이 */
  overflow-y: auto; /* 세로 스크롤 적용 */
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  padding-top: 10px;
  margin-top: 10px;
}

.post-content p {
  margin-bottom: 10px;
}

.post-content a {
  color: #367ad3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-content a:hover {
  color: #2b5ea4;
}

.post-content img {
  max-width: 100%;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.btn-custom {
  background-color: transparent;
  border: 2px solid #a7d8f5;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 1%;
}

/* .btn-join {
  color: #f9ca32;
}

.btn-edit {
  color: #3ac569;
}

.btn-delete {
  color: #e53935;
}

.btn-mvlist {
  color: plum;
} */

.btn-custom:hover {
  background-color: #a7d8f5;
}

.btn-custom:hover .btn-join {
  color: #fff;
}
.button-group {
  text-align: right;
}
</style>
