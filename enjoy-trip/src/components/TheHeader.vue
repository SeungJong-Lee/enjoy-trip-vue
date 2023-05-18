<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="light" class="custom-nav">
      <b-navbar-brand href="#"
      >
        <router-link :to="{ name: 'home' }" class="nav-link"
        ><img src="@/assets/logo.png" width="100"/></router-link
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="">
            <router-link :to="{ name: 'plan' }" class="nav-link">여행계획</router-link>
          </b-nav-item
          >
          <b-nav-item href=""
          >
            <router-link :to="{ name: 'place' }" class="nav-link"
            >핫플레이스
            </router-link
            >
          </b-nav-item
          >
          <b-nav-item href=""
          >
            <router-link :to="{ name: 'notice' }" class="nav-link"
            >공지사항
            </router-link
            >
          </b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="!isLoggedIn">
          <b-nav-item href="#">
            <router-link to="login">로그인</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="signup">회원가입</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item href="#">마이페이지</b-nav-item>
          <b-nav-item @click="logout">로그아웃</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created() {
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$store.commit('setLoggedIn', false);
      if (this.$route.name !== 'home') {
        this.$router.push({name: 'home'});
      }
    }
  },

};
</script>
<style scoped></style>
