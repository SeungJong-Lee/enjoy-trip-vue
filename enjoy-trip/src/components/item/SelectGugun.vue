<template>
  <b-col class="sm-3" style="padding: 0">
    <b-form-select v-model="gugunCode" :options="guguns" @change="changeGugun"></b-form-select>
  </b-col>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

/*
    namespaced: true를 사용했기 때문에 선언해줍니다.
    index.js 에서 modules 객체의 '키' 이름입니다.
  
    modules: {
      키: 값
      trailStore: trailStore
    }
  */
const itemStore = "itemStore";

export default {
  name: "SelectGugun",
  data() {
    return {
      gugunCode: 0,
    };
  },
  props: {
    sidoCode: Number,
  },
  watch: {
    sidoCode() {
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = 0;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
  },
  computed: {
    ...mapState(itemStore, ["guguns"]),
  },
  created() {},
  methods: {
    ...mapActions(itemStore, ["getGugun"]),
    ...mapMutations(itemStore, ["CLEAR_GUGUN_LIST"]),
    changeGugun() {
      this.$emit("select-gugun", this.gugunCode);
    },
  },
};
</script>

<style scoped></style>
