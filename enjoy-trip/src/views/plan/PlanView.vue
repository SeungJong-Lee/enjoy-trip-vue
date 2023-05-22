<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <main-map style="height: 80vh"></main-map>
        </b-col>
        <b-col cols="3">
          <plan-detail></plan-detail>
        </b-col>
        <b-col cols="3">
          <HotPlanList style="height: 80vh"></HotPlanList>
          <div>
            <map-side-bar>
            </map-side-bar>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainMap from "@/components/plan/MainMap";
import PlanDetail from "@/components/plan/view/PlanDetail";
import HotPlanList from "@/components/plan/view/HotPlanList";
import MapSideBar from "@/components/plan/view/MapSideBar";

export default {
  name: "planView",
  components: {MapSideBar, HotPlanList, PlanDetail, MainMap}
}
</script>

<style scoped>
</style>