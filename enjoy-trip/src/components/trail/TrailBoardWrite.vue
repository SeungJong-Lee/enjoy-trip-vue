<template>
  <div>
    <b-row>
      <b-col
          cols="4"
          style="display: flex; flex-direction: column; border-radius: 50%"
      >
        <div style="margin-bottom: 20px">
          <trail-view
              v-if="!isView"
              style="
              height: 410px;
              width: 600px;
              margin-left: 100px;
              margin-top: 170px;
            "
          ></trail-view>

          <trail-map
              style="
              height: 410px;
              width: 600px;
              margin-left: 100px;
              margin-top: 170px;
            "
              v-else
          ></trail-map>
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
        <TrailBoardWriteItem
            class="write"
            v-if="isWritePage"
        ></TrailBoardWriteItem>
        <TrailBoardView class="write" v-else></TrailBoardView>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TrailView from './TrailView.vue';
import TrailBoardWriteItem from './TrailBoardWriteItem.vue';
import TrailBoardView from './TrailBoardView.vue';
import TrailMap from "@/components/trail/TrailMap";
import {mapMutations, mapState} from 'vuex';
import axios from 'axios';
import {axiosBuilderWithJwt} from '@/api/http';

const trailStore = 'trailStore';
export default {
  name: 'TrailBoardWrite',
  components: {
    TrailView,
    TrailBoardWriteItem,
    TrailBoardView,
    TrailMap
  },
  data() {
    return {
      message: '',
      isView: true,
      cityName: {},
      isError: false,
      trailLocation: {},
    };
  },
  computed: {
    ...mapState(trailStore, ['isWritePage']),
    ...mapState(trailStore, ['trail']),
  },
  created() {
    console.log(this.trail.start_detail_addr + '제발 좀 되라 친구야');
    setTimeout(() => {
      axiosBuilderWithJwt()
          .get(`/trail/getcity/${this.trail.trail_id}`)
          .then(({data}) => {
            // this.cityName =
            //   data.startSidoName +
            //   " " +
            //   data.startGugunName +
            //   " " +
            //   " " +
            //   data.endSidoName +
            //   " " +
            //   data.endGugunName +
            //   " " +
            //   this.trail.start_detail_addr;
            this.cityName.startName =
                data.startSidoName +
                ' ' +
                data.startGugunName +
                ' ' +
                this.trail.start_detail_addr;
            this.cityName.endName =
                data.endSidoName +
                ' ' +
                data.endGugunName +
                ' ' +
                this.trail.end_detail_addr;
            console.log(
                this.cityName.startName +
                ' ' +
                this.cityName.endName +
                ' asdadasdasdasd'
            );
          });
    }, 300);
    setTimeout(() => {
      axios
          .get(
              `http://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${this.cityName.startName}&refine=true&simple=true&format=json&type=PARCEL&key=6D07D920-C421-3097-98C5-778C11FA6B49`
          )
          .then(({data}) => {
            if (data.response.status == 'OK') {
              console.log(data + 'startOk');
              this.trailLocation = {
                startX: data.response.result.point.x,
                startY: data.response.result.point.y,
              };
              // console.log('ok');
            } else {
              this.isError = true;
            }
          });
    }, 500);

    setTimeout(() => {
      if (this.isError) {
        console.log('에러발생');
        axios
            .get(
                `http://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${this.cityName.startName}&refine=true&simple=true&format=json&type=ROAD&key=6D07D920-C421-3097-98C5-778C11FA6B49`
            )
            .then(({data}) => {
              console.log(data);
              if (data.response.status != 'OK') {
                console.log(data + ' startOk');
                this.trailLocation.startX = null;
                this.trailLocation.startY = null;
              } else {
                this.trailLocation = {
                  startX: data.response.result.point.x,
                  startY: data.response.result.point.y,
                };
              }
            });
      }
    }, 750);
    setTimeout(() => {
      axios
          .get(
              `http://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${this.cityName.endName}&refine=true&simple=true&format=json&type=PARCEL&key=6D07D920-C421-3097-98C5-778C11FA6B49`
          )
          .then(({data}) => {
            if (data.response.status == 'OK') {
              console.log(data + ' endOd');
              this.trailLocation.endX = data.response.result.point.x;
              this.trailLocation.endY = data.response.result.point.y;
              // console.log('ok');
            } else {
              this.isError = true;
            }
          });
    }, 1000);

    setTimeout(() => {
      if (this.isError) {
        console.log('에러발생');
        axios
            .get(
                `http://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${this.cityName.endName}&refine=true&simple=true&format=json&type=ROAD&key=6D07D920-C421-3097-98C5-778C11FA6B49`
            )
            .then(({data}) => {
              console.log(data + ' endOk');
              if (data.response.status != 'OK') {
                this.trailLocation.endX = null;
                this.trailLocation.endY = null;
              } else {
                this.trailLocation.endX = data.response.result.point.x;
                this.trailLocation.endY = data.response.result.point.y;
              }
            });
      }
    }, 1300);
    setTimeout(() => {
      console.log(this.trailLocation);
      this.SET_TRAIL_LOCATION(this.trailLocation);
    }, 1500);
  },
  methods: {
    ...mapMutations(trailStore, ['SET_TRAIL_LOCATION']),
  },
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
