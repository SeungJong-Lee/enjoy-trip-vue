<template>
  <div>
    <b-row>
      <b-col cols="3" md="4" class="mb-3">
        <div v-for="(place, index) in list1" :key="index">
          <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img>
          {{ place.placeTitle }}
        </div>
      </b-col>
      <b-col cols="3" md="4" class="mb-3">
        <div v-for="(place, index) in list2" :key="index">
          <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img>
          {{ place.placeTitle }}
        </div>
      </b-col>
      <b-col cols="3" md="4" class="mb-3">
        <div v-for="(place, index) in list3" :key="index">
          <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img>
          {{ place.placeTitle }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "PlaceList",
  components: {},
  data() {
    return {
      message: "",
      articles: [],
      list1: [],
      list2: [],
      list3: [],
      pgno: 2,
    };
  },
  created() {
    http.get(`/place/api?pgno=${this.pgno}&key=&word=`).then(({ data }) => {
      this.articles = data.data;
      console.log(this.articles);
      // window.location.reload();
    });
    // console.log("시작");
    setTimeout(() => {
      for (let i = 0; i < this.articles.length; i++) {
        if (i % 3 == 0) this.list1.push(this.articles[i]);
        else if (i % 3 == 1) this.list2.push(this.articles[i]);
        else if (i % 3 == 2) this.list3.push(this.articles[i]);
      }
      console.log(this.list1);
      console.log(this.list2);
      console.log(this.list3);
    }, 300);
    // console.log("끝");

    // console.log(this.articles);
  },
  methods: {},
};
</script>

<style scoped></style>
