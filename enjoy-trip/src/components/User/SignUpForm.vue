<template>
  <div >
    <div class="container">
      아이디
      <input type="text" class="custom-input"/>
    </div>
    <div class="container">
      비밀번호
      <input type="text" class="custom-input"/>
    </div>
    <div class="container">
      비밀번호 확인
      <input type="text" class="custom-input"/>
    </div>
    <div class="container">
      이름
      <input type="text" class="custom-input"/>
    </div>
    <div class="container">
      이메일
      <div style="display: flex">
        <input type="text" class="custom-input"/>
        <input type="text" class="custom-second-input" placeholder="@ssafy.com"/>
      </div>
    </div>
    <div class="container">
      <button class="submit-button"> 회원가입</button>
      <button class="back-button"> 뒤로가기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinForm",
  data(){
    return {
      formData : {
        id: ""
      }
    }
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
  margin-left: 5px
}

.custom-input::placeholder {
  color: gray;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25%;
  padding-right: 25%;
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkgrey;
}
</style>