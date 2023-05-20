<template>
  <div style="background-color: #42b983">
    <div id="map" style="width: 100%; aspect-ratio: 1/1"></div>
  </div>
</template>

<script>
const baseUrl = `http://localhost:8080/enjoytrip`;

export default {
  name: "MainMap",
  data() {
    return {
      map: null,
      mapContainer: null,
      markers: [],
      positions: [],
      mapOption: {},
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      this.initScript();
    }
  },
  computed: {
    planInfo() {
      return this.$store.getters.getPlanInfo;
    },
    planAttractions() {
      return this.$store.getters.getPlanAttractions;
    }
  },
  watch: {
    planAttractions(newValue) {
      if (newValue.length !== 0) {
        this.initMap(newValue[0].latitude,newValue[0].longitude, 8)
        this.mapContainer = document.getElementById("map"); // 지도를 표시할 div
        this.positions = [];
        this.createPositions(newValue)
        this.showMark(this.positions);
      }
    }
  },
  methods: {
    createPositions(newValue) {
      newValue.forEach((attraction) => this.positions.push(this.makeMark(attraction)))
    },

    initScript() {
      const script = document.createElement("script");
      script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=b7c6907abe12849970bf0d5a19f6717e&autoload=false";
      script.onload = () => window.kakao.maps.load(this.initMap);
      document.head.appendChild(script);
    },

    initMap(lat = 33.450701, lng = 126.570667, level = 5) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: level,
      };
      this.map = new window.kakao.maps.Map(container, options);
      this.mapContainer = document.getElementById("map");
    },

    makeMark(element) {
      var imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(24, 24), // 마커이미지의 크기입니다
          imageOption = {}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      if (element.contentTypeId == 12) {
        imageSrc = `${baseUrl}/img/marker/marker_photo.png`;
      } else if (element.contentTypeId == 14) {
        imageSrc = `${baseUrl}/img/marker/marker_his.png`;
      } else if (element.contentTypeId == 15) {
        imageSrc = `${baseUrl}/img/marker/marker_party.png`;
      } else if (element.contentTypeId == 25) {
        imageSrc = `${baseUrl}/img/marker/marker_trip.png`;
      } else if (element.contentTypeId == 28) {
        imageSrc = `${baseUrl}/img/marker/marker_sports.png`;
      } else if (element.contentTypeId == 32) {
        imageSrc = `${baseUrl}/img/marker/marker_bed.png`;
      } else if (element.contentTypeId == 38) {
        imageSrc = `${baseUrl}/img/marker/marker_shop.png`;
      } else if (element.contentTypeId == 39) {
        imageSrc = `${baseUrl}/img/marker/marker_food.png`;
      }
      const coordX = element.latitude;
      const coordY = element.longitude;
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

      var markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(coordX, coordY), // 마커가 표시될 위치입니다
          content = `<div style="height: 100px;width: 350px ">
                    <div style="background-color: lightgrey">${element.title}</div>
                        <div style="display: flex; flex-direction: row">
                            <img style="width: 75px; height: 75px" src=${element.firstImage}></img>
                            <div>
                                <span>${element.addr1}</span>
                                <br/>
                                <span>${element.zipCode}</span>
                                <br/>
                                <span>${element.tel}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
      return {markerPosition, markerImage, content};
    },
    showMark(positions) {
      for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: positions[i].markerPosition, // 마커의 위치
          image: positions[i].markerImage,
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
          content: positions[i].content, // 인포윈도우에 표시할 내용
        });

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        window.kakao.maps.event.addListener(
            marker,
            "mouseover",
            this.makeOverListener(this.map, marker, infowindow)
        );
        window.kakao.maps.event.addListener(
            marker,
            "mouseout",
            this.makeOutListener(infowindow)
        );
      }
    },
    makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    },
    makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    },

  }
}
</script>

<style scoped>

</style>