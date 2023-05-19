<template>
  <div class="post-editor">
    <h1>같이 둘레길 갈 사람을 구해보세요</h1>
    <input type="text" v-model="title" placeholder="제목" class="input-field" />
    <textarea
      v-model="content"
      placeholder="내용"
      rows="8"
      class="textarea-field"
    ></textarea>
    <vue-slider
      v-model="numPeople"
      :min="1"
      :max="10"
      class="slider"
    ></vue-slider>
    <div class="slider-text">몇 명에서 가고 싶은가요? {{ numPeople }}명</div>
    <button class="submit-button">작성</button>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
export default {
  name: 'TrailBoardWriteItem',
  components: {
    VueSlider,
  },
  data() {
    return {
      message: '',
      title: '',
      content: '',
      numPeople: 1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.post-editor {
  margin-top: 20px;
}

h1 {
  margin-bottom: 30px;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.textarea-field {
  resize: vertical; /* 세로 크기 조절 가능 */
}

.submit-button {
  background-color: #57abe2;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #b1c8d6;
}
.slider {
  margin-bottom: 20px;
}

.slider .vue-slider-dot,
.slider .vue-slider-handle {
  width: 20px;
  height: 20px;
  background-color: #45acbe;
  border: 2px solid #4393b3;
  border-radius: 50%;
  transition: background-color 0.2s, border-color 0.2s;
}

.slider .vue-slider-handle:hover,
.slider .vue-slider-handle:focus {
  background-color: #3ebaeb;
  border-color: #24a9dd;
}

.slider .vue-slider-dot {
  margin-top: -9px;
}

.slider .vue-slider-dot:hover,
.slider .vue-slider-dot:focus {
  background-color: #376bdb;
}
.slider-text {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #555;
}
</style>
