<template>
  <div>
    <input class="custom-input"/>
  </div>
</template>

<script>
export default {
  name: "LogInForm"
}
</script>

<style scoped>
.custom-input {
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  transition: border-color 0.3s;
}

.custom-input:active {
  border-color: blue;
}

</style>