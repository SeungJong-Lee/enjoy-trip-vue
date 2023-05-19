<template>
  <div>
    <b-row>
      <b-col cols="5">
        <trail-search class="search"></trail-search>
        <trail-list class="traillist"></trail-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailSearch from '@/components/trail/TrailSearch.vue';
import TrailList from '@/components/trail/TrailList.vue';
export default {
  name: 'AppTrail',
  components: {
    TrailSearch,
    TrailList,
  },
  data() {
    return {
      message: '',
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.search {
  margin-left: 5px;
}

.traillist {
  margin-left: 15px;
}
</style>
