<template>
  <div>
    <b-row>
      <b-col cols="4">
        <TrailView class="view"></TrailView>
      </b-col>
      <b-col cols="6">
        <TrailBoardWriteItem
          class="write"
          v-if="isWritePage"
        ></TrailBoardWriteItem>
        <TrailBoardView class="write" v-else></TrailBoardView>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailView from './TrailView.vue';
import TrailBoardWriteItem from './TrailBoardWriteItem.vue';
import TrailBoardView from './TrailBoardView.vue';
import { mapState } from 'vuex';
const trailStore = 'trailStore';
export default {
  name: 'TrailBoardWrite',
  components: {
    TrailView,
    TrailBoardWriteItem,
    TrailBoardView,
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapState(trailStore, ['trail']),
    ...mapState(trailStore, ['isWritePage']),
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.view {
  margin-top: 16%;
  margin-bottom: 5%;
  margin-left: 10%;
}
.write {
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 20%;
}
</style>
