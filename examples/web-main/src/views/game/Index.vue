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
      <div class="card-wrap">
        <!-- 反面卡片 -->
        <div ref="reverseCard" class="cur-event card reverse-card">
          <div class="cur-event-result">结果：{{ curEvent.eventResult }}</div>
          <button @click="continueGame">继续</button>
        </div>

        <!-- 正面卡片 -->
        <div ref="frontCard" class="cur-event card">
          <div class="cur-event-content">事件：{{ curEvent.eventContent }}</div>

          <button @click="firstChoice" class="cur-event-choice-content">
            选项一：{{ curEvent.firstChoiceContent }}
          </button>

          <button @click="secondChoice" class="cur-event-choice-content">
            选项二：{{ curEvent.secondChoiceContent }}
          </button>
        </div>
      </div>
    </div>

    <!-- 返回开始界面按钮 -->
    <button @click="backStart">返回开始界面</button>

    <!-- 事件区 -->
    <div class="game-event-bar">
      <div class="game-event">学习事件：{{ attribute.grades }}</div>
      <div class="game-event">恋爱事件：{{ attribute.love }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
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
      updateFrontCurEvent();
    }

    // 更新当前事件正面内容
    function updateFrontCurEvent() {
      curEvent.eventContent = randomEvent.eventContent;
      curEvent.firstChoiceContent = randomEvent.firstChoiceContent;
      curEvent.secondChoiceContent = randomEvent.secondChoiceContent;
    }

    // 更新当前事件反面内容
    function updateReverseCurEvent(choiceNum: number) {
      const firstChoice = 1,
        secondChoice = 2;
      if (choiceNum === firstChoice) {
        curEvent.eventResult = randomEvent.firstChoiceResult;
      } else if (choiceNum === secondChoice) {
        curEvent.eventResult = randomEvent.secondChoiceResult;
      }
    }

    // 更新随机事件内容
    function updateRandomEvent() {
      randomEvent = getRandomEvent(attribute.week);
    }

    // 正反卡片dom
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
      const choiceNum = 1;
      updateReverseCurEvent(choiceNum);
      flipFrontCard();
    }

    // 选项二
    function secondChoice() {
      const choiceNum = 2;
      updateReverseCurEvent(choiceNum);
      flipFrontCard();
    }

    // 继续游戏
    function continueGame() {
      updateRandomEvent();
      updateFrontCurEvent();
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
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-column-center {
  @include flex-center;
  flex-flow: column;
}

.game {
  display: flex;
  flex-flow: column;
  height: 100%;
  .game-attribute-bar {
    flex: 1;
    display: flex;
    .time {
      flex: 1;
      @include flex-center;
      border: 1px solid #ccc;
    }
    .game-attribute {
      flex: 2;
      @include flex-center;
      border: 1px solid #ccc;
    }
  }
  .game-play {
    flex: 5;
    @include flex-center;
    border: 1px solid #ccc;
    height: 100%;
    .cur-event {
      @include flex-column-center;
      border: 1px solid #ccc;
      border-radius: 10px;
      width: 600px;
      height: 300px;
      background-color: #eee;
      .cur-event-content {
        flex: 1;
        @include flex-column-center;
        margin: 5% 5%;
      }
      .cur-event-choice-content {
        flex: 1;
        @include flex-column-center;
        margin: 0 5% 5%;
        width: 80%;
      }
      .cur-event-result {
        @include flex-column-center;
      }
    }
  }
  .game-event-bar {
    flex: 3;
    display: flex;
    .game-event {
      flex: 1;
      @include flex-column-center;
      border: 1px solid #ccc;
    }
  }
}

// 卡片翻转效果
.card-wrap {
  width: 600px;
  height: 300px;
  .card {
    position: absolute;
    backface-visibility: hidden;
    transition: all 1s;
  }
  .reverse-card {
    transform: rotateY(-180deg);
  }
}
</style>
