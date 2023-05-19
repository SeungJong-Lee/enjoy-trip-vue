<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()">글쓰기</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="trails" :fields="fields" @row-clicked="viewArticle">
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const trailStore = "trailStore";
export default {
  name: "TrailList",
  components: {},
  data() {
    return {
      message: "",
      fields: [
        { key: "title", label: "둘레길", tdClass: "tdClass" },
        { key: "route", label: "루트", tdClass: "tdSubject" },
        { key: "estimated_time", label: "예상시간", tdClass: "tdClass" },
        { key: "total_length", label: "총 길이", tdClass: "tdClass" },
      ],
    };
  },
  computed: {
    ...mapState(trailStore, ["trails"]),
  },
  created() {},
  methods: {
    moveWrite() {},
    viewArticle() {},
  },
};
</script>

<style scoped></style>
