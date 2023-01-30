<template>
  <div class="game">
    <!-- 属性区 -->
    <div class="game-attribute-bar">
      <div class="game-attribute time">时间</div>
      <div class="game-attribute">体力</div>
      <div class="game-attribute">心理</div>
      <div class="game-attribute">资金</div>
    </div>

    <!-- 游戏区 -->
    <div class="game-play">
      <button @click="backStart">返回开始界面</button>
    </div>

    <!-- 事件区 -->
    <div class="game-event-bar">
      <div class="game-event">学习事件</div>
      <div class="game-event">恋爱事件</div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "start",
  setup() {
    // 路由
    const router = useRouter();

    // 返回开始页面
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
  height: 100%;
  .game-attribute-bar {
    flex: 1;
    display: flex;
    .game-attribute {
      flex: 1;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
    }
  }
  .game-play {
    flex: 5;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    height: 100%;
    .game-title {
      margin: 10px;
      font-size: xx-large;
      font-weight: bolder;
    }
  }
  .game-event-bar {
    flex: 3;
    display: flex;
    .game-event {
      flex: 1;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
    }
  }
}
</style>
