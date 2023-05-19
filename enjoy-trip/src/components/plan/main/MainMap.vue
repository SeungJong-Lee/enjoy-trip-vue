<template>
  <div style="background-color: #42b983">
    <div id="map" style="width: 100%; aspect-ratio: 1/1"></div>
  </div>
</template>

<script>
export default {
  name: "MainMap",
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      this.initScript();
    }
  },
  methods: {
    initScript() {
      const script = document.createElement("script");
      script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=b7c6907abe12849970bf0d5a19f6717e&autoload=false";
      script.onload = () => window.kakao.maps.load(this.initMap);
      document.head.appendChild(script);
    },

    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      this.map = new window.kakao.maps.Map(container, options);
      this.mapContainer = document.getElementById("map");
      // this.loadMaker();
    },

  }
}
</script>

<style scoped>

</style>