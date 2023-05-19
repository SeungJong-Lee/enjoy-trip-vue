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
      <div style="display: flex; width: 100%; height: 100%" >
        <input type="text" class="custom-input" v-model="modifyForm.userEmail"/>
        <input type="email" class="custom-second-input" placeholder="ssafy.com" v-model="modifyForm.userDomain"/>
      </div>
    </div>
    <div class="alert-container">
      현재 비밀번호
      <input type="password" class="custom-input" v-model="modifyForm.userCurPw"/>
    </div>
    <div class="custom-container">
      <button class="submit-button" @click="submitModify">변경</button>
      <router-link :to="{name: 'home'}" class="back-button">취소</router-link>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";

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

    // 새 비밀번호가 일치하는지 확인하는 기능
    checkPwEqual() {
      return this.newPwCheck === this.modifyForm.userPw;
    },
  }
}
</script>


<style scoped>
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