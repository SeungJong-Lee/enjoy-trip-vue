<template>
  <div class="list" @scroll="handleNotificationListScroll">
    <NoticeListForm
      v-for="(list, index) in pushList"
      :key="index"
      img-src="https://cdn.vuetifyjs.com/images/john.jpg"
      notice-name="네임"
      date="날짜"
      content="컨텐츠"
      :read="false"
    />
  </div>
</template>

<script>
export default {
  name: '',
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
