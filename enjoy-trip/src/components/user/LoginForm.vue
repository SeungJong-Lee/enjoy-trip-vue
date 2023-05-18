<template>
  <div>
    <div class="container">
      아이디
      <input class="custom-input"/>
    </div>
    <div class="container">
      비밀번호
      <input class="custom-input"/>
    </div>
    <div class="container" style="font-size: small">
      <router-link to="#">비밀번호를 잊으셨나요?</router-link>
    </div>
    <br/>
    <div class="container">
      <button class="submit-button">회원가입</button>
    </div>
    <br/>
    <div>
      <span style="font-size: small">회원이 아니세요? <router-link to="signup">회원가입 하기</router-link></span>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>

<style scoped>
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

.custom-input {
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  transition: border-color 0.3s;
  width: 100%;
  padding: 10px;
  color: gray;
}

.custom-input:focus {
  border-bottom: 1px solid deepskyblue;
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
</style>