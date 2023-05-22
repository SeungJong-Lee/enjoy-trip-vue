<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>팔로워</h3>
      </b-col>
    </b-row>
    <div>
      <b-row v-for="(user, index) in follow" :key="index">
        <b-col cols="3">
          <img :src="user.userImgSrc" width="50" />
        </b-col>
        <b-col cols="9" class="mt-2">{{ user.userId }}</b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const userStore = "trailStore";

export default {
  name: "PlaceSidebar",
  components: {},
  data() {
    return {
      message: "",
      loginUser: sessionStorage.getItem("userId"),
    };
  },
  computed: {
    ...mapState(userStore, ["follow"]),
  },
  created() {
    this.getFollowList({
      userId: this.loginUser,
    });
    setTimeout(() => {
      console.log(this.follow + "asdasdadasd");
    }, 1000);
  },
  methods: {
    ...mapActions(userStore, ["getFollowList"]),
  },
};
</script>

<style scoped></style>
