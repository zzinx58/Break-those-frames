<script setup lang="ts">
import { Container } from './classes/container';
import { onMounted } from 'vue';
function start(){
  let mycanvas = new Container('a',300,400);
  mycanvas.render();
}
onMounted(start);

</script>

<template>
  <div id="a">
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
