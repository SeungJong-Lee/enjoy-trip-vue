<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="trails" :fields="fields" @row-clicked="openModal()">
        </b-table>
      </b-col>
    </b-row>
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <!-- 모달 내용 -->
        <div class="box">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const trailStore = "trailStore";
export default {
  name: "TrailList",
  components: {},
  data() {
    return {
      message: "",
      showModal: false,
      fields: [
        { key: "title", label: "둘레길", tdClass: "tdClass" },
        { key: "route", label: "루트", tdClass: "tdSubject" },
        { key: "estimated_time", label: "예상시간", tdClass: "tdClass" },
        { key: "total_length", label: "총 길이", tdClass: "tdClass" },
      ],
      post: {
        title: "게시글 제목",
        content: "게시글 내용",
      },
    };
  },
  computed: {
    ...mapState(trailStore, ["trails"]),
  },
  created() {
    this.$store.commit("trailStore/CLEAR_TRAIL_LIST");
  },

  methods: {
    viewArticle(article) {
      console.log(article);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  top: 50%; /* 모달 창을 화면의 중앙으로 위치시킵니다. */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* 모달 창의 너비를 설정합니다. 필요에 따라 조절하세요. */
  max-height: 80vh; /* 모달 창의 최대 높이를 설정합니다. 필요에 따라 조절하세요. */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.box {
  margin-bottom: 20px;
}
</style>
