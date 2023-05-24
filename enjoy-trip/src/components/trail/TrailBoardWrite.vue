<template>
  <div>
    <b-row>
      <b-col cols="4" style="display: flex; flex-direction: column; border-radius: 50%">
        <div style="margin-bottom: 20px">
          <trail-view
            v-if="!isView"
            style="height: 410px; width: 600px; margin-left: 100px; margin-top: 170px"
          ></trail-view>

          <main-map
            style="height: 410px; width: 600px; margin-left: 100px; margin-top: 170px"
            v-else
          ></main-map>
        </div>

        <div>
          <button
            class="custom-button"
            @click="isView = !isView"
            style="margin-top: 5%; margin-left: 160px"
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
