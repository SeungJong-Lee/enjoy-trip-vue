<template>
  <div>
    <div class="table-wrapper" style="text-align: center">
      <table class="custom-table">
        <thead>
          <tr>
            <th>둘레길</th>
            <th>루트</th>
            <th>예상시간</th>
            <th>총 길이</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(trail, index) in trails"
            :key="index"
            @click="openModal(trail)"
          >
            <td>{{ trail.title }}</td>
            <td>{{ trail.route }}</td>
            <td>{{ trail.estimated_time }}</td>
            <td>{{ trail.total_length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <!-- 모달 내용 -->
        <div class="box">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <div>예상 소요시간 : {{ post.estimated_time }}</div>
          <div>시작 지점 : {{ post.start_name }}</div>
          <div>끝 지점 : {{ post.end_name }}</div>
          <div>총 길이 : {{ post.total_length }}</div>
          <br />
          <div>이동 경로 : {{ post.route }}</div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeModal"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const trailStore = 'trailStore';
export default {
  name: 'TrailList',
  components: {},
  data() {
    return {
      message: '',
      showModal: false,
      post: {
        title: '',
        description: '',
        estimated_time: '',
        start_name: '',
        end_name: '',
        route: '',
        total_length: '',
      },
    };
  },
  computed: {
    ...mapState(trailStore, ['trails']),
  },
  created() {
    this.$store.commit('trailStore/CLEAR_TRAIL_LIST');
  },

  methods: {
    openModal(item) {
      this.post = {
        title: item.title,
        description: item.description,
        estimated_time: item.estimated_time,
        start_name: item.start_name,
        end_name: item.end_name,
        route: item.route,
        total_length: item.total_length,
      };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal-content {
  background-color: white;
  max-width: 600px;
  width: 90%;
  border-radius: 8px;
  padding: 20px;
}

.box {
  margin-bottom: 20px;
}

.modal-close {
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.modal-close i {
  color: #333;
  font-size: 20px;
}
</style>
