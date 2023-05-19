<template>
  <div style="display: flex; flex-direction: column">
    <div class="custom-container">
      이름
      <input type="text" class="custom-input" v-model="modifyForm.userName"/>
    </div>
    <div class="custom-container">
      새 비밀번호
      <input type="password" class="custom-input" v-model="modifyForm.userPw"/>
    </div>
    <div class="custom-container">
      새 비밀번호 확인
      <input type="password" class="custom-input" v-model="newPwCheck"/>
    </div>
    <div class="custom-container">
      이메일
      <div class="row-container">
        <input type="text" class="custom-input" v-model="modifyForm.userEmail"/>
        <input type="email" class="custom-second-input" placeholder="ssafy.com" v-model="modifyForm.userDomain"/>
      </div>
    </div>
    <div class="alert-container">
      <br/>
      현재 비밀번호*
      <input type="password" class="custom-input" v-model="modifyForm.userCurPw"/>
    </div>

    <div class="custom-container">
      <div class="row-container">
        <button class="submit-button" @click="submitModify">변경</button>
        <button class="submit-button" style="margin-left: 5px; background-color: lightcoral" @click="submitDelete">삭제
        </button>
      </div>
      <router-link :to="{name: 'home'}" class="back-button">취소</router-link>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
// import axios from "axios";

export default {
  name: "ModifyForm",
  data() {
    return {
      newPwCheck: "",
      modifyForm: {
        userName: "",
        userPw: "",
        userEmail: "",
        userDomain: "",
        userCurPw: "",
      }
    }
  },
  methods: {
    afterModifySuccess(data) {
      alert(data.msg);
      this.$router.push({name: "home"})
    },
    submitModify() {
      if (this.checkPwEqual()) {
        http.patch("/user/api/modify", this.modifyForm, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "authorization": `Bearer ${sessionStorage.getItem("accessToken")}`
          }
        })
            .then(({data}) => this.afterModifySuccess(data))
            .catch(({response}) => alert(response.data))
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    },
    checkPwEqual() {
      return this.newPwCheck === this.modifyForm.userPw;
    },
    afterDeleteSuccess(data) {
      alert(data.msg);
      this.$router.push({name: "home"})
    },
    submitDelete() {
      console.log(11)
      http.delete("/user/api/delete", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "authorization": `Bearer ${sessionStorage.getItem("accessToken")}`
        },
        data: {
          userPw: this.modifyForm.userCurPw,
        }
      })
          .then(({data}) => this.afterDeleteSuccess(data))
          .catch(() => alert("화원삭제에 실패했습니다."))
    }
  }
}
</script>


<style scoped>
.row-container {
  display: flex;
  width: 100%;
  height: 100%
}

.submit-button {
  border: none;
  background-color: #a7dbe1;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  margin-top: 10px;
}

.back-button {
  border: none;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: white;
  margin-top: 10px;
}

.custom-input {
  border: none;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: gray;
}

.custom-second-input {
  border: none;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: gray;
  margin-left: 5px;
}

.custom-second-input::placeholder {
  color: gainsboro;
}

.custom-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 33vw;
  padding-right: 33vw;
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkgrey;
}

.alert-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 33vw;
  padding-right: 33vw;
  margin-top: 5px;
  margin-bottom: 5px;
  color: lightcoral;
}
</style>