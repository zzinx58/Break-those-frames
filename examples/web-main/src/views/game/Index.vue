<template>
  <div class="game">
    <!-- 属性区 -->
    <div class="game-attribute-bar">
      <div class="time">时间：{{ attribute.week }}</div>
      <div class="game-attribute">体力：{{ attribute.health }}</div>
      <div class="game-attribute">心理：{{ attribute.heart }}</div>
      <div class="game-attribute">资金：{{ attribute.money }}</div>
    </div>

    <!-- 游戏区 -->
    <div class="game-play">
      <!-- 反面卡片 -->
      <div ref="reverseCard" class="random-event card reverse-card">
        <div class="random-event-result">结果：{{ curEvent.eventResult }}</div>
        <button @click="continueGame">继续</button>
      </div>

      <!-- 正面卡片 -->
      <div ref="frontCard" class="random-event card">
        <div class="random-event-content">
          事件：{{ curEvent.eventContent }}
        </div>

        <button @click="firstChoice" class="choice-content">
          选项一：{{ curEvent.firstChoiceContent }}
        </button>

        <button @click="secondChoice" class="choice-content">
          选项二：{{ curEvent.secondChoiceContent }}
        </button>
      </div>
    </div>
    <button @click="backStart">返回开始界面</button>

    <!-- 事件区 -->
    <div class="game-event-bar">
      <div class="game-event">学习事件：{{ attribute.grades }}</div>
      <div class="game-event">恋爱事件：{{ attribute.love }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "start",
  setup() {
    // 路由
    const router = useRouter();

    // 返回开始页面
    function backStart() {
      router.push("/start");
    }

    // 属性值
    const attribute = reactive({
      week: 0,
      health: 0,
      heart: 0,
      money: 0,
      grades: 0,
      love: 0,
    });

    // 当前显示事件
    const curEvent = reactive({
      eventContent: "",
      firstChoiceContent: "",
      secondChoiceContent: "",
      eventResult: "",
    });

    // 随机事件
    let randomEvent: randomEvent = {
      eventContent: "游戏玩法简介",
      firstChoiceContent: "我看懂了。",
      firstChoiceResult: "游玩愉快。",
      firstChoiceChange: [0, 0, 0, 0, 0],
      secondChoiceContent: "我没看懂。",
      secondChoiceResult: "玩着玩着就懂了。",
      secondChoiceChange: [0, 0, 0, 0, 0],
    };

    initGame();

    // 游戏参数初始化
    function initGame() {
      attribute.week = 0;
      attribute.health = 20;
      attribute.heart = 20;
      attribute.money = 20;
      attribute.grades = 20;
      attribute.love = 20;
      updateCurEvent();
    }

    // 更新当前事件内容
    function updateCurEvent() {
      curEvent.eventContent = randomEvent.eventContent;
      curEvent.firstChoiceContent = randomEvent.firstChoiceContent;
      curEvent.secondChoiceContent = randomEvent.secondChoiceContent;
    }

    let frontCard = ref();
    let reverseCard = ref();

    // 正面卡片翻转
    function flipFrontCard() {
      frontCard.value.style.transform = "rotateY(180deg)";
      reverseCard.value.style.transform = "rotateY(0deg)";
    }

    // 反面卡片翻转
    function flipReverseCard() {
      reverseCard.value.style.transform = "rotateY(-180deg)";
      frontCard.value.style.transform = "rotateY(0deg)";
    }

    // 选项一
    function firstChoice() {
      console.log("firstChoice");
      curEvent.eventResult = randomEvent.firstChoiceResult;
      console.log(curEvent.eventResult);
      flipFrontCard();
    }

    // 选项二
    function secondChoice() {
      console.log("secondChoice");
      curEvent.eventResult = randomEvent.secondChoiceResult;
      console.log(curEvent.eventResult);
      flipFrontCard();
    }

    // 继续游戏
    function continueGame() {
      randomEvent = getRandomEvent(attribute.week);
      updateCurEvent();
      flipReverseCard();
    }

    // 随机事件数据类型
    type randomEvent = {
      eventContent: string;
      firstChoiceContent: string;
      firstChoiceResult: string;
      firstChoiceChange: number[];
      secondChoiceContent: string;
      secondChoiceResult: string;
      secondChoiceChange: number[];
    };

    // 获取随机事件
    function getRandomEvent(week: number): randomEvent {
      // 随机事件
      const randomEventsFrom1To16: randomEvent[] = [
        {
          eventContent: "test1",
          firstChoiceContent: "yes",
          firstChoiceResult: "yes",
          firstChoiceChange: [0, 0, 0, 0, 0],
          secondChoiceContent: "no",
          secondChoiceResult: "no",
          secondChoiceChange: [0, 0, 0, 0, 0],
        },
        {
          eventContent: "test2",
          firstChoiceContent: "yes",
          firstChoiceResult: "yes",
          firstChoiceChange: [0, 0, 0, 0, 0],
          secondChoiceContent: "no",
          secondChoiceResult: "no",
          secondChoiceChange: [0, 0, 0, 0, 0],
        },
        {
          eventContent: "test3",
          firstChoiceContent: "yes",
          firstChoiceResult: "yes",
          firstChoiceChange: [0, 0, 0, 0, 0],
          secondChoiceContent: "no",
          secondChoiceResult: "no",
          secondChoiceChange: [0, 0, 0, 0, 0],
        },
      ];

      let randomEvents: randomEvent[];
      if (week <= 4) {
        randomEvents = randomEventsFrom1To16;
      } else if (week <= 10) {
        randomEvents = randomEventsFrom1To16;
      } else if (week <= 12) {
        randomEvents = randomEventsFrom1To16;
      } else {
        randomEvents = randomEventsFrom1To16;
      }
      return randomEvents[Math.floor(Math.random() * randomEvents.length)];
    }

    return {
      backStart,
      attribute,
      curEvent,
      frontCard,
      reverseCard,
      firstChoice,
      secondChoice,
      continueGame,
    };
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
    .time {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
    }
    .game-attribute {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
    }
  }
  .game-play {
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    height: 100%;
    .random-event {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      border-radius: 10px;
      width: 600px;
      height: 300px;
      background-color: #eee;
      .random-event-content {
        flex: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
      }
      .choice-content {
        flex: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 0 5% 5%;
        width: 80%;
      }
      .random-event-result {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }
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

// 卡片翻转效果
.card {
  position: absolute;
  backface-visibility: hidden;
  transition: all 1s;
}

.reverse-card {
  transform: rotateY(-180deg);
}
</style>
