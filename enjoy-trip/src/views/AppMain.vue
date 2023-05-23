<template>
  <div>
    <div class="floating-div">
      <h1 class="fade-in" style="color: #3f6ba0">Trip By Step</h1>
      <h3 class="fade-in" style="color: #3f6ba0">marcher dans le monde</h3>
    </div>
    <main-carousel style="height: 90vh"></main-carousel>
    <div style="height: 85vh; padding-top: 2vh; padding-left: 10vw; padding-right: 10vw">
      <h1>인기 여행지</h1>
      <div style="display: flex; padding: 10px">
        <main-card v-for="item in placeData1" :key="item.placeNo" :image-url="item.placeImgSrc"
                   :title="item.placeTitle" style="flex: 1; margin-left:10px; margin-right: 10px">
        </main-card>
      </div>
      <div style="display: flex; padding: 10px">
        <main-card v-for="item in placeData2" :key="item.placeNo" :image-url="item.placeImgSrc"
                   :title="item.placeTitle" style="flex: 1; margin-left:10px; margin-right: 10px">
        </main-card>
      </div>
    </div>
  </div>


  <!--  <div>-->
  <!--    <b-container class="text-center">-->
  <!--      &lt;!&ndash; <b-row>-->
  <!--        <div>-->
  <!--          <b-img-->
  <!--            src="http://localhost:8080/enjoytrip/img/top2.png"-->
  <!--            height="400"-->
  <!--            alt="Fluid image"-->
  <!--          ></b-img>-->
  <!--        </div>-->
  <!--      </b-row> &ndash;&gt;-->
  <!--      <div class="row">-->
  <!--        <div-->
  <!--          id="carouselExampleInterval"-->
  <!--          class="carousel slide"-->
  <!--          data-bs-ride="carousel"-->
  <!--        >-->
  <!--          <div class="carousel-inner">-->
  <!--            <div class="carousel-item active" data-bs-interval="1000">-->
  <!--              <img-->
  <!--                src="http://localhost:8080/enjoytrip/img/top2.png"-->
  <!--                class="d-block w-100"-->
  <!--                alt="top1"-->
  <!--                height="550"-->
  <!--              />-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="carousel-caption"></div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </b-container>-->
  <!--    <div class="custom-container">-->
  <!--      <div class="row">-->
  <!--        &lt;!&ndash; <hr class="my-4" /> &ndash;&gt;-->
  <!--        <div class="mt-3 col-12">-->
  <!--          <h1>인기 여행지</h1>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="row mb-5">-->
  <!--        <div class="col-xl-6">-->
  <!--          <div class="row">-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">서울투어!!</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">제주도 투어!!</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xl-6">-->
  <!--          <div class="row">-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">서울관광</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">제주도 맛집 리스트~~</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="row mb-5">-->
  <!--        <div class="col-xl-6">-->
  <!--          <div class="row">-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">서울투어!!</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">제주도 투어!!</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xl-6">-->
  <!--          <div class="row">-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">서울관광</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="col-md-6">-->
  <!--              <div class="card mb-3 ms-3">-->
  <!--                <div class="card">-->
  <!--                  <img-->
  <!--                    src="https://via.placeholder.com/300x250"-->
  <!--                    class="card-img-top"-->
  <!--                    alt="..."-->
  <!--                  />-->
  <!--                  <div class="card-body">-->
  <!--                    <h3 class="card-title">제주도 맛집 리스트~~</h3>-->

  <!--                    <a href="#" class="btn btn-outline-primary">더보기..</a>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="row text-center mb-5">-->
  <!--        <div class="col-12"><h1>오늘의 인기 여행계획</h1></div>-->

  <!--        <div class="row">-->
  <!--          <div class="col-md-5">-->
  <!--            <img src="https://via.placeholder.com/300x250" alt="" width="500" />-->
  <!--          </div>-->
  <!--          &lt;!&ndash; <div class="col-md-7" style="border: 1px solid"></div> &ndash;&gt;-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import MainCarousel from "@/components/main/MainCarousel";
import MainCard from "@/components/main/MainCard";
import {axiosBuilderWithJwt} from "@/api/httpJwt";

export default {
  name: 'AppMain',
  components: {MainCard, MainCarousel},
  data() {
    return {
      message: '',
      placeData1: [],
      placeData2: [],
    };
  },
  created() {
    axiosBuilderWithJwt().get(`place/api/sort?pgno=1&key=&word=`)
        .then(({data}) => {
          for (let i = 0; i < 4; i++) {
            this.placeData1.push(data.data[i]);
          }
          for (let i = 4; i < 8; i++) {
            this.placeData2.push(data.data[i]);
          }
        });
  },
  methods: {},
};
</script>

<style scoped>
.floating-div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 10vh;
  /* 다른 스타일 및 크기 설정 */
}

.fade-in {
  opacity: 0; /* 처음에 투명하게 설정 */
  animation: fade-in 3s forwards; /* fade-in 애니메이션 적용 */
}

@keyframes fade-in {
  from {
    opacity: 0; /* 시작 상태 */
  }
  to {
    opacity: 1; /* 최종 상태 */
  }
}
</style>
