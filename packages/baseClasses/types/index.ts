import { ChartUseRectItemConfig, FontConfigOptions } from "../index";
export type {
  ChartOptions,
  CanvasItemRect,
  CanvasPointPositionType,
  GridConfigType,
  Series_ChartConfig,
};

interface ChartOptions {
  backgroundColor: string;
  title: {
    text: string;
    subText?: string;
    x_ofChart: string;
    textStyle?: FontConfigOptions;
    subTextStyle?: FontConfigOptions;
  };
  grid: GridConfigType;
  legend: {
    x_ofChart: string;
    y_ofChart: string;
    textStyle?: FontConfigOptions;
    data: string[];
  };
  //Why Echarts use Array to wrap the Axis's configs?
  xAxis: {
    type: AxisType;
    axisLine?: {
      lineStyle: AxisStyleType;
    };
    splitLine?: ShowOrNotType;
    splitArea?: ShowOrNotType;
    axisLabel?: AxisLabelType;
    data: number[];
  };
  yAxis: {
    type: AxisType;
    axisLine?: {
      lineStyle: AxisStyleType;
    };
    splitLine?: ShowOrNotType;
    splitArea?: ShowOrNotType;
    axisLabel?: AxisLabelType;
  };
  series: Array<Series_ChartConfig>;
}

type CanvasItemRect = {
  x_coordinate: number;
  y_coordinate: number;
  width: number;
  height: number;
};
type CanvasPointPositionType = {
  x_coordinate: number;
  y_coordinate: number;
};
type AxisStyleType = {
  line_color: string;
};
type ShowOrNotType = {
  show: Boolean;
};
type AxisLabelType = {
  interval: number;
};
type AxisType = "category" | "value";
type LabelPosition = "top" | "right" | "bottom" | "left" | "center";
type BarItemConfig = {
  type: "bar";
  //overlap increasing the complexity of calc.
  stackType: "stack" | "overlap";
  barMaxWidth: number;
  itemRectConfig: ChartUseRectItemConfig;
};
type LineItemConfig = {
  type: "line";
  symbolSize: number;
  symbol: "rect" | "circle" | "triangle";
  lineColor: string;
};

type Series_ChartConfig = {
  name: string;
  data: number[];
  itemLabelConfig: {
    show: Boolean;
    //It's better for LineLabel's color the same as the lineColor.
    //Text default color is #fff, and it could provide a nice contrast ratio with better looking inside the rectItem than using black color, so you can just leave it alone.
    textStyle?: FontConfigOptions;
    position: LabelPosition;
    formatter?: Function;
  };
} & (BarItemConfig | LineItemConfig);

type GridConfigType = {
  topSpaceHeight: number;
  bottomSpaceHeight: number;
  border_paddingWidth?: number;
};

// const test: Series_ChartConfig = {
//   name: "123",
//   data: [123,123],
//   type: "bar",
//   itemRectConfig: {

//   }

// }
