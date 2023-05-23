<template>
  <div>
    <div>{{ price }} 원</div>
    <div v-for="(route, index) in results" :key="index" style="margin-bottom: 5%; z-index: 9999">
      <b-card>
        <b-list-group>
          <b-list-group-item
            v-for="plan in route"
            :key="plan.planId"
            :active="activeItem === index"
            @click="activeItem = index"
          >
            <div class="d-flex align-items-center">
              <div class="mr-3">
                <font-awesome-icon
                  v-if="plan.mode === 'WALK'"
                  icon="walking"
                  variant="info"
                  :size="iconSize"
                ></font-awesome-icon>
                <font-awesome-icon
                  v-if="plan.mode === 'BUS'"
                  icon="bus"
                  variant="success"
                  :size="iconSize"
                ></font-awesome-icon>
              </div>
              <div>
                <span class="font-weight-bold">{{ plan.start }}</span>
                <font-awesome-icon icon="chevron-right" class="mx-2"></font-awesome-icon>
                <span class="font-weight-bold">{{ plan.end }}</span>
                <div v-if="plan.mode === 'BUS'" class="text-muted">
                  {{ plan.num }}를 타고 {{ plan.count }}개 정류소 이동
                </div>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faWalking, faBus } from "@fortawesome/free-solid-svg-icons";

// 아이콘을 라이브러리에 추가
library.add(faWalking, faBus, faChevronRight);
// import axios from "axios";
export default {
  name: "PlanRoute",
  components: { FontAwesomeIcon },
  data() {
    return {
      message: "",
      routes: [],
      results: [],
      legs: [],
      isRepeat: false,
      activeItem: null,
      iconSize: "lg", // 아이콘 크기 조절
      price: 0,
    };
  },
  computed: {
    ...mapState(["planAttractions"]),
  },
  created() {},
  watch: {},

  methods: {
    setRoute() {
      this.price = 0;
      this.routes = [];
      this.results = [];
      //   for (let i = 0; i < this.planAttractions.length - 1; i++) {
      //     console.log(this.planAttractions[i].longitude + "     " + this.planAttractions[i].latitude);
      //     console.log(
      //       this.planAttractions[i + 1].longitude + "     " + this.planAttractions[i + 1].latitude
      //     );
      //     console.log("줄바꿈");
      //   }

      //   axios
      //     .get("http://localhost:8080/enjoytrip/test.json")
      //     .then(({ data }) => {
      //       this.legs = data.metaData.plan.itineraries[0].legs;
      //       //   console.log(this.legs);
      //       this.price = this.price + data.metaData.plan.itineraries[0].fare.regular.totalFare;

      //       for (let i = 0; i < this.legs.length; i++) {
      //         if (this.legs[i].mode == "WALK") {
      //           this.routes.push({
      //             mode: this.legs[i].mode,
      //             start: this.legs[i].start.name,
      //             end: this.legs[i].end.name,
      //           });
      //           console.log(
      //             this.legs[i].start.name + "  에서  " + this.legs[i].end.name + "   로 걸어서 이동"
      //           );
      //         } else if (this.legs[i].mode == "BUS") {
      //           this.routes.push({
      //             mode: this.legs[i].mode,
      //             num: this.legs[i].route,
      //             count: this.legs[i].passStopList.stationList.length,
      //             end: this.legs[i].end.name,
      //           });
      //         }
      //       }
      //       this.results.push(this.routes);
      //       this.routes = [];
      //       this.legs = [];
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      setTimeout(() => {
        for (let i = 0; i < this.planAttractions.length - 1; i++) {
          console.log(i + "           asdadasd");
          axios
            .get("http://localhost:8080/enjoytrip/test.json")
            .then(({ data }) => {
              this.legs = data.metaData.plan.itineraries[0].legs;
              //   console.log(this.legs);
              this.price = this.price + data.metaData.plan.itineraries[0].fare.regular.totalFare;

              for (let i = 0; i < this.legs.length; i++) {
                if (this.legs[i].mode == "WALK") {
                  this.routes.push({
                    mode: this.legs[i].mode,
                    start: this.legs[i].start.name,
                    end: this.legs[i].end.name,
                  });
                  console.log(
                    this.legs[i].start.name +
                      "  에서  " +
                      this.legs[i].end.name +
                      "   로 걸어서 이동"
                  );
                } else if (this.legs[i].mode == "BUS") {
                  this.routes.push({
                    mode: this.legs[i].mode,
                    num: this.legs[i].route,
                    count: this.legs[i].passStopList.stationList.length,
                    end: this.legs[i].end.name,
                  });
                }
              }
              this.results.push(this.routes);
              this.routes = [];
              this.legs = [];
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, 300);

      // 티맵 통신
      //   axios
      //     .post(`https://apis.openapi.sk.com/transit/routes`, formData, {
      //       headers: {
      //         "Content-Type": "application/json",
      //         appKey: "A5VkFhWQtQ1ymkH89TVCTN9jTuudvH23Uy28N1J6",
      //         accept: "application/json",
      //       },
      //     })
      //     .then(() => {
      //       setTimeout(() => {
      //         this.$router.push("/place");
      //       }, 300);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    },
  },
};
</script>

<style scoped>
.fa-walking,
.fa-bus {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.fa-chevron-right {
  margin: 0 0.5rem;
}
</style>
