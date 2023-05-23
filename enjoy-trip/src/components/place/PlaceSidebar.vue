<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>팔로워</h3>
      </b-col>
    </b-row>
    <div>
      <b-row v-for="(user, index) in follow" :key="index" style="margin-bottom: 1%">
        <b-col cols="3">
          <img
            :src="mkUrl(user.userImgSrc)"
            width="50"
            class="userImg"
            onerror="this.src='https://github.com/qkdk/enjoy-trip/assets/86948395/c643b90b-fb65-4678-8dd7-7321cb0fdfaf'"
          />
        </b-col>
        <b-col cols="9" class="mt-2">{{ user.userId }}</b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { baseURL } from "@/api/http";

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
    mkUrl(url) {
      return baseURL + url;
    },
  },
};
</script>

<style scoped>
.userImg {
  border-radius: 10%;
}
</style>
