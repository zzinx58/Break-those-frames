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
  ContentDrawer,
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
    const layoutEngine = new LayoutEngine(containerDOM, "2d", 1000, {
      topSpaceHeight: 110,
      bottomSpaceHeight: 95,
    });
    const ctx = layoutEngine.renderingContext as CanvasRenderingContext2D;
    // const contentQueue = layoutEngine.getContentItemQueue();
    // function drawTest() {
    //   const chartContentSpaceRect = layoutEngine.chartContentSpaceRect;
    //   const y_lineItem = new Chart_Line_2D(
    //     ctx,
    //     {
    //       start_x_coordinate: chartContentSpaceRect.x_coordinate,
    //       start_y_coordinate: chartContentSpaceRect.y_coordinate,
    //       end_x_coordinate: chartContentSpaceRect.x_coordinate,
    //       end_y_coordinate:
    //         chartContentSpaceRect.height + chartContentSpaceRect.y_coordinate,
    //     },
    //     contentQueue
    //   );
    //   const x_lineItem = new Chart_Line_2D(
    //     ctx,
    //     {
    //       start_x_coordinate: chartContentSpaceRect.x_coordinate,
    //       start_y_coordinate:
    //         chartContentSpaceRect.height + chartContentSpaceRect.y_coordinate,
    //       end_x_coordinate:
    //         chartContentSpaceRect.width + chartContentSpaceRect.x_coordinate,
    //       end_y_coordinate:
    //         chartContentSpaceRect.height + chartContentSpaceRect.y_coordinate,
    //     },
    //     contentQueue
    //   );
    // }
    // drawTest();
    // window.addEventListener("resize", () => {
    //   layoutEngine.reRenderContent();
    // });
    // const lineItem = new Chart_Line_2D(
    //   ctx,
    //   {
    //     start_x_coordinate: 0,
    //     start_y_coordinate: 0,
    //     end_x_coordinate: 200,
    //     end_y_coordinate: 200,
    //   },
    //   {
    //     line_color: "red",
    //     lineWidth: 3,
    //   }
    // );
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
