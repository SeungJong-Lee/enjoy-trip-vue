<template>
  <div>
    <div>글쓰기</div>
    <div>{{ trail.title }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
const trailStore = 'trailStore';
export default {
  name: 'TrailBoardWrite',
  components: {},
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapState(trailStore, ['trail']),
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
