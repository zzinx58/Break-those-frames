<template>
  <div class="game">
    <p class="game-title">游戏页面</p>
    <button @click="backStart">返回开始界面</button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "start",
  setup() {
    // 路由
    const router = useRouter();

    const backStart = () => {
      router.push("/start");
    };
    return { backStart };
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .game-title {
    margin: 10px;
    font-size: xx-large;
    font-weight: bolder;
  }
}
</style>
