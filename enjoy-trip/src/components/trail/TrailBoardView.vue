<template>
  <div class="post-details" v-if="board != null">
    <h2 class="post-title">{{ board.trail_board_title }}</h2>
    <p class="post-info">
      작성자: {{ board.user_id }}, 작성일: {{ board.trail_board_create_time }}
    </p>
    <div class="post-content">{{ board.trail_board_content }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const trailStore = 'trailStore';
export default {
  name: 'TrailBoardView',
  components: {},
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapState(trailStore, ['board']),
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
