<template>
  <div id="container-test" />
</template>

<script setup lang="ts">
import { BarChart2D } from "bar_chart";
import {
  BasicBarChartConfigOption,
  Chart_Rect_2D,
} from "../../../../packages/baseClasses";
//Only for test use. So import like this way, it will be fix afterwards.
import { CanvasContainer } from "../../../../packages/topClasses/Container";
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
  // Rect Class Test.
  const canvasContainer = containerDOM && new CanvasContainer(containerDOM);
  const ctx = canvasContainer && canvasContainer.canvasElement.getContext("2d");
  ctx &&
    new Chart_Rect_2D(ctx, {
      fillRect_color: bar_colors[0],
      strokeRect_color: "red",
      rectangleBounds: {
        x_coordinate: 0,
        y_coordinate: 0,
        width: 200,
        height: 200,
      },
    });
  // const barChartConfigOptions: BasicBarChartConfigOption = {
  //   data: data,
  //   barChartType: "horizontal_L2R",
  //   title_configOptions: {
  //     message: "TestForBarChart",
  //     fontConfigOptions: {},
  //   },
  // };
  // const barChartTest =
  //   containerDOM && new BarChart2D(containerDOM, barChartConfigOptions);
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
