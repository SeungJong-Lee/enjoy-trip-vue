<template>
  <div style="height: 100%; width: 100%">
    <div style="display: flex; justify-content: left">
      <video
          src="https://github.com/qkdk/enjoy-trip/assets/86948395/1a92033f-287e-4aa6-b9ee-fb8e107a1492"
          autoplay loop muted height="700"
          style="flex: 1">
      </video>
      <div style="display: flex; flex-direction: column; justify-content: center; flex: 1">
        <div class="centered-text">
          <router-link :to="{name: 'planview'}" class="route-text">여행 가기</router-link>
        </div>
        <div class="centered-text">
          <router-link :to="{name: 'planwrite'}" class="route-text">여행 구경하기</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanMain"
}
</script>

<style scoped>
.centered-text {
  background-color: #f8f9fa;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.route-text{
  color: black;
  font-size: xxx-large;
}
</style>