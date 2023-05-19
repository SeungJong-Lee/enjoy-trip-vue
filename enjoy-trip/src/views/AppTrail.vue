<template>
  <div>
    <div><h1>Hello Trail</h1></div>
    <b-row>
      <b-col cols="5">
        <trail-search></trail-search>
        <trail-list></trail-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailSearch from "@/components/trail/TrailSearch.vue";
import TrailList from "@/components/trail/TrailList.vue";
export default {
  name: "AppTrail",
  components: {
    TrailSearch,
    TrailList,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
