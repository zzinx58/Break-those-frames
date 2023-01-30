<template>
  <div>
  </div>
  <div id="a">

  </div>
</template>

<script setup lang="ts">
import {PieChart} from './classes/pieChart'
import {ChartData} from './classes/chartData'
import { getTransitionRawChildren, onMounted } from 'vue';

const data = [
  new ChartData('a',0.1),
  new ChartData('b',0.2),
  new ChartData('c',0.3),
  new ChartData('d',0.4),
];


function start(){
  let mycanvas = new PieChart('a',400,300,data);
  mycanvas.render();
}
onMounted(start);
</script>

<style scoped>

</style>
