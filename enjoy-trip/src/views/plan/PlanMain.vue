<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <main-map></main-map>
        </b-col>
        <b-col cols="3" style="border-right: 1px solid gainsboro">
          <plan-detail></plan-detail>
        </b-col>
        <b-col cols="3">
          <HotPlanList></HotPlanList>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainMap from "@/components/plan/main/MainMap";
import PlanDetail from "@/components/plan/main/PlanDetail";
import HotPlanList from "@/components/plan/main/HotPlanList";
export default {
  name: "PlanMain",
  components: {HotPlanList, PlanDetail, MainMap}
}
</script>

<style scoped>
</style>