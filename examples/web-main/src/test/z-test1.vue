<template>
  <div id="container-test" />
</template>

<script setup lang="ts">
import { BarChart } from "bar_chart";
const bar_colors = ["#AAE3E2", "#D9ACF5", "#FFCEFE", "#FDEBED"];
onMounted(() => {
  const containerDOM = document.getElementById("container-test");
  const canvas = containerDOM && new BarChart(containerDOM, { bar_colors });
});
</script>

<style scoped>
#container-test {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  border: 10px solid #fb3;
}
</style>
