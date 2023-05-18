<template>
  <div>
    <b-row>
      <b-col cols="8">
        <h3>팔로워</h3>
      </b-col>
      <b-col cols="4">
        <button class="write-button" v-if="isWrite == false" @click="writePost">
          <font-awesome-icon icon="pen" />
          글쓰기
        </button>
        <button class="write-button" v-if="isWrite" @click="mvList">
          <font-awesome-icon icon="pen" />
          글보기
        </button>
      </b-col>
    </b-row>
    <div>
      <b-row>
        <b-col cols="3">
          <img src="@/assets/blank_profile.png" width="50" />
        </b-col>
        <b-col cols="9" class="mt-2">안규보</b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceSidebar',
  components: {},
  data() {
    return {
      message: '',
      isWrite: false,
    };
  },
  created() {},
  methods: {
    writePost() {
      // 글쓰기 버튼이 클릭되었을 때 수행할 동작
      this.isWrite = true;
      this.$router.push('/place/placewrite');
    },
    mvList() {
      this.isWrite = false;
      this.$router.push('/place');
    },
  },
};
</script>

<style scoped>
.write-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #5686b9;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.write-button:hover {
  background-color: #368de9;
}
</style>
