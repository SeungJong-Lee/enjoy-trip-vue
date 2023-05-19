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
          <b-row class="user-info">
            <b-col cols="9">
              {{ article.userId }}
            </b-col>
            <b-col cols="3">
              <button @click="toggleFollow" class="follow-button">
                <font-awesome-icon :icon="isFollowing ? 'user-minus' : 'user-plus'" />
              </button>
            </b-col>
          </b-row>
          <hr />
          <div>
            <b-row class="article-info">
              <b-col cols="9">
                {{ article.placeTitle }}
              </b-col>
              <b-col cols="3">
                <button @click="toggleLike" class="like-button">
                  <font-awesome-icon :icon="heartIcon" :class="{ active: isLiked }" />
                </button>
                <span> {{ likeCount }}</span>
              </b-col>
            </b-row>
            <hr />
          </div>
          <div class="reply-container">
            <p class="my-4" v-for="(rep, i) in reply" :key="i">
              {{ rep.replyContent }}<br />
              {{ rep.userId }} - {{ rep.replyCreateTime }}
            </p>
          </div>
          <div>
            <b-row>
              <b-col cols="8">
                <input
                  type="text"
                  class="reply-input"
                  v-model="inputValue"
                  placeholder="댓글을 입력하세요"
                />
              </b-col>
              <b-col cols="4">
                <button class="create-button" @click="replyWrite">확인</button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import http from "@/api/http";
import { ref } from "vue";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
      inputValue: "",
      likeCount: ref(0),
      isLiked: ref(false),
      heartIcon: faHeart,
      isFollowing: false,
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
      this.inputValue = "";
    },
    replyWrite() {
      if (this.inputValue != "") {
        var user = sessionStorage.getItem("userId");
        console.log(user);
        http.post(`/place/api/reply`, {
          replyContent: this.inputValue,
          placeNo: this.article.placeNo,
          parentId: 0,
          userId: user,
        });
        console.log(this.inputValue);
        setTimeout(() => {
          this.inputValue = "";
          this.mvView(this.article.placeImgSrc, this.article);
        }, 300);
      }
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.likeCount++;
      } else {
        this.likeCount--;
      }
    },
    toggleFollow() {
      this.isFollowing = !this.isFollowing;
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

.container {
  position: relative;
}
.active {
  color: red; /* 하트가 활성화된 상태일 때의 색상 */
}

.custom-modal {
  max-width: 800px;
  margin: 0 auto;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.follow-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
}

.follow-button:hover {
  color: red;
}

.article-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.like-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 5px;
}

.like-button.active {
  color: red;
}

.reply-container {
  height: 500px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.reply-input {
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 10px; /* 원하는 둥근 정도로 조정합니다. */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.create-button {
  padding: 10px 20px;
  background-color: #007bff; /* 원하는 하늘색 코드로 변경합니다. */
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
}

.create-button:hover {
  background-color: #0056b3;
}
</style>
