<template>
  <div id="container-test" />
</template>

<script setup lang="ts">
import { BarChart2D } from "bar_chart";
//Only for test use. So import like this way, it will be fix afterwards.
import {
  Chart_Line_2D,
  Chart_Rect_2D,
  Chart_Text_2D,
  FontConfigOptions,
  LayoutEngine,
  Position_DrawTextOptions,
} from "../../../../packages/baseClasses";
const bar_colors = ["#AAE3E2", "#D9ACF5", "#FFCEFE", "#FDEBED"];
const data = {
  朱宗旭: 20,
  ohoo: 0,
  李晨: 20,
  包涵: 15,
  ceng姜: 10,
  zzx58: 50,
  胡浩根: 10,
  赵明亮: 10,
  黄苡蓉: 3,
  陈志聪: 10,
};
onMounted(() => {
  const containerDOM = document.getElementById("container-test");
  if (containerDOM) {
    const ctx = new LayoutEngine(containerDOM, "2d", 1000)
      .renderingContext as CanvasRenderingContext2D;
    const lineItem = new Chart_Line_2D(
      ctx,
      {
        start_x_coordinate: 0,
        start_y_coordinate: 0,
        end_x_coordinate: 200,
        end_y_coordinate: 200,
      },
      {
        line_color: "red",
        lineWidth: 2,
      }
    );
  }
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
