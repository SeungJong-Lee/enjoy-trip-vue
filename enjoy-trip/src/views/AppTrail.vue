<template>
  <div>
    <b-row>
      <b-col cols="5" class="left-area">
        <trail-search class="search"></trail-search>
        <trail-list class="traillist"></trail-list>
      </b-col>
      <b-col cols="6">
        <trail-board-list></trail-board-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailSearch from '@/components/trail/TrailSearch.vue';
import TrailList from '@/components/trail/TrailList.vue';
import TrailBoardList from '@/components/trail/TrailBoardList.vue';

import { mapMutations } from 'vuex';

export default {
  name: 'AppTrail',
  components: {
    TrailSearch,
    TrailList,
    TrailBoardList,
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {},
  created() {
    this.SET_ISWRITE_TRUE();
  },
  methods: {
    ...mapMutations('trailStore', ['SET_ISWRITE_TRUE']),
  },
};
</script>

<style scoped>
.search {
  margin-left: 5px;
}

.traillist {
  margin-left: 15px;
}
.left-area {
  margin-left: 70px;
}
</style>
