<template>
  <div style="display: flex; flex-direction: column">
    <div class="container">
      아이디
      <input type="text" class="custom-input" v-model="formData.userId"/>
    </div>
    <div class="container">
      비밀번호
      <input type="password" class="custom-input" v-model="formData.userPw"/>
    </div>
    <div class="container">
      비밀번호 확인
      <input type="password" class="custom-input" v-model="userPwCheck"/>
    </div>
    <div class="container">
      이름
      <input type="text" class="custom-input" v-model="formData.userName"/>
    </div>
    <div class="container">
      이메일
      <div style="display: flex">
        <input type="text" class="custom-input" v-model="formData.userEmail"/>
        <input type="email" class="custom-second-input" placeholder="ssafy.com" v-model="formData.userDomain"/>
      </div>
    </div>
    <div class="container">
      <button class="submit-button" @click="submitSignIn">회원가입</button>
      <router-link to="/" class="back-button">돌아가기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModifyForm"
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
  margin-left: 5px
}

.custom-second-input::placeholder {
  color: gainsboro;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25vw;
  padding-right: 25vw;
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkgrey;
}
</style>