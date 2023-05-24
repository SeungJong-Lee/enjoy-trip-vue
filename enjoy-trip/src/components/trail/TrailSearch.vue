<template>
  <div>
    <b-row style="margin-top: 83px; margin-left: 7px; display: flex; justify-content: center">
      <div class="custom-select-container">
        <select-sido @select-sido="selectSido"></select-sido>
      </div>
      <div class="custom-select-container">
        <select-gugun :sidoCode="sidoCode" @select-gugun="selectGugun"></select-gugun>
      </div>
    </b-row>
  </div>
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

<style scoped>
.custom-select-container {
  width: 300px; /* 원하는 너비로 수정 */
  margin-right: 10px; /* 원하는 여백으로 수정 */
  margin-bottom: 10px;
}
</style>
