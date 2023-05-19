<template>
  <div>
    <b-row>
      <b-col cols="4">
        <TrailView class="view"></TrailView>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailView from './TrailView.vue';
import { mapState } from 'vuex';
const trailStore = 'trailStore';
export default {
  name: 'TrailBoardWrite',
  components: {
    TrailView,
  },
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

<style scoped>
.view {
  margin-top: 25%;
  margin-bottom: 25%;
  margin-left: 10%;
}
</style>
