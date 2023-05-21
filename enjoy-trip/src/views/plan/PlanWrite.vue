<template>
  <div>
    <div>
      <b-row>
        <b-col cols=3>
          <plan-write-detail>
          </plan-write-detail>
        </b-col>
        <b-col cols=6>
          <main-map></main-map>
        </b-col>
        <b-col cols=3>
          <plan-write-attractions></plan-write-attractions>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PlanWriteDetail from "@/components/plan/write/PlanWriteDetail";
import PlanWriteAttractions from "@/components/plan/write/PlanWriteAttractions";
import MainMap from "@/components/plan/view/MainMap";

export default {
  name: "PlanWrite",
  components: {MainMap, PlanWriteAttractions, PlanWriteDetail}
}
</script>

<style scoped>

</style>