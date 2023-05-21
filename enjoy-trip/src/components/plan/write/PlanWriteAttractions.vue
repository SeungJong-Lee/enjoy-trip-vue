<template>
  <div style="height: 80vh; border-left: 1px solid gainsboro">
    <div style="padding: 1vh; height: 20vh">
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
import httpJwt from "@/api/httpJwt";
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
      httpJwt(`attraction/${this.sidoCode}/${this.gugunCode}/${this.contentTypeId}`)
          .then(({data}) => this.attractions = data);
    },
  },
}
</script>

<style scoped>
.rec-button {
  border: none;
  background-color: #a7dbe1;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  padding: 10px;
}

.button-container {
  border-radius: 5px;
  width: calc(100% - 30px);
  position: absolute;
  margin-top: 10px;
  margin-bottom: 10px;
  bottom: 0;
}

.scroll-container {
  overflow-y: auto;
  max-height: 60vh;
  padding-left: 1vw;
  padding-right: 1vw
}

.centered-text {
  margin-top: 100%;
  margin-bottom: auto;
}


.place-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 10vh;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.fixed-image {
  width: 100%;
  height: 100%;
}

.image-container {
  height: 100%;
  aspect-ratio: 1/1;
}

.place-container:hover {
  transform: scale(1.05);
}

.description-container {
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}

.title-container {
  flex: 1;
  font-weight: bold;
  font-size: larger;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.addr-container {
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>