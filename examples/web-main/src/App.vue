<template>
  <div>
  </div>
  <div id="a">

  </div>
</template>

<script setup lang="ts">
import {BarChart} from './classes/barChart'
import {ChartData} from './classes/chartData'
import { getTransitionRawChildren, onMounted } from 'vue';

const data = [
  new ChartData('a',5),
  new ChartData('b',4),
  new ChartData('c',3),
  new ChartData('d',2),
  new ChartData('e',3),
];


function start(){
  let mycanvas = new BarChart('a',400,300,data);
  mycanvas.render();
}
onMounted(start);
</script>

<style scoped>

</style>
