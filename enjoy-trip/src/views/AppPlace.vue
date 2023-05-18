<template>
  <div>
    <b-row>
      <b-col cols="3" class="mt-4">
        <PlaceSidebar></PlaceSidebar>
      </b-col>
      <b-col cols="8" class="mt-4 mb-4">
        <PlaceList></PlaceList>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PlaceList from "@/components/place/PlaceList.vue";
import PlaceSidebar from "@/components/place/PlaceSidebar.vue";
export default {
  name: "AppPlace",
  components: {
    PlaceList,
    PlaceSidebar,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
