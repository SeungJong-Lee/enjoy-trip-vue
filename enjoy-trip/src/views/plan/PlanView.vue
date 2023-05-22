<template>
  <div>
    <div>
      <b-row style="margin: 0">
        <b-col cols="6" style="padding: 0">
          <main-map style="height: 90vh"></main-map>
        </b-col>
        <b-col cols="3" style="padding: 0">
          <plan-detail></plan-detail>
        </b-col>
        <b-col cols="3" style="padding: 0">
          <HotPlanList></HotPlanList>
          <div>
            <map-side-bar>
            </map-side-bar>
          </div>
        </b-col>
      </b-row>
    </div>
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