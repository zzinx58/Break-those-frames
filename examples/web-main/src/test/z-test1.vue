<template>
  <div id="container-test" />
</template>

<script setup lang="ts">
const containerDOM = document.getElementById("container-test");
if (containerDOM) {
}
</script>

<style scoped>
#container-test {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  border: 10px solid #fb3;
}
</style>
