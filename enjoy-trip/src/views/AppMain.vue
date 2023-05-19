<template>
  <div>
    <b-container class="text-center">
      <!-- <b-row>
        <div>
          <b-img
            src="http://localhost:8080/enjoytrip/img/top2.png"
            height="400"
            alt="Fluid image"
          ></b-img>
        </div>
      </b-row> -->
      <div class="row">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img
                src="http://localhost:8080/enjoytrip/img/top2.png"
                class="d-block w-100"
                alt="top1"
                height="550"
              />
            </div>
          </div>
          <div class="carousel-caption"></div>
        </div>
      </div>
    </b-container>
    <div class="custom-container">
      <div class="row">
        <!-- <hr class="my-4" /> -->
        <div class="mt-3 col-12">
          <h1>인기 여행지</h1>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-xl-6">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">서울투어!!</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">제주도 투어!!</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">서울관광</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">제주도 맛집 리스트~~</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-xl-6">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">서울투어!!</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">제주도 투어!!</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">서울관광</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-3 ms-3">
                <div class="card">
                  <img
                    src="https://via.placeholder.com/300x250"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title">제주도 맛집 리스트~~</h3>

                    <a href="#" class="btn btn-outline-primary">더보기..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center mb-5">
        <div class="col-12"><h1>오늘의 인기 여행계획</h1></div>

        <div class="row">
          <div class="col-md-5">
            <img src="https://via.placeholder.com/300x250" alt="" width="500" />
          </div>
          <!-- <div class="col-md-7" style="border: 1px solid"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  components: {},
  data() {
    return {
      message: '',
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
