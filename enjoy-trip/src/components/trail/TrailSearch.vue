<template>
  <b-row class="mt-4 mb-4 text-center">
    <select-sido @select-sido="selectSido"></select-sido>
    <select-gugun :sidoCode="sidoCode" @select-gugun="selectGugun"></select-gugun>
  </b-row>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import SelectSido from "@/components/item/SelectSido.vue";
import SelectGugun from "@/components/item/SelectGugun.vue";

const itemStore = "itemStore";
const trailStore = "trailStore";

export default {
  name: "TrailSearch",
  components: {
    SelectSido,
    SelectGugun,
  },
  data() {
    return {
      message: "",
      sidoCode: null,
    };
  },
  created() {},
  methods: {
    ...mapActions(trailStore, ["getTrailList"]),
    ...mapActions(itemStore, ["getGugun"]),
    ...mapMutations(itemStore, ["CLEAR_GUGUN_LIST"]),
    selectSido(sidoCode) {
      this.sidoCode = sidoCode;
    },
    selectGugun(gugunCode) {
      console.log(`시도=${this.sidoCode}:::구군=${gugunCode}`);
      console.log(gugunCode);
      if (gugunCode)
        this.getTrailList({
          sido: this.sidoCode,
          gugun: gugunCode,
        });
    },
  },
};
</script>

<style scoped></style>
