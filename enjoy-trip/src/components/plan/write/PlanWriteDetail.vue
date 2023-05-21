<template>
  <div style="height: 80vh; border-right: 1px solid gainsboro">
    <div style="height: 40vh; border-bottom: 1px solid gainsboro">
      <div style="font-size: xx-large; height: 30%">
        <div v-if="planInfo">
          {{ planInfo.planTitle }}
        </div>
        <div v-else>
          {{ userId }}
          <br/>
          님의 계획
        </div>
      </div>
      <div style="height: 50%; align-items: center; padding-top: 2vh">
        <div style="height: 50%">
          <div>
            시작 날짜
          </div>
          <div style=" padding-left: 2vw; padding-right: 1vw">
            <b-form-datepicker v-model="startDate" class="mb-2"></b-form-datepicker>
          </div>
        </div>
        <div style="height: 50%">
          <div>
            도착 날짜
          </div>
          <div style=" padding-left: 2vw; padding-right: 1vw">
            <b-form-datepicker v-model="endDate" class="mb-2"></b-form-datepicker>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="submit-button">계획 만들기</button>
      </div>
    </div>
    <div class="scroll-container">
      <plan-attraction-list :attractions="selectedAttractions"
                            @place-click="(attraction) => deleteAttraction(attraction)"></plan-attraction-list>
    </div>
  </div>
</template>

<script>
import PlanAttractionList from "@/components/plan/PlanAttractionList";

export default {
  name: "PlanWriteDetail",
  components: {PlanAttractionList},
  props: ["planInfo"],
  data() {
    return {
      userId: "",
      startDate: "",
      endDate: "",
    }
  },
  created() {
    this.userId = sessionStorage.getItem("userId");
  },
  computed: {
    selectedAttractions() {
      return this.$store.getters.getSelectedAttractions;
    },
    selectedAttractionsSet() {
      return this.$store.getters.getSelectedAttractionsSet;
    }
  },
  methods: {
    deleteAttraction(attraction) {
      this.$store.commit("setSelectedAttractionsSet", attraction)
    }
  }
}
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  max-height: 40vh;
  padding-left: 1vw;
  padding-right: 1vw;
}

.submit-button {
  border: none;
  background-color: #a7dbe1;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  padding: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20%;
  padding-left: 2vw;
  padding-right: 1vw
}
</style>