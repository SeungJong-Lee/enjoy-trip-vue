<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="moveList">목록</b-button>
      </b-col>
      <b-col class="text-right">
        <b-button
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.noticeNo}. ${article.noticeTitle} [${article.noticeHit}]</h3><div><h6>${article.userId}</h6><div>${article.noticeCreateTime}</div></div>`"
          class="mb-2 custom-card"
          border-variant="dark"
          no-body
        >
          <b-card-text class="custom-card-text" v-html="message"></b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { axiosBuilderWithJwt } from '@/api/http';

export default {
  name: 'BoardDetail',
  data() {
    return {
      article: {},
      no: '',
    };
  },
  computed: {
    message() {
      if (this.article.noticeContent)
        return this.article.noticeContent.split('\n').join('<br>');
      return '';
    },
  },
  created() {
    console.log(this.$route.params.articleno);
    this.no = this.$route.params.articleno;
    axiosBuilderWithJwt()
      .get(`/notice/api/${this.no}?noticeNo=${this.no}`)
      .then(({ data }) => {
        this.article = data;
      });
  },
  methods: {
    moveModifyArticle() {
      this.$router.replace({
        name: 'noticemodify',
        params: { articleno: this.article.noticeNo },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    deleteArticle() {
      if (confirm('정말로 삭제?')) {
        this.$router.replace({
          name: 'noticedelete',
          params: { articleno: this.article.noticeNo },
        });
      }
    },
    moveList() {
      this.$router.push({ name: 'noticelist' });
    },
  },
  // filters: {
  //   dateFormat(regtime) {
  //     return moment(new Date(regtime)).format("YY.MM.DD hh:mm:ss");
  //   },
  // },
};
</script>

<style scoped>
.custom-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-card-text {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
</style>
