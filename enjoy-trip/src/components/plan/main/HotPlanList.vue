<template>
  <div>
    <div v-for="plan in planList" :key="plan.planId" class="plan-container">
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
  methods: {
    getHotPlanList() {
      httpJwt.get(`plan/view?pgno=${this.pgno}&order=recommend_count`)
          .then(({data}) => this.planList = data.data)
          .catch(({response}) => alert(response.data))
    }
  },
  created() {
    this.getHotPlanList();
  },
}
</script>

<style scoped>
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