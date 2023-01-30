<template>
  <div class="start">
    <p class="game-title">游戏标题</p>
    <p class="game-background">游戏背景</p>
    <button @click="startGame">开始游戏</button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "start",
  setup() {
    // 路由
    const router = useRouter();

    // 开始游戏
    const startGame = () => {
      router.push("/game");
    };
    return { startGame };
  },
};
</script>

<style lang="scss" scoped>
.start {
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
  .game-background {
    margin: 10px;
  }
}
</style>
