<template>
  <div class="not-found">
    <p class="num">404</p>
    <p>NotFound :(</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  p {
    font-size: xx-large;
    font-weight: bolder;
  }
  .num {
    font-size: 6em;
  }
}
</style>
