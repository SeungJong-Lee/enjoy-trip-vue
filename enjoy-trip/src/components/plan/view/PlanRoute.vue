<template>
  <div>
    <div v-for="(plan, index) in planAttractions" :key="index">
      {{ plan.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlanRoute",
  components: {},
  data() {
    return {
      message: "",
      routes: [],
    };
  },
  computed: {
    ...mapState(["planAttractions"]),
  },
  created() {},
  watch: {},
  methods: {
    setRoute() {
      console.log(this.planAttractions[0].title);
    },
  },
};
</script>

<style scoped></style>
