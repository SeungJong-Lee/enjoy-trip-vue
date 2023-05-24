<template>
  <div>
    <b-row>
      <b-col cols="4">
        <TrailView class="view" v-if="isView" style="margin-top: 100px"></TrailView>
        <main-map style="height: 430px; margin-top: 160px; margin-left: 10%" v-else></main-map>
        <div>
          <button
            class="custom-button"
            @click="isView = !isView"
            style="margin-top: 5%; margin-left: 50px"
          >
            전환
          </button>
        </div>
      </b-col>
      <b-col cols="6" class="mm">
        <TrailBoardWriteItem class="write" v-if="isWritePage"></TrailBoardWriteItem>
        <TrailBoardView class="write" v-else></TrailBoardView>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailView from "./TrailView.vue";
import TrailBoardWriteItem from "./TrailBoardWriteItem.vue";
import TrailBoardView from "./TrailBoardView.vue";
import MainMap from "../plan/MainMap.vue";
import { mapState } from "vuex";
const trailStore = "trailStore";
export default {
  name: "TrailBoardWrite",
  components: {
    TrailView,
    TrailBoardWriteItem,
    TrailBoardView,
    MainMap,
  },
  data() {
    return {
      message: "",
      isView: true,
    };
  },
  computed: {
    ...mapState(trailStore, ["trail"]),
    ...mapState(trailStore, ["isWritePage"]),
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.view {
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 10%;
}
.write {
  margin-top: 10%;
  margin-bottom: 5%;
}
.mm {
  margin-left: 7%;
}
.custom-button {
  margin-top: 5%;
  margin-left: 200px;
  padding: 10px 20px;
  background-color: #c2daee;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #81c5fd;
}
</style>
