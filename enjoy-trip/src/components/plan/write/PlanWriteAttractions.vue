<template>
  <div style="height: 80vh; border-left: 1px solid gainsboro">
    <div style="padding: 1vh; height: 20vh; border-bottom: 1px solid gainsboro">
      <select-sido @select-sido="selectSido" style="margin-bottom: 1vh"></select-sido>
      <select-gugun :sidoCode="sidoCode" @select-gugun="selectGugun" style="margin-bottom: 1vh"></select-gugun>
      <select-content-type @select-content-type="selectContentType"></select-content-type>
    </div>
    <div class="scroll-container" >
      <plan-attraction-list :attractions="attractions" @place-click="(attraction) => addAttraction(attraction)">
      </plan-attraction-list>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import SelectSido from "@/components/item/SelectSido.vue";
import SelectGugun from "@/components/item/SelectGugun.vue";
import {axiosBuilderWithJwt} from "@/api/httpJwt";
import SelectContentType from "@/components/item/SelectContentType";
import PlanAttractionList from "@/components/plan/PlanAttractionList";

const itemStore = "itemStore";
export default {
  name: "PlanWriteAttractions",
  components: {
    PlanAttractionList,
    SelectContentType,
    SelectSido,
    SelectGugun,
  },
  data() {
    return {
      message: "",
      sidoCode: 0,
      gugunCode: 0,
      contentTypeId: 0,
      attractions: [],
    };
  },
  methods: {
    addAttraction(attraction) {
      this.$store.commit("setSelectedAttractionsSet", attraction);
    },
    ...mapActions(itemStore, ["getGugun"]),
    ...mapMutations(itemStore, ["CLEAR_GUGUN_LIST"]),
    selectSido(sidoCode) {
      this.sidoCode = sidoCode;
      this.getAttractions()
    },
    selectGugun(gugunCode) {
      this.gugunCode = gugunCode;
      this.getAttractions()
    },
    selectContentType(contentTypeId) {
      this.contentTypeId = contentTypeId;
      this.getAttractions()
    },
    getAttractions() {
      axiosBuilderWithJwt().get(`attraction/${this.sidoCode}/${this.gugunCode}/${this.contentTypeId}`)
          .then(({data}) => this.attractions = data);
    },
  },
}
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  max-height: 60vh;
  padding-left: 1vw;
  padding-right: 1vw;
}

</style>