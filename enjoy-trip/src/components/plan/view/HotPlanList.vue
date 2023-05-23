<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: column;
        padding: 1vh;
        height: 25vh;
        border-bottom: 1px solid gainsboro;
      "
    >
      <div style="flex: 1">
        <button v-if="isMyPlan" class="toggle-button">인기 계획 보기</button>
        <button v-else class="toggle-button">내 계획 보기</button>
      </div>
      <div style="flex: 1; display: flex; justify-content: space-between">
        <div
          style="
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          검색 조건
        </div>
        <div
          style="
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <select>
            <option>계획 이름</option>
            <option>작성자</option>
          </select>
        </div>
      </div>
      <div style="flex: 1; display: flex; justify-content: space-between">
        <input v-model="searchWord" placeholder="여행지 검색" style="width: calc(100% - 5vh)" />
        <button @click="getPlan" style="border: 0; background-color: rgba(0, 0, 0, 0)">
          <img
            style="height: 4vh"
            src="https://github.com/qkdk/enjoy-trip/assets/86948395/a60c5653-f4bf-41c5-ae4b-7a95cdd33afe"
          />
        </button>
      </div>
    </div>
    <div class="scroll-container">
      <div
        v-for="plan in planList"
        :key="plan.planId"
        class="plan-container"
        @click="planClickListener(plan.planId)"
      >
        <div class="title-container">
          {{ plan.planTitle }}
        </div>
        <div class="description-container">
          <div class="user-info">만든이: {{ plan.userId }}</div>
          <div class="recommend-count">추천수: {{ plan.recommendCount }}</div>
        </div>
      </div>
    </div>
    <div
      style="
        height: 10vh;
        padding: 1vh;
        border-top: 1px solid gainsboro;
        display: flex;
        justify-content: center;
        flex-direction: column;
      "
    >
      <button v-if="isMyPlan" class="submit-button">계획 삭제하기</button>
      <button v-else class="submit-button">내 계획으로 가져오기</button>
    </div>
  </div>
</template>

<script>
import { axiosBuilderWithJwt } from "@/api/http";

export default {
  name: "HotPlanList",
  data() {
    return {
      pgno: 1,
      planList: [],
      isMyPlan: false,
      searchWord: "",
    };
  },
  created() {
    this.getHotPlanList();
  },
  methods: {
    getPlan() {
      console.log("getPlanMethodCall");
    },
    getHotPlanList() {
      axiosBuilderWithJwt()
        .get(`plan/view?pgno=${this.pgno}&order=recommend_count`)
        .then(({ data }) => (this.planList = data.data))
        .catch(({ response }) => alert(response.data));
    },
    planClickListener(planId) {
      axiosBuilderWithJwt()
        .get(`plan/${planId}`)
        .then(({ data }) => this.setSelectedPlanState(data.data))
        .catch(({ response }) => alert(response.data));
    },
    setSelectedPlanState(data) {
      this.$store.commit("setPlanInfo", data.planInfo);
      this.$store.commit("setPlanAttracions", data.attractionList);
    },
  },
};
</script>

<style scoped>
.toggle-button {
  border: none;
  background-color: #a7dbe1;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  padding: 10px;
}

.submit-button {
  border: none;
  background-color: lightcoral;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  padding: 10px;
}

.scroll-container {
  overflow-y: auto;
  height: 55vh;
  padding-left: 1vw;
  padding-right: 1vh;
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
