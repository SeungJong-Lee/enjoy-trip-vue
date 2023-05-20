<template>
  <div>
    <div style="position: relative; height: 80vh">
      <div class="scroll-container">
        <div v-for="plan in planList" :key="plan.planId" class="plan-container" @click="planClickListener(plan.planId)">
          <div class="title-container">
            {{ plan.planTitle }}
          </div>
          <div class="description-container">
            <div class="user-info">
              만든이: {{ plan.userId }}
            </div>
            <div class="recommend-count">
              추천수: {{ plan.recommendCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button class="toggle-button">
        나의 계획 보기
      </button>
    </div>
  </div>
</template>

<script>
import httpJwt from "@/api/httpJwt";

export default {
  name: "HotPlanList",
  data() {
    return {
      pgno: 1,
      planList: [],
    }
  },
  created() {
    this.getHotPlanList();
  },
  methods: {
    getHotPlanList() {
      httpJwt.get(`plan/view?pgno=${this.pgno}&order=recommend_count`)
          .then(({data}) => this.planList = data.data)
          .catch(({response}) => alert(response.data))
    },
    planClickListener(planId) {
      httpJwt.get(`plan/${planId}`)
          .then(({data}) => this.setSelectedPlanState(data.data))
          .catch(({response}) => alert(response.data));
    },
    setSelectedPlanState(data) {
      this.$store.commit("setPlanInfo", data.planInfo)
      this.$store.commit("setPlanAttracions", data.attractionList);
    }
  }
}
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  max-height: calc(80vh - 50px);
}

.toggle-button {
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

.plan-container {
  display: flex;
  flex-direction: column;
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

.plan-container:hover {
  transform: scale(1.05);
}


.description-container {
  display: flex;
  flex: 1;
  color: darkgray;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.title-container {
  font-weight: bold;
  font-size: x-large;
}

.user-info {
  font-size: large;
  color: gray;
  margin-top: auto;
  margin-bottom: 0;
}

.recommend-count {
  font-size: large;
  color: gray;
  margin-top: auto;
  margin-bottom: 0;
}
</style>