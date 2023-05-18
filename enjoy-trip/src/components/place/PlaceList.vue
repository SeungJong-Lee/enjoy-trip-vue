<template>
  <div>
    <b-row>
      <b-col cols="3" md="4" class="mb-3 md-4">
        <div v-for="(place, index) in list1" :key="index">
          <!-- <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img> -->
          <div>
            <img
              :src="place.placeImgSrc"
              width="100%"
              class="image-effect"
              @click="mvView(place.placeImgSrc, place)"
            />
          </div>
          {{ place.placeTitle }}
        </div>
      </b-col>
      <b-col cols="3" md="4" class="mb-3">
        <div v-for="(place, index) in list2" :key="index">
          <!-- <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img> -->
          <div>
            <img
              :src="place.placeImgSrc"
              width="100%"
              class="image-effect"
              @click="mvView(place.placeImgSrc, place)"
            />
          </div>
          {{ place.placeTitle }}
        </div>
      </b-col>
      <b-col cols="3" md="4" class="mb-3">
        <div v-for="(place, index) in list3" :key="index">
          <!-- <b-card-img :src="place.placeImgSrc" alt="Image" class="rounded-0"></b-card-img> -->
          <div>
            <img
              :src="place.placeImgSrc"
              width="100%"
              class="image-effect"
              @click="mvView(place.placeImgSrc, place)"
            />
          </div>
          {{ place.placeTitle }}
        </div>
      </b-col>
    </b-row>
    <div ref="scrollTrigger"></div>
    <div v-if="isLoading">로딩 중...</div>
    <!-- 모달창 시작 -->
    <b-modal
      id="modal-1"
      size="xl"
      :title="article.placeTitle"
      v-model="isModalOpen"
      class="custom-modal"
    >
      <b-row>
        <b-col cols="8">
          <img :src="imageUrl" alt="이미지" width="100%" height="700" />
        </b-col>
        <b-col cols="4">
          <div>
            {{ article.userId }}
            <hr />
          </div>
          <div>
            {{ article.placeTitle }}
            <hr />
          </div>
          <p class="my-4" v-for="(rep, i) in reply" :key="i">
            {{ rep.replyContent }} - {{ rep.replyCreateTime }}
          </p>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  components: {},
  data() {
    return {
      items: [],
      page: 1,
      isLoading: false,
      scrollTimeout: null,
      list1: [],
      list2: [],
      list3: [],
      isModalOpen: false,
      imageUrl: "",
      article: {},
      reply: [],
    };
  },
  mounted() {
    this.fetchData();
    this.addScrollListener();
  },
  methods: {
    fetchData() {
      if (this.items.length % 9 == 0) {
        this.isLoading = true;

        // 비동기 작업을 통해 새로운 데이터 가져오기
        // 예: API 호출, 데이터베이스 쿼리 등

        // 새로운 데이터를 items 배열에 추가
        http.get(`/place/api?pgno=${this.page}&key=&word=`).then(({ data }) => {
          // this.items = data.data;
          this.items.push(...data.data);
          // window.location.reload();
          console.log(this.items);
        });
        //   this.items = [...this.items, ...newItems];
        this.isLoading = false;
        setTimeout(() => {
          for (let i = (this.page - 1) * 9; i < this.items.length; i++) {
            if (i % 3 == 0) this.list1.push(this.items[i]);
            else if (i % 3 == 1) this.list2.push(this.items[i]);
            else if (i % 3 == 2) this.list3.push(this.items[i]);
          }
          console.log(this.list1);
          console.log(this.list2);
          console.log(this.list3);
        }, 300);
        // if(this.page == )
        console.log(this.page);
      }
    },
    addScrollListener() {
      window.addEventListener("scroll", this.handleScroll);
    },
    removeScrollListener() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      if (this.isLoading) return;

      clearTimeout(this.scrollTimeout);

      this.scrollTimeout = setTimeout(() => {
        const scrollTrigger = this.$refs.scrollTrigger;
        const scrollPosition = window.innerHeight + window.pageYOffset;
        if (scrollTrigger && scrollPosition >= scrollTrigger.offsetTop) {
          this.page += 1;
          this.fetchData();
        }
      }, 200);
    },
    mvView(imageUrl, title) {
      console.log("이동");
      console.log(title);
      this.article = title;
      this.imageUrl = imageUrl;
      this.isModalOpen = true;
      http.get(`/place/api/${this.article.placeNo}`).then(({ data }) => {
        // this.items = data.data;
        this.reply = data.reply;
        // window.location.reload();
        console.log(this.reply);
      });
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  beforeDestroy() {
    this.removeScrollListener();
  },
};
</script>
<style>
.image-effect {
  transition: filter 0.3s ease; /* 효과가 적용될 때의 전환 효과를 설정합니다. */
}

.image-effect:hover {
  filter: grayscale(100%); /* 흑백 효과를 적용합니다. */
}
</style>
