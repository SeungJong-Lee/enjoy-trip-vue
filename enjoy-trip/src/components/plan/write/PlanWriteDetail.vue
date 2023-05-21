<template>
  <div style="height: 80vh; border-right: 1px solid gainsboro">
    <div style="height: 40vh; border-bottom: 1px solid gainsboro">
      <div style="font-size: xx-large; height: 30%">
        <div v-if="planInfo">
          {{ planInfo.planTitle }}
        </div>
        <div v-else>
          {{ userId }}
          <br/>
          님의 계획
        </div>
      </div>
      <div style="height: 50%; align-items: center; padding-top: 2vh">
        <div style="height: 50%">
          <div>
            시작 날짜
          </div>
          <div style=" padding-left: 2vw; padding-right: 1vw">
            <b-form-datepicker v-model="startDate" class="mb-2"></b-form-datepicker>
          </div>
        </div>
        <div style="height: 50%">
          <div>
            도착 날짜
          </div>
          <div style=" padding-left: 2vw; padding-right: 1vw">
            <b-form-datepicker v-model="endDate" class="mb-2"></b-form-datepicker>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="submit-button" @click="openModal">계획 만들기</button>
      </div>
    </div>
    <div class="scroll-container">
      <plan-attraction-list :attractions="selectedAttractions"
                            @place-click="(attraction) => deleteAttraction(attraction)"></plan-attraction-list>
    </div>

    <!--  모달 내용  -->
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <h2>계획을 만드시겠습니까?</h2>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10vh">
            <div>
              계획 제목
            </div>
            <input/>
          </div>
          <div style="margin-top: 5vh; display: flex; justify-content: end">
            <button class="submit-button">계획 만들기</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PlanAttractionList from "@/components/plan/PlanAttractionList";

export default {
  name: "PlanWriteDetail",
  components: {PlanAttractionList},
  props: ["planInfo"],
  data() {
    return {
      userId: "",
      startDate: "",
      endDate: "",
      isModalOpen: false
    }
  },
  created() {
    this.userId = sessionStorage.getItem("userId");
  },
  computed: {
    selectedAttractions() {
      return this.$store.getters.getSelectedAttractions;
    },
    selectedAttractionsSet() {
      return this.$store.getters.getSelectedAttractionsSet;
    }
  },
  methods: {
    deleteAttraction(attraction) {
      this.$store.commit("setSelectedAttractionsSet", attraction)
    },
    openModal() {
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden'; // 화면 스크롤 방지
      document.addEventListener('click', this.outsideClickHandler);
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = 'auto'; // 화면 스크롤 재활성화
      document.removeEventListener('click', this.outsideClickHandler);
    },
    outsideClickHandler(event) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    }
  }
}
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  max-height: 40vh;
  padding-left: 1vw;
  padding-right: 1vw;
}

.submit-button {
  border: none;
  background-color: #a7dbe1;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  padding: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20%;
  padding-left: 2vw;
  padding-right: 1vw
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active {
  opacity: 0;
}

.modal-fade-enter-to {
  opacity: 1;
}

.modal-fade-leave-active {
  opacity: 1;
}

.modal-fade-leave-to {
  opacity: 0;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 30vw;
  max-width: 600px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #000;
}

</style>