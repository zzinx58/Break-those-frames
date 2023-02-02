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
import { MapChart } from './classes/mapChart';

const data = [
  new ChartData('a',0.1),
  new ChartData('b',0.2),
  new ChartData('c',0.3),
  new ChartData('d',0.4),
];


function start(){
  let mycanvas = new MapChart('a',400,300,'https://geo.datav.aliyun.com/areas_v3/bound/441300_full.json');
}
onMounted(start);
</script>

<style scoped>

</style>
